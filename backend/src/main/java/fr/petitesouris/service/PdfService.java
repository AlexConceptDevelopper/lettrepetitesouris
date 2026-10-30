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
        String city = (doc != null && doc.getCity() != null) ? doc.getCity() : "Paris";
        String gift = (doc != null && doc.getGiftType() != null) ? doc.getGiftType() : "Pièce de 2 €";
        
        String gender = (doc != null && doc.getChildGender() != null) ? doc.getChildGender() : "M";
        boolean isBoy = "M".equalsIgnoreCase(gender);
        
        // Récupération et nettoyage du message personnalisé (comme dans l'aperçu frontend)
        String rawMsg = (doc != null && doc.getCustomMessage() != null && !doc.getCustomMessage().isEmpty()) 
            ? doc.getCustomMessage() 
            : "Je suis bien passée cette nuit pendant que tu dormais profondément à " + city + " ! J'ai récupéré ta jolie dent sous ton oreiller.";
        
        // Nettoyage de sécurité contre les doublons de salutation
        String cleanedMsg = rawMsg.replaceAll("(?i)^(ma chère|mon cher)\\s+[^,\\n]+,?\\s*", "").trim();

        // Thème dynamique Fille (Rose) vs Garçon (Bleu)
        String primaryColor = isBoy ? "#1e3a8a" : "#881337";   
        String secondaryColor = isBoy ? "#0284c7" : "#be123c"; 
        String lightBg = isBoy ? "#f0f9ff" : "#fff1f2";        
        String borderPill = isBoy ? "#bae6fd" : "#fbcfe8";

        // Charger les ressources en Base64
        String faviconBase64 = loadImageAsBase64("static/favicon.png");
        String logoBase64 = loadImageAsBase64("static/logo-lettre-petite-souris.png");
        String enveloppeFondBase64 = loadImageAsBase64("static/enveloppe-magique-fond.jpg");
        String lettreFondBase64 = loadImageAsBase64("images/lettre-petite-souris-fond.jpg");

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

                        .cert-outer-border {
                            width: 272mm;
                            height: 188mm;
                            border: 3px solid %s;
                            border-radius: 24px;
                            padding: 8px;
                            box-sizing: border-box;
                            background: #ffffff;
                        }

                        .cert-inner-border {
                            width: 100%%;
                            height: 100%%;
                            border: 2px dashed #f59e0b;
                            border-radius: 18px;
                            padding: 20px 35px;
                            box-sizing: border-box;
                            text-align: center;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            align-items: center;
                            background: radial-gradient(circle, #ffffff 70%%, %s 100%%);
                        }

                        .cert-header { display: flex; flex-direction: column; align-items: center; gap: 4px; }
                        .cert-header-title { font-size: 11px; color: #b45309; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
                        .cert-main-title { font-size: 28px; font-weight: 900; color: %s; margin: 2px 0; text-transform: uppercase; letter-spacing: 1px; }
                        .cert-subtitle { font-size: 11px; color: #9ca3af; font-style: italic; }

                        .cert-certifies { font-size: 11px; color: #6b7280; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-top: 10px; }
                        
                        .cert-name-pill {
                            background: %s;
                            color: #ffffff;
                            font-size: 24px;
                            font-weight: 900;
                            padding: 8px 32px;
                            border-radius: 50px;
                            display: inline-block;
                            margin: 10px 0;
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                        }

                        .cert-desc { font-size: 14px; color: #374151; margin: 8px 0; line-height: 1.6; }
                        .cert-desc b { color: %s; }

                        .cert-footer-grid {
                            width: 100%%;
                            display: flex;
                            justify-content: space-between;
                            align-items: flex-end;
                            border-top: 1px solid #f3f4f6;
                            padding-top: 10px;
                        }

                        .cert-info { text-align: left; font-size: 10px; color: #4b5563; line-height: 1.6; }
                        .cert-stamp-box { display: flex; align-items: center; gap: 8px; }
                        .cert-stamp-img { width: 50px; height: 50px; object-fit: contain; }

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
                        <div class='cert-outer-border'>
                            <div class='cert-inner-border'>
                                <div class='cert-header'>
                                    <img src='%s' style='height: 40px; width: auto;' alt='Logo' />
                                    <div class='cert-header-title'>✨ ROYAUME DES DENTS DE LAIT ✨</div>
                                    <div class='cert-main-title'>CERTIFICAT OFFICIEL</div>
                                    <div class='cert-subtitle'>Attestation officielle de récolte sous l'oreiller</div>
                                </div>

                                <div>
                                    <div class='cert-certifies'>CE DOCUMENT CERTIFIE AVEC FIERTÉ QUE</div>
                                    <div class='cert-name-pill'>%s (%s ans)</div>
                                    <div class='cert-desc'>
                                        a confié sa dent de lait (<b>%s</b>) à la Petite Souris lors de sa tournée magique.
                                    </div>
                                </div>

                                <div class='cert-footer-grid'>
                                    <div class='cert-info'>
                                        🎁 <b>Récompense laissée :</b> %s<br/>
                                        📍 <b>Inscrit au :</b> Grand Registre du Royaume des Dents
                                    </div>
                                    <div class='cert-stamp-box'>
                                        <img src='%s' class='cert-stamp-img' alt='Mascotte' />
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
                """.formatted(
                    borderPill, lightBg, primaryColor, secondaryColor, secondaryColor, // Certificat Styles
                    logoBase64, childName, childAge, toothType, gift, faviconBase64, // Certificat Contenu
                    lettreFondBase64, isBoy ? "Mon cher" : "Ma chère", childName, cleanedMsg, faviconBase64, // Lettre Contenu (avec message dynamique)
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