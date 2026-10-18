package fr.petitesouris.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Base64;
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
     * Envoie l'e-mail avec le certificat de la Petite Souris en pièce jointe via
     * l'API HTTP de Brevo.
     */
    public void sendPermitEmail(String toEmail, String childName, byte[] pdfBytes) {
        try {
            String subject = "🦷✨ Le certificat officiel de la Petite Souris pour " + childName + " est arrivé !";

            String htmlContent = """
                    <!DOCTYPE html>
                    <html>
                    <body style="font-family: Arial, sans-serif; background-color: #0f172a; color: #f8fafc; padding: 30px; border-radius: 12px;">
                        <div style="max-width: 600px; margin: 0 auto; background-color: #1e1b4b; padding: 30px; border: 1px solid rgba(251, 191, 36, 0.3); border-radius: 16px; text-align: center;">

                            <div style="margin-bottom: 15px;">
                                <img src="%s/favicon-transparent.png" alt="Logo" style="width: 50px; height: 50px; object-fit: contain;" />
                            </div>

                            <h1 style="color: #fbbf24; margin-top: 0;">Chouette, une dent perdue ! 🦷✨</h1>
                            <p style="font-size: 16px; color: #e2e8f0; text-align: left;">La Petite Souris est passée par ici ! Elle a déposé sa récompense et préparé le certificat officiel pour <strong>%s</strong>.</p>
                            <p style="font-size: 14px; color: #cbd5e1; text-align: left;">Tu trouveras le certificat magique au format PDF en pièce jointe de cet e-mail. Tu peux l'imprimer pour le glisser sous l'oreiller ou en souvenir.</p>

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
                    .formatted(frontendUrl, childName, frontendUrl);

            String url = "https://api.brevo.com/v3/smtp/email";

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("api-key", brevoApiKey);

            String base64Pdf = Base64.getEncoder().encodeToString(pdfBytes);
            String attachmentName = "Certificat_Petite_Souris_" + childName + ".pdf";

            Map<String, Object> emailPayload = Map.of(
                    "sender", Map.of("email", fromEmail, "name", fromName),
                    "to", List.of(Map.of("email", toEmail)),
                    "subject", subject,
                    "htmlContent", htmlContent,
                    "attachment", List.of(Map.of(
                            "content", base64Pdf,
                            "name", attachmentName)));

            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(emailPayload, headers);
            restTemplate.postForEntity(url, entity, String.class);

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Échec de l'envoi de l'e-mail pour " + childName, e);
        }
    }
}