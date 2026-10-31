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

        String rawMsg = (doc != null && doc.getCustomMessage() != null && !doc.getCustomMessage().isEmpty())
                ? doc.getCustomMessage()
                : "Je suis bien passée cette nuit pendant que tu dormais profondément à " + city
                        + " ! J'ai récupéré ta jolie dent sous ton oreiller.";

        String cleanedMsg = rawMsg.replaceAll("(?i)^(ma chère|mon cher)\\s+[^,\\n]+,?\\s*", "").trim();

        String faviconBase64 = loadImageAsBase64("static/favicon.png");
        String enveloppeFondBase64 = loadImageAsBase64("static/enveloppe-magique-fond.jpg");
        String lettreFondBase64 = loadImageAsBase64("static/lettre-petite-souris-fond.jpg");
        String certificatFondBase64 = loadImageAsBase64("static/certificat-petite-souris.jpg");

        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(true));
            Page page = browser.newPage();

            String htmlContent = """
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <meta charset='UTF-8'>
                        <link rel="preconnect" href="https://fonts.googleapis.com">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@400;700;900&display=swap" rel="stylesheet">
                        <style>
                            @page {
                                size: A4 landscape;
                                margin: 0;
                            }
                            * { box-sizing: border-box; }
                            body {
                                margin: 0;
                                padding: 0;
                                background: #ffffff;
                                -webkit-print-color-adjust: exact;
                                font-family: 'Montserrat', Arial, sans-serif;
                            }

                            /* ================= PAGE 1 : CERTIFICAT ================= */
                            .page-certificat {
                                width: 297mm;
                                height: 210mm;
                                page-break-after: always;
                                position: relative;
                                overflow: hidden;
                                background: #fffdf9;
                            }
                            .cert-bg {
                                position: absolute;
                                inset: 0;
                                width: 100%%;
                                height: 100%%;
                                object-fit: fill;
                                z-index: 0;
                            }
                            .cert-content {
                                position: relative;
                                z-index: 10;
                                width: 100%%;
                                height: 100%%;
                                padding: 48mm 45mm 32mm 58mm;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                text-align: center;
                                color: #3d2314;
                            }

                            /* ================= PAGE 2 : LETTRE PORTRAIT ================= */
                            @page lettre-page {
                                size: A4 portrait;
                                margin: 0;
                            }
                            .page-lettre {
                                page: lettre-page;
                                width: 210mm;
                                height: 297mm;
                                page-break-after: always;
                                position: relative;
                                overflow: hidden;
                                background: #fffdf9;
                            }
                            .lettre-bg {
                                position: absolute;
                                inset: 0;
                                width: 100%%;
                                height: 100%%;
                                object-fit: fill;
                                z-index: 0;
                            }
                            .lettre-content {
                                position: relative;
                                z-index: 10;
                                width: 100%%;
                                height: 100%%;
                                padding: 42mm 35mm 35mm 35mm;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                color: #3d2314;
                            }

                            /* ================= PAGE 3 : ENVELOPPE ================= */
                            .page-enveloppe {
                                width: 297mm;
                                height: 210mm;
                                page-break-after: avoid;
                                position: relative;
                                overflow: hidden;
                                background: #ffffff;
                            }
                            .env-bg {
                                position: absolute;
                                inset: 0;
                                width: 100%%;
                                height: 100%%;
                                object-fit: fill;
                                z-index: 0;
                            }
                            .env-target {
                                position: absolute;
                                left: 50%%;
                                top: 61%%;
                                transform: translate(-50%%, -50%%);
                                width: 45%%;
                                text-align: center;
                                z-index: 10;
                            }
                            .env-name {
                                font-family: 'Great Vibes', cursive, serif;
                                font-size: 46pt;
                                color: #4a2810;
                                text-shadow: 0 1px 2px rgba(255, 248, 220, 0.9);
                                line-height: 1;
                                display: block;
                            }
                        </style>
                    </head>
                    <body>
                        <!-- PAGE 1 : CERTIFICAT -->
                        <div class='page-certificat'>
                            <img src='%s' class='cert-bg' alt='Fond Certificat' />
                            <div class='cert-content'>
                                <div style='margin: auto 0; padding-top: 5mm;'>
                                    <div style='font-size: 18px; color: #64748b; text-transform: uppercase; font-family: sans-serif; font-weight: bold; letter-spacing: 2px; margin-bottom: 10px;'>
                                        Ce document certifie que
                                    </div>
                                    <div>
                                        <span style='font-size: 36px; font-weight: 900; color: #881337; font-family: sans-serif; border-bottom: 3px solid #fbcfe8; display: inline-block; padding: 0 18px; padding-bottom: 3px;'>
                                            %s (%s ans)
                                        </span>
                                    </div>
                                    <div style='font-size: 18px; color: #334155; line-height: 1.6; padding-top: 14px; font-style: italic; font-weight: 500; max-width: 500px; margin: 0 auto; font-family: Georgia, serif;'>
                                        a confié sa dent de lait (<strong style='color: #881337; font-style: normal; font-weight: bold;'>%s</strong> - %s) à la Petite Souris.
                                    </div>
                                </div>

                                <div style='width: 100%%; display: flex; justify-content: space-between; align-items: flex-end; font-family: sans-serif; padding-bottom: 2mm;'>
                                    <div style='text-align: left; font-size: 13px; color: #1e293b; line-height: 1.5; max-width: 70%%; font-weight: 500;'>
                                        🎁 <b>Récompense :</b> %s<br/>
                                        📍 <b>Lieu :</b> Grand Registre du Royaume
                                    </div>
                                    <div style='width: 48px; height: 48px; border-radius: 50%%; background: linear-gradient(to bottom right, #fde047, #f59e0b); border: 2px solid #fef08a; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 3px 8px rgba(0,0,0,0.25); overflow: hidden; padding: 2px;'>
                                        <img src='%s' alt='Sceau' style='width: 20px; height: 20px; object-fit: contain;' />
                                        <span style='font-size: 4.5px; font-weight: 900; text-transform: uppercase; color: #451a03;'>OFFICIEL</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- PAGE 2 : LETTRE PORTRAIT -->
                        <div class='page-lettre'>
                            <img src='%s' class='lettre-bg' alt='Fond Lettre' />
                            <div class='lettre-content'>
                                <!-- Salutation -->
                                <div style='text-align: left; padding-top: 15mm;'>
                                    <p style='font-weight: bold; color: #881337; font-size: 28px; font-family: Georgia, serif; font-style: italic; letter-spacing: 0.5px; margin: 0;'>
                                        %s %s,
                                    </p>
                                </div>
                                <!-- Texte central -->
                                <div style='margin: auto 0; text-align: left; padding: 20px 0;'>
                                    <div style='color: #4a2810; white-space: pre-line; line-height: 1.8; font-style: italic; font-size: 24px; font-weight: 500; font-family: Georgia, serif;'>
                                        %s
                                    </div>
                                </div>
                                <!-- Bas de page et signature -->
                                <div style='width: 100%%; display: flex; justify-content: space-between; align-items: flex-end; font-family: sans-serif; padding-bottom: 24mm;'>
                                    <span style='font-size: 11px; color: #64748b; font-weight: 500;'>Royaume des Dents • 2026</span>
                                    <div style='display: flex; flex-direction: column; align-items: flex-start; padding-right: 10mm;'>
                                        <span style='font-size: 12px; color: #5c3a21; display: block; font-style: italic; font-family: Georgia, serif; margin-bottom: 2px; width: 100%%; text-align: right;'>
                                            Avec toute ma tendresse,
                                        </span>
                                        <span style='font-size: 16px; font-weight: 900; color: #881337; letter-spacing: 0.5px; display: inline-flex; align-items: center; gap: 6px;'>
                                            La Petite Souris
                                            <img src='%s' alt='Favicon' style='width: 24px; height: 24px; object-fit: contain; vertical-align: middle;' />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- PAGE 3 : ENVELOPPE -->
                        <div class='page-enveloppe'>
                            <img src='%s' class='env-bg' alt='Enveloppe' />
                            <div class='env-target'>
                                <span class='env-name'>
                                    %s
                                </span>
                            </div>
                        </div>
                    </body>
                    </html>
                    """
                    .formatted(
                            certificatFondBase64, childName, childAge, toothType, toothPosition, gift, faviconBase64,
                            lettreFondBase64, isBoy ? "Mon cher" : "Ma chère", childName, cleanedMsg, faviconBase64,
                            enveloppeFondBase64, childName
                    );

            page.setContent(htmlContent);
            page.waitForLoadState(com.microsoft.playwright.options.LoadState.NETWORKIDLE);

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
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">
                    <style>
                        @page { size: A4 landscape; margin: 0; }
                        body { margin: 0; padding: 0; background: #ffffff; -webkit-print-color-adjust: exact; }
                        .page-enveloppe {
                            width: 297mm; height: 210mm; position: relative; overflow: hidden; background: #ffffff;
                        }
                        .env-target {
                            position: absolute; left: 50%%; top: 61%%; transform: translate(-50%%, -50%%); width: 45%%; text-align: center; z-index: 10;
                        }
                        .env-name {
                            font-family: 'Great Vibes', cursive, serif;
                            font-size: 46pt;
                            color: #4a2810;
                            text-shadow: 0 1px 2px rgba(255, 248, 220, 0.9);
                            line-height: 1;
                            display: block;
                        }
                    </style>
                </head>
                <body>
                    <div class='page-enveloppe'>
                        <img src='%s' style='position: absolute; inset: 0; width: 100%%; height: 100%%; object-fit: fill;' alt='Enveloppe' />
                        <div class='env-target'>
                            <span class='env-name'>
                                %s
                            </span>
                        </div>
                    </div>
                </body>
                </html>
                """.formatted(enveloppeFondBase64, childName);

            page.setContent(htmlContent);
            page.waitForLoadState(com.microsoft.playwright.options.LoadState.NETWORKIDLE);

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