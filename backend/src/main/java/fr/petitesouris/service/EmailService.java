package fr.petitesouris.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.*;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class EmailService {

    @Value("${app.frontend.url}")
    private String frontendUrl;

    @Value("${app.mail.from}")
    private String fromEmail;

    @Value("${app.mail.from-name:La Petite Souris}")
    private String fromName;

    @Value("${brevo.api.key:}")
    private String brevoApiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    /**
     * Envoie l'e-mail avec le PDF de la Petite Souris (Kit complet ou Enveloppe seule) en pièce jointe via l'API HTTP de Brevo.
     */
    @Async
    public void sendPermitEmail(String toEmail, String childName, byte[] pdfBytes, boolean isFullKit) {
        try {
            // Sujet et textes adaptés selon la formule
            String subject = isFullKit 
                ? "🦷✨ Le kit magique de la Petite Souris pour " + childName + " est arrivé !"
                : "✉️✨ L'enveloppe magique de la Petite Souris pour " + childName + " est prête !";

            String descriptionText = isFullKit
                ? "La Petite Souris est passée par ici ! Elle a déposé sa récompense et préparé le kit magique (certificat, lettre et enveloppe) pour <strong>" + childName + "</strong>."
                : "La Petite Souris a préparé ton enveloppe magique personnalisée pour <strong>" + childName + "</strong>.";

            String instructionText = isFullKit
                ? "Tu trouveras ton kit magique complet au format PDF en pièce jointe de cet e-mail. Tu peux l'imprimer pour le glisser sous l'oreiller."
                : "Tu trouveras ton enveloppe magique au format PDF en pièce jointe de cet e-mail. Il te suffit de l'imprimer, de la découper et de la plier !";

            String attachmentName = isFullKit 
                ? "Kit_Complet_Petite_Souris_" + childName + ".pdf"
                : "Enveloppe_Magique_" + childName + ".pdf";

            // Chargement du favicon en Base64 depuis static/
            String logoBase64 = loadImageAsBase64("static/favicon.png");

            String htmlContent = """
                    <!DOCTYPE html>
                    <html>
                    <body style="font-family: Arial, sans-serif; background-color: #0f172a; color: #f8fafc; padding: 30px; border-radius: 12px;">
                        <div style="max-width: 600px; margin: 0 auto; background-color: #1e1b4b; padding: 30px; border: 1px solid rgba(251, 191, 36, 0.3); border-radius: 16px; text-align: center;">

                            <div style="margin-bottom: 15px;">
                                <img src="%s" alt="Logo" style="width: 50px; height: 50px; object-fit: contain;" />
                            </div>

                            <h1 style="color: #fbbf24; margin-top: 0;">Chouette, une dent perdue ! 🦷✨</h1>
                            <p style="font-size: 16px; color: #e2e8f0; text-align: left;">%s</p>
                            <p style="font-size: 14px; color: #cbd5e1; text-align: left;">%s</p>

                            <div style="text-align: center; margin: 30px 0;">
                                <span style="background-color: rgba(251, 191, 36, 0.15); color: #fde047; padding: 10px 20px; border-radius: 9999px; font-weight: bold; border: 1px solid rgba(251, 191, 36, 0.3);">
                                    ✨ Secret du Royaume des Dents de Lait
                                </span>
                            </div>

                            <p style="color: #94a3b8; font-size: 12px; margin-top: 40px; text-align: center; border-top: 1px solid rgba(251, 191, 36, 0.15); padding-top: 20px;">
                                Félicitations à ton petit aventurier !<br>Le Secrétariat de la Petite Souris • <a href="%s" style="color: #fbbf24; text-decoration: none;">lettrepetitesouris.fr</a>
                            </p>
                        </div>
                    </body>
                    </html>
                    """
                    .formatted(logoBase64, descriptionText, instructionText, frontendUrl);

            String url = "https://api.brevo.com/v3/smtp/email";

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("api-key", brevoApiKey);

            // Encodage propre du PDF en Base64 string
            String base64Pdf = new String(Base64.getEncoder().encode(pdfBytes), StandardCharsets.UTF_8);

            Map<String, Object> senderMap = new HashMap<>();
            senderMap.put("email", fromEmail);
            senderMap.put("name", fromName);

            Map<String, Object> toMap = new HashMap<>();
            toMap.put("email", toEmail);

            Map<String, Object> attachmentMap = new HashMap<>();
            attachmentMap.put("content", base64Pdf);
            attachmentMap.put("name", attachmentName);

            Map<String, Object> emailPayload = new HashMap<>();
            emailPayload.put("sender", senderMap);
            emailPayload.put("to", List.of(toMap));
            emailPayload.put("subject", subject);
            emailPayload.put("htmlContent", htmlContent);
            emailPayload.put("attachment", List.of(attachmentMap));

            HttpEntity<Object> entity = new HttpEntity<>(emailPayload, headers);
            restTemplate.postForEntity(url, entity, String.class);

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Échec de l'envoi de l'e-mail pour " + childName, e);
        }
    }

    private String loadImageAsBase64(String resourcePath) {
        try {
            ClassPathResource resource = new ClassPathResource(resourcePath);
            try (InputStream is = resource.getInputStream()) {
                byte[] bytes = is.readAllBytes();
                String mimeType = resourcePath.endsWith(".png") ? "image/png" : "image/jpeg";
                return "data:" + mimeType + ";base64," + Base64.getEncoder().encodeToString(bytes);
            }
        } catch (Exception e) {
            System.err.println("Impossible de charger le logo de l'e-mail : " + resourcePath);
            return "";
        }
    }
}