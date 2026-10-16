package fr.petitesouris.service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.petitesouris.dto.CreateOrderRequest;
import fr.petitesouris.dto.StripeResponse;
import fr.petitesouris.mapper.OrderMapper;
import fr.petitesouris.model.ToothOrder;
import fr.petitesouris.repository.ToothOrderRepository;

@Service
public class OrderService {

    private final ToothOrderRepository orderRepository;
    private final OrderMapper orderMapper;
    private final PdfService pdfService;
    private final EmailService emailService;

    @Value("${stripe.api.key}")
    private String stripeApiKey;

    @Value("${app.frontend.url}")
    private String frontendUrl;

    public OrderService(ToothOrderRepository orderRepository, OrderMapper orderMapper, PdfService pdfService,
            EmailService emailService) {
        this.orderRepository = orderRepository;
        this.orderMapper = orderMapper;
        this.pdfService = pdfService;
        this.emailService = emailService;
    }

    @PostConstruct
    public void initStripe() {
        Stripe.apiKey = stripeApiKey;
    }

    @Transactional
    public StripeResponse createOrderAndStripeSession(CreateOrderRequest request) {
        ToothOrder order = orderMapper.toEntity(request);
        ToothOrder savedOrder = orderRepository.save(order);

        try {
            SessionCreateParams params = SessionCreateParams.builder()
                    .setMode(SessionCreateParams.Mode.PAYMENT)
                    .setCustomerEmail(savedOrder.getCustomerEmail())
                    .addLineItem(
                            SessionCreateParams.LineItem.builder()
                                    .setQuantity(1L)
                                    .setPriceData(
                                            SessionCreateParams.LineItem.PriceData.builder()
                                                    .setCurrency("eur")
                                                    .setUnitAmount(199L)
                                                    .setProductData(
                                                            SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                                                    .setName("Certificat et Kit Magique de la Petite Souris")
                                                                    .setDescription("Document personnalisé pour la perte de dent")
                                                                    .build())
                                                    .build())
                                    .build())
                    .setSuccessUrl(frontendUrl + "/success?session_id={CHECKOUT_SESSION_ID}")
                    .setCancelUrl(frontendUrl + "/cancel")
                    .putMetadata("orderId", savedOrder.getId().toString())
                    .build();

            Session session = Session.create(params);
            savedOrder.setStripeSessionId(session.getId());
            orderRepository.save(savedOrder);

            return new StripeResponse(
                    "SUCCESS",
                    "Session Stripe créée avec succès",
                    session.getId(),
                    session.getUrl());

        } catch (StripeException e) {
            throw new RuntimeException("Erreur Stripe : " + e.getMessage(), e);
        }
    }

    @Transactional
    public void processSuccessfulPayment(String sessionId) {
        ToothOrder order = orderRepository.findByStripeSessionId(sessionId)
                .orElseThrow(() -> new RuntimeException("COMMANDE_INTROUVABLE"));

        if ("PENDING".equals(order.getStatus())) {
            order.setStatus("PAID");
            orderRepository.save(order);

            try {
                String childName = (order.getDocumentData() != null && order.getDocumentData().getChildName() != null)
                        ? order.getDocumentData().getChildName()
                        : "l'enfant";

                // Génération du PDF (utilise ta méthode de PdfService adaptée à la petite souris)
                byte[] pdfBytes = pdfService.generateCertificatePdf(order);

                // Envoi de l'e-mail via Brevo
                emailService.sendPermitEmail(order.getCustomerEmail(), childName, pdfBytes);

            } catch (Exception e) {
                throw new RuntimeException("Erreur lors du traitement post-paiement (PDF/Email) : " + e.getMessage(), e);
            }
        }
    }

    @Transactional
    public byte[] generatePdfForSession(String sessionId) {
        ToothOrder order = orderRepository.findByStripeSessionId(sessionId)
                .orElseThrow(() -> new RuntimeException("COMMANDE_INTROUVABLE"));

        if ("PENDING".equals(order.getStatus())) {
            try {
                Session session = Session.retrieve(sessionId);
                if ("paid".equals(session.getPaymentStatus())) {
                    processSuccessfulPayment(sessionId);
                    order = orderRepository.findByStripeSessionId(sessionId).get();
                }
            } catch (Exception e) {
                // Ignore pour laisser passer l'exception si non payé
            }
        }

        if (!"PAID".equals(order.getStatus())) {
            throw new SecurityException("PAIEMENT_NON_VALIDE");
        }

        try {
            return pdfService.generateCertificatePdf(order);
        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de la génération du PDF", e);
        }
    }
}