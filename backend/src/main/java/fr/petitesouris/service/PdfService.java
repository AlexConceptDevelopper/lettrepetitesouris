package fr.petitesouris.service;

import com.microsoft.playwright.*;
import fr.petitesouris.model.DocumentData;
import fr.petitesouris.model.ToothOrder;
import org.springframework.stereotype.Service;

@Service
public class PdfService {

    public byte[] generateCertificatePdf(ToothOrder order) {
        // 1. Récupération sécurisée des données du document
        DocumentData doc = order.getDocumentData();
        
        String childName = (doc != null && doc.getChildName() != null) ? doc.getChildName() : "l'enfant";
        String childAge = (doc != null && doc.getChildAge() != null) ? String.valueOf(doc.getChildAge()) : "";
        String toothType = (doc != null && doc.getToothType() != null) ? doc.getToothType() : "dent de lait";
        
        // Gestion du genre pour l'accord (Féminin par défaut ou selon la valeur)
        String gender = (doc != null && doc.getChildGender() != null) ? doc.getChildGender() : "F";
        String cherForm = "M".equals(gender) ? "Mon cher" : "Ma chère";
        String ageForm = "M".equals(gender) ? "Âgé" : "Âgée";

        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(true));
            Page page = browser.newPage();

            String htmlContent = """
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset='UTF-8'>
                    <style>
                        body { font-family: 'Helvetica', sans-serif; text-align: center; padding: 40px; background: #fdfbf7; }
                        .certificate { border: 5px solid #d4af37; padding: 40px; border-radius: 15px; background: white; }
                        h1 { color: #4a3b32; font-size: 36px; }
                        p { font-size: 18px; color: #555; }
                        .name { color: #d4af37; font-size: 28px; font-weight: bold; }
                    </style>
                </head>
                <body>
                    <div class='certificate'>
                        <h1>Certificat Officiel de la Petite Souris</h1>
                        <p>%s,</p>
                        <div class='name'>%s</div>
                        <p>%s de %s ans, pour la perte de sa %s.</p>
                        <p style='margin-top: 50px; font-style: italic;'>Signé par la Petite Souris ✨</p>
                    </div>
                </body>
                </html>
                """.formatted(cherForm, childName, ageForm, childAge, toothType);

            page.setContent(htmlContent);
            byte[] pdfBytes = page.pdf(new Page.PdfOptions().setFormat("A4").setPrintBackground(true));
            browser.close();
            return pdfBytes;
        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de la génération du PDF", e);
        }
    }
}