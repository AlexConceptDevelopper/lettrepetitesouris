package fr.petitesouris.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import fr.petitesouris.dto.CreateOrderRequest;
import fr.petitesouris.dto.StripeResponse;
import fr.petitesouris.service.OrderService;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "${app.frontend.url}")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/checkout")
    public ResponseEntity<StripeResponse> createCheckoutSession(@RequestBody CreateOrderRequest request) {
        StripeResponse response = orderService.createOrderAndStripeSession(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/download-pdf")
    public ResponseEntity<byte[]> downloadPdf(@RequestParam String sessionId) {
        try {
            byte[] pdfBytes = orderService.generatePdfForSession(sessionId);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_PDF);
            headers.setContentDispositionFormData("attachment", "Certificat-Petite-Souris.pdf");

            return ResponseEntity.ok()
                    .headers(headers)
                    .body(pdfBytes);

        } catch (SecurityException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        } catch (RuntimeException e) {
            if ("COMMANDE_INTROUVABLE".equals(e.getMessage())) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
            return ResponseEntity.internalServerError().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}