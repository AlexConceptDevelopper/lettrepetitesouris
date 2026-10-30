package fr.petitesouris.service;

import com.microsoft.playwright.*;
import fr.petitesouris.model.DocumentData;
import fr.petitesouris.model.ToothOrder;
import org.springframework.stereotype.Service;
import org.springframework.core.io.ClassPathResource;

import java.io.InputStream;
import java.util.Base64;

@Service
public class PdfService {

    public byte[] generateCertificatePdf(ToothOrder order) {
        DocumentData doc = order.getDocumentData();

        String childName = (doc != null && doc.getChildName() != null) ? doc.getChildName() : "Léna";
        String childAge = (doc != null && doc.getChildAge() != null) ? String.valueOf(doc.getChildAge()) : "6";
        String toothType = (doc != null && doc.getToothType() != null) ? doc.getToothType() : "Molaire";
        String toothPosition = (doc != null && doc.getToothPosition() != null) ? doc.getToothPosition() : "Bas - Côté";
        String city = (doc != null && doc.getCity() != null) ? doc.getCity() : "Paris";
        String gift = (doc != null && doc.getGiftType() != null) ? doc.getGiftType() : "Pièce de 2 €";

        String gender = (doc != null && doc.getChildGender() != null) ? doc.getChildGender() : "M";
        boolean isBoy = "M".equalsIgnoreCase(gender);

        // Récupération et nettoyage du message personnalisé (comme dans l'aperçu frontend)
        String rawMsg = (doc != null && doc.getCustomMessage() != null && !doc.getCustomMessage().isEmpty())
                ? doc.getCustomMessage()
                : "Je suis bien passée cette nuit pendant que tu dormais profondément à " + city
                        + " ! J'ai récupéré ta jolie dent sous ton oreiller.";

        // Nettoyage de sécurité contre les doublons de salutation
        String cleanedMsg = rawMsg.replaceAll("(?i)^(ma chère|mon cher)\\s+[^,\\n]+,?\\s*", "").trim();

        // Charger les ressources en Base64
        String faviconBase64 = loadImageAsBase64("static/favicon.png");
        String enveloppeFondBase64 = loadImageAsBase64("static/enveloppe-magique-fond.jpg");
        String lettreFondBase64 = loadImageAsBase64("images/lettre-petite-souris-fond.jpg");
        String certificatFondBase64 = loadImageAsBase64("images/certificat-petite-souris-fond.jpg");

        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(true));
            Page page = browser.newPage();

            String htmlContent = """
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <meta charset='UTF-8'>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');
                            @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

                            @page { size: A4 landscape; margin: 0; }
                            body { font-family: 'Montserrat', Arial, sans-serif; margin: 0; padding: 0; background: #ffffff; -webkit-print-color-adjust: exact; }

                            /* ---------------- PAGE 1 : CERTIFICAT PAYSAGE ---------------- */
                            .page-certificat {
                                width: 297mm;
                                height: 210mm;
                                page-break-after: always;
                                box-sizing: border-box;
                                position: relative;
                                overflow: hidden;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                background: #fffdf9;
                            }

                            .cert-card {
                                width: 220mm;
                                height: 190mm;
                                position: relative;
                                overflow: hidden;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                box-sizing: border-box;
                                background: #fffdf9;
                            }

                            .cert-bg-img {
                                position: absolute;
                                inset: 0;
                                width: 100%%;
                                height: 100%%;
                                object-fit: fill;
                                pointer-events: none;
                                z-index: 0;
                            }

                            .cert-content {
                                position: relative;
                                z-index: 10;
                                width: 100%%;
                                height: 100%%;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                box-sizing: border-box;
                                padding: 28mm 35mm 20mm 35mm;
                                font-family: serif;
                                color: #3d2314;
                                text-align: center;
                            }

                            /* ---------------- PAGE 2 : LETTRE PAYSAGE (SYNCHRO AVEC LE FRONT) ---------------- */
                            .page-lettre {
                                width: 297mm;
                                height: 210mm;
                                page-break-after: always;
                                box-sizing: border-box;
                                position: relative;
                                overflow: hidden;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                background: #fffdf9;
                            }

                            .lettre-card {
                                width: 220mm;
                                height: 190mm;
                                position: relative;
                                overflow: hidden;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                box-sizing: border-box;
                                background: #fffdf9;
                            }

                            .lettre-bg-img {
                                position: absolute;
                                inset: 0;
                                width: 100%%;
                                height: 100%%;
                                object-fit: fill;
                                pointer-events: none;
                                z-index: 0;
                            }

                            .lettre-content {
                                position: relative;
                                z-index: 10;
                                width: 100%%;
                                height: 100%%;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                box-sizing: border-box;
                                padding: 25mm 30mm 20mm 30mm;
                                font-family: serif;
                                color: #3d2314;
                            }

                            /* ---------------- PAGE 3 : ENVELOPPE A4 PAYSAGE ---------------- */
                            .page-enveloppe {
                                width: 297mm;
                                height: 210mm;
                                page-break-after: avoid;
                                box-sizing: border-box;
                                position: relative;
                                overflow: hidden;
                                background: #ffffff;
                            }
                        </style>
                    </head>
                    <body>
                        <!-- PAGE 1 : CERTIFICAT PAYSAGE -->
                        <div class='page-certificat'>
                            <div class='cert-card'>
                                <!-- Fond du certificat avec le titre intégré -->
                                <img src='%s' class='cert-bg-img' alt='Fond Certificat' />

                                <div class='cert-content'>
                                    <!-- Espace supérieur pour laisser respirer le titre intégré dans l'image -->
                                    <div style='padding-top: 15mm;'></div>

                                    <!-- Corps central -->
                                    <div style='margin: auto 0; text-align: center;'>
                                        <div style='font-size: 11px; color: #64748b; text-transform: uppercase; font-family: sans-serif; font-weight: bold; letter-spacing: 1px; margin-bottom: 6px;'>
                                            Ce document certifie que
                                        </div>
                                        <div>
                                            <span style='font-size: 22px; font-weight: 900; color: #881337; font-family: sans-serif; border-bottom: 2px solid #fbcfe8; display: inline-block; padding: 0 12px; padding-bottom: 2px;'>
                                                %s (%s ans)
                                            </span>
                                        </div>
                                        <div style='font-size: 13.5px; color: #334155; line-height: 1.5; padding-top: 8px; font-style: italic; font-weight: 500; max-width: 400px; margin: 0 auto;'>
                                            a confié sa dent de lait (<strong style='color: #881337; font-style: normal; font-weight: bold;'>%s</strong> - %s) à la Petite Souris.
                                        </div>
                                    </div>

                                    <!-- Pied de certificat -->
                                    <div style='width: 100%%; display: flex; justify-content: space-between; align-items: flex-end; font-family: sans-serif; padding-bottom: 5px;'>
                                        <div style='text-align: left; font-size: 11px; color: #334155; line-height: 1.4; max-width: 75%%;'>
                                            🎁 <b>Récompense :</b> %s<br/>
                                            📍 <b>Lieu :</b> Grand Registre du Royaume
                                        </div>
                                        <div style='width: 42px; height: 42px; border-radius: 50%%; background: linear-gradient(to bottom right, #fde047, #f59e0b); border: 2px solid #fef08a; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(0,0,0,0.15); overflow: hidden; padding: 2px;'>
                                            <img src='%s' alt='Sceau' style='width: 20px; height: 20px; object-fit: contain;' />
                                            <span style='font-size: 4px; font-weight: 900; text-transform: uppercase; color: #451a03;'>OFFICIEL</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- PAGE 2 : LA LETTRE -->
                        <div class='page-lettre'>
                            <div class='lettre-card'>
                                <!-- Fond de la lettre féerique -->
                                <img src='%s' class='lettre-bg-img' alt='Fond Lettre' />

                                <!-- Conteneur de texte -->
                                <div class='lettre-content'>
                                    <!-- Zone Haute : Salutation dynamique -->
                                    <div style='padding-top: 10px; text-align: left;'>
                                        <p style='font-weight: bold; color: #881337; font-size: 22px; font-family: serif; font-style: italic; letter-spacing: 0.5px; margin: 0;'>
                                            %s %s,
                                        </p>
                                    </div>

                                    <!-- Zone Centrale : Message personnalisé dynamique (incluant la ville et le texte saisi) -->
                                    <div style='margin: auto 0; text-align: left; padding: 10px 0;'>
                                        <div style='color: #4a2810; white-space: pre-line; line-height: 1.6; font-style: italic; font-size: 13.5px; font-weight: 500;'>
                                            %s
                                        </div>
                                    </div>

                                    <!-- Zone Basse : Pied de page et Signature alignés -->
                                    <div style='width: 100%%; display: flex; justify-content: space-between; align-items: flex-end; font-family: sans-serif; padding-bottom: 5px;'>
                                        <span style='font-size: 10px; color: #64748b; font-weight: 500;'>Royaume des Dents • 2026</span>

                                        <div style='display: flex; flex-direction: column; align-items: flex-start; padding-right: 10px;'>
                                            <span style='font-size: 11px; color: #5c3a21; display: block; font-style: italic; font-family: serif; margin-bottom: 2px; width: 100%%; text-align: right;'>
                                                Avec toute ma tendresse,
                                            </span>
                                            <span style='font-size: 14px; font-weight: 900; color: #881337; letter-spacing: 0.5px; display: inline-flex; align-items: center; gap: 6px;'>
                                                La Petite Souris
                                                <img src='%s' alt='Favicon' style='width: 22px; height: 22px; object-fit: contain; display: inline-block; vertical-align: middle;' />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- PAGE 3 : ENVELOPPE A4 PAYSAGE -->
                        <div class='page-enveloppe'>
                            <img
                                src='%s'
                                style='position: absolute; top: 0; left: 0; width: 100%%; height: 100%%; object-fit: fill;'
                                alt='Gabarit Enveloppe Magique'
                            />
                            <div style='position: absolute; left: 50%%; top: 50%%; transform: translate(-50%%, -59%%); width: 40%%; text-align: center;'>
                                <span style='font-family: "Great Vibes", cursive; font-size: 38pt; color: #4a2810; text-shadow: 0 1px 2px rgba(255, 248, 220, 0.8);'>
                                    %s
                                </span>
                            </div>
                        </div>
                    </body>
                    </html>
                    """
                    .formatted(
                            certificatFondBase64, childName, childAge, toothType, toothPosition, gift, faviconBase64, // Certificat Contenu
                            lettreFondBase64, isBoy ? "Mon cher" : "Ma chère", childName, cleanedMsg, faviconBase64, // Lettre Contenu
                            enveloppeFondBase64, childName // Enveloppe Contenu
                    );

            page.setContent(htmlContent);
            byte[] pdfBytes = page.pdf(new Page.PdfOptions().setFormat("A4").setPrintBackground(true));
            browser.close();
            return pdfBytes;
        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de la génération du PDF", e);
        }
    }

    public byte[] generateEnvelopePdf(ToothOrder order) {
        DocumentData doc = order.getDocumentData();
        String childName = (doc != null && doc.getChildName() != null) ? doc.getChildName() : "Léna";
        String enveloppeFondBase64 = loadImageAsBase64("static/enveloppe-magique-fond.jpg");

        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(true));
            Page page = browser.newPage();

            String htmlContent = """
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset='UTF-8'>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
                        @page { size: A4 landscape; margin: 0; }
                        body { margin: 0; padding: 0; background: #ffffff; -webkit-print-color-adjust: exact; }
                        .page-enveloppe {
                            width: 297mm;
                            height: 210mm;
                            position: relative;
                            overflow: hidden;
                            background: #ffffff;
                        }
                    </style>
                </head>
                <body>
                    <div class='page-enveloppe'>
                        <img 
                            src='%s' 
                            style='position: absolute; top: 0; left: 0; width: 100%%; height: 100%%; object-fit: fill;' 
                            alt='Gabarit Enveloppe Magique' 
                        />
                        <div style='position: absolute; left: 50%%; top: 50%%; transform: translate(-50%%, -59%%); width: 40%%; text-align: center;'>
                            <span style='font-family: "Great Vibes", cursive; font-size: 38pt; color: #4a2810; text-shadow: 0 1px 2px rgba(255, 248, 220, 0.8);'>
                                %s
                            </span>
                        </div>
                    </div>
                </body>
                </html>
                """.formatted(enveloppeFondBase64, childName);

            page.setContent(htmlContent);
            byte[] pdfBytes = page.pdf(new Page.PdfOptions().setFormat("A4").setPrintBackground(true));
            browser.close();
            return pdfBytes;
        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de la génération de l'enveloppe PDF", e);
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
            System.err.println("Impossible de charger l'image : " + resourcePath);
            return "";
        }
    }
}