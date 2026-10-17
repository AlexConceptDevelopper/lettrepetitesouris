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
        
        String childName = (doc != null && doc.getChildName() != null) ? doc.getChildName() : "Alex";
        String childAge = (doc != null && doc.getChildAge() != null) ? String.valueOf(doc.getChildAge()) : "6";
        String toothType = (doc != null && doc.getToothType() != null) ? doc.getToothType() : "Molaire";
        String city = (doc != null && doc.getCity() != null) ? doc.getCity() : "Paris";
        String gift = (doc != null && doc.getGiftType() != null) ? doc.getGiftType() : "Pièce de 2 €";
        
        String gender = (doc != null && doc.getChildGender() != null) ? doc.getChildGender() : "M";
        boolean isBoy = "M".equalsIgnoreCase(gender);
        
        String cherForm = isBoy ? "Mon cher " + childName : "Ma chère " + childName;

        // Thème dynamique Fille (Rose) vs Garçon (Bleu)
        String primaryColor = isBoy ? "#1e3a8a" : "#881337";   // Bleu nuit vs Magenta foncé
        String secondaryColor = isBoy ? "#0284c7" : "#be123c"; // Bleu céleste vs Rose vif
        String lightBg = isBoy ? "#f0f9ff" : "#fff1f2";        // Fond bleu très clair vs Rose très clair
        String borderPill = isBoy ? "#bae6fd" : "#fbcfe8";

        // Charger les images en Base64
        String faviconBase64 = loadImageAsBase64("static/favicon.png");
        String logoBase64 = loadImageAsBase64("static/logo-lettre-petite-souris.png");

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

                        /* ---------------- PAGE 2 : LETTRE PAYSAGE (GARANTIE 1 PAGE) ---------------- */
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
                            background: #fdfbf7; 
                        }

                        .lettre-card {
                            width: 220mm;
                            height: 180mm;
                            background: #ffffff;
                            border: 2px solid %s;
                            border-radius: 24px;
                            padding: 25px 35px;
                            box-sizing: border-box;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
                        }

                        .lettre-header { text-align: center; border-bottom: 1px solid #f3f4f6; padding-bottom: 10px; display: flex; flex-direction: column; align-items: center; }
                        .lettre-title { font-size: 20px; font-weight: 900; color: %s; margin-top: 4px; letter-spacing: 1px; }
                        .lettre-sub { font-size: 9px; color: %s; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }

                        .lettre-body {
                            font-size: 12.5px;
                            color: #1f2937;
                            line-height: 1.65;
                            font-style: italic;
                            margin: 10px 0;
                        }
                        .lettre-body b { font-style: normal; font-weight: 700; color: %s; }

                        .lettre-footer {
                            display: flex;
                            justify-content: space-between;
                            align-items: flex-end;
                            border-top: 1px solid #f3f4f6;
                            padding-top: 10px;
                        }

                        .lettre-signature { text-align: right; color: %s; font-weight: 700; font-size: 13px; }

                        /* ---------------- PAGE 3 : ENVELOPPE A4 PAYSAGE ---------------- */
                        .page-enveloppe {
                            width: 297mm;
                            height: 210mm;
                            page-break-after: avoid;
                            box-sizing: border-box;
                            position: relative;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            background: #ffffff;
                            padding: 10mm;
                        }

                        .env-cut-outer {
                            width: 250mm;
                            height: 165mm;
                            border: 2px dashed %s;
                            border-radius: 16px;
                            background: %s;
                            position: relative;
                            box-sizing: border-box;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            align-items: center;
                            padding: 10px;
                        }

                        .env-rabat-haut {
                            background: #ffffff;
                            border: 1px dashed %s;
                            color: %s;
                            font-size: 8px;
                            font-weight: 800;
                            padding: 4px 24px;
                            border-radius: 6px;
                        }

                        .env-center-box {
                            width: 82%%;
                            height: 85mm;
                            background: #ffffff;
                            border: 1px solid %s;
                            border-radius: 16px;
                            padding: 15px 25px;
                            box-sizing: border-box;
                            position: relative;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
                        }

                        .env-stamp-box {
                            position: absolute;
                            top: 10px;
                            right: 15px;
                            border: 1px dashed %s;
                            border-radius: 8px;
                            padding: 4px 8px;
                            text-align: center;
                            background: %s;
                            font-size: 8px;
                            color: %s;
                            font-weight: 700;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            gap: 2px;
                        }

                        .env-dest-content { display: flex; flex-direction: column; justify-content: center; }
                        .env-to { font-size: 9px; color: #9ca3af; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; }
                        .env-name-row { display: flex; align-items: center; gap: 12px; margin: 6px 0; }
                        .env-name { font-size: 26px; font-weight: 900; color: %s; }
                        .env-mascot-img { width: 50px; height: 50px; object-fit: contain; }
                        .env-sub { font-size: 11px; color: #4b5563; font-style: italic; }

                        .env-bottom-controls {
                            width: 85%%;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }

                        .env-pill-fold {
                            background: #ffffff;
                            border: 1px dashed %s;
                            color: %s;
                            font-size: 8px;
                            font-weight: 800;
                            padding: 4px 12px;
                            border-radius: 12px;
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

                    <!-- PAGE 2 : LA LETTRE (GARANTIE 1 SEULE PAGE PAYSAGE) -->
                    <div class='page-lettre'>
                        <div class='lettre-card'>
                            <div class='lettre-header'>
                                <img src='%s' style='height: 38px; width: auto;' alt='Logo' />
                                <div class='lettre-title'>LA LETTRE DE LA PETITE SOURIS</div>
                                <div class='lettre-sub'>MESSAGE MAGIQUE SOUS L'OREILLER</div>
                            </div>

                            <div class='lettre-body'>
                                <p><b>%s,</b></p>
                                <p>
                                    Je suis bien passée cette nuit pendant que tu dormais paisiblement à <b>%s</b> ! 
                                    En m'approchant tout doucement sur la pointe de mes petites pattes, j'ai trouvé ta jolie dent de lait (<b>%s</b>) cachée sous ton oreiller.
                                </p>
                                <p>
                                    Quelle merveilleuse dent bien propre et bien entretenue ! Elle va briller de mille feux dans le Grand Palais en Sucre de notre Royaume. 
                                    Pour te féliciter de ton courage et de ton beau sourire, je t'ai laissé une petite surprise : <b>%s</b>.
                                </p>
                                <p>
                                    Continue de bien prendre soin de tes dents chaque matin et chaque soir avec ta brosse à dents !
                                </p>
                            </div>

                            <div class='lettre-footer'>
                                <div style='font-size: 10px; color: #9ca3af;'>Royaume des Dents • Document Officiel 2026</div>
                                <div class='lettre-signature'>
                                    <div style='font-size: 11px; font-weight: normal; font-style: italic;'>Avec toute ma tendresse magique,</div>
                                    <div>La Petite Souris 🌸</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PAGE 3 : ENVELOPPE A4 PAYSAGE -->
                    <div class='page-enveloppe'>
                        <div style='width: 100%%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;'>
                            <div style='font-size: 11px; font-weight: 800; color: %s;'>✂️ GABARIT D'ENVELOPPE A4</div>
                            <div style='font-size: 9px; color: #6b7280;'>À découper et plier</div>
                        </div>

                        <div class='env-cut-outer'>
                            <div class='env-rabat-haut'>▼ RABAT HAUT</div>

                            <div class='env-center-box'>
                                <div class='env-stamp-box'>
                                    <img src='%s' style='width: 18px; height: 18px;' alt='Dent' />
                                    <span>1ER CHOIX</span>
                                </div>

                                <div class='env-dest-content'>
                                    <div class='env-to'>DESTINATAIRE :</div>
                                    <div class='env-name-row'>
                                        <span class='env-name'>%s</span>
                                        <img src='%s' class='env-mascot-img' alt='Petite Souris' />
                                    </div>
                                    <div class='env-sub'>Sous l'oreiller 🛏️ (Royaume des Dents)</div>
                                </div>

                                <img src='%s' style='height: 55px; width: auto; opacity: 0.95;' alt='Logo Feerique' />
                            </div>

                            <div class='env-bottom-controls'>
                                <div class='env-pill-fold'>► PLIER</div>
                                <div class='env-rabat-haut'>▲ RABAT BAS</div>
                                <div class='env-pill-fold'>PLIER ◄</div>
                            </div>
                        </div>

                        <div style='font-size: 9px; color: #6b7280; margin-top: 6px;'>
                            ✨ 1. Imprimez • 2. Découpez les pointillés ✂️ • 3. Pliez et collez !
                        </div>
                    </div>
                </body>
                </html>
                """.formatted(
                    borderPill, lightBg, primaryColor, secondaryColor, secondaryColor, // Styles Certificat
                    borderPill, primaryColor, secondaryColor, secondaryColor, secondaryColor, // Styles Lettre
                    secondaryColor, lightBg, secondaryColor, secondaryColor, borderPill, secondaryColor, lightBg, secondaryColor, primaryColor, secondaryColor, secondaryColor, // Styles Enveloppe
                    logoBase64, childName, childAge, toothType, gift, faviconBase64, // Format Certificat
                    logoBase64, cherForm, city, toothType.toLowerCase(), gift, // Format Lettre
                    secondaryColor, faviconBase64, childName, faviconBase64, logoBase64 // Format Enveloppe
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