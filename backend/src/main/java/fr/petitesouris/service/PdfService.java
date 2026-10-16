package fr.petitesouris.service;

import com.microsoft.playwright.*;
import fr.petitesouris.model.DocumentData;
import fr.petitesouris.model.ToothOrder;
import org.springframework.stereotype.Service;

@Service
public class PdfService {

    public byte[] generateCertificatePdf(ToothOrder order) {
        DocumentData doc = order.getDocumentData();
        
        String childName = (doc != null && doc.getChildName() != null) ? doc.getChildName() : "Léa";
        String childAge = (doc != null && doc.getChildAge() != null) ? String.valueOf(doc.getChildAge()) : "6";
        String toothType = (doc != null && doc.getToothType() != null) ? doc.getToothType() : "Molaire";
        String city = (doc != null && doc.getCity() != null) ? doc.getCity() : "Paris";
        String gift = (doc != null && doc.getGiftType() != null) ? doc.getGiftType() : "Un petit cadeau magique";
        
        String gender = (doc != null && doc.getChildGender() != null) ? doc.getChildGender() : "F";
        String cherForm = "M".equals(gender) ? "Mon cher " + childName : "Ma chère " + childName;

        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(true));
            Page page = browser.newPage();

            String htmlContent = """
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset='UTF-8'>
                    <style>
                        @page { size: A4; margin: 0; }
                        body { font-family: 'Helvetica', 'Arial', sans-serif; margin: 0; padding: 0; background: #fff; -webkit-print-color-adjust: exact; }
                        .page { width: 210mm; height: 297mm; page-break-after: always; box-sizing: border-box; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: center; align-items: center; }
                        
                        /* CERTIFICAT */
                        .certificate-container { width: 180mm; height: 260mm; border: 4px solid #d4af37; padding: 30px; border-radius: 15px; background: #fffdf9; text-align: center; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; }
                        .kingdom { font-size: 14px; color: #b8860b; text-transform: uppercase; letter-spacing: 2px; font-weight: bold; }
                        .cert-title { color: #8b0000; font-size: 32px; font-weight: bold; margin: 10px 0 5px 0; }
                        .cert-subtitle { font-size: 12px; color: #666; font-style: italic; margin-bottom: 30px; }
                        .cert-certifies { font-size: 13px; color: #555; text-transform: uppercase; letter-spacing: 1px; }
                        .cert-name-box { background: #fff0f5; border: 2px dashed #e91e63; padding: 15px 30px; border-radius: 10px; display: inline-block; margin: 20px auto; }
                        .cert-name { color: #8b0000; font-size: 28px; font-weight: bold; }
                        .cert-desc { font-size: 16px; color: #444; line-height: 1.6; margin: 20px 0; }
                        .cert-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #eee; padding-top: 15px; margin-top: 20px; font-size: 12px; color: #666; }

                        /* LETTRE */
                        .letter-container { width: 180mm; height: 260mm; border: 2px solid #f8bbd0; padding: 40px; border-radius: 15px; background: #fff9fb; text-align: left; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; }
                        .letter-header { text-align: center; border-bottom: 1px solid #fce4ec; padding-bottom: 20px; }
                        .letter-title { color: #8b0000; font-size: 24px; font-weight: bold; margin: 5px 0; }
                        .letter-body { font-size: 15px; color: #333; line-height: 1.8; flex-grow: 1; margin-top: 20px; }
                        .letter-footer { text-align: right; margin-top: 30px; font-style: italic; color: #8b0000; font-weight: bold; }

                        /* ENVELOPPE */
                        .envelope-container { width: 180mm; height: 260mm; border: 2px dashed #e91e63; padding: 30px; border-radius: 15px; background: #fff; text-align: center; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; align-items: center; }
                        .envelope-box { width: 120mm; height: 70mm; border: 2px solid #e91e63; border-radius: 8px; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #fff0f5; }
                        .envelope-title { font-size: 11px; color: #888; text-transform: uppercase; margin-bottom: 5px; align-self: flex-start; margin-left: 15px; }
                        .envelope-name { font-size: 22px; font-weight: bold; color: #8b0000; }
                        .envelope-details { font-size: 12px; color: #555; margin-top: 5px; }
                    </style>
                </head>
                <body>
                    <!-- PAGE 1 : CERTIFICAT -->
                    <div class='page'>
                        <div class='certificate-container'>
                            <div>
                                <div class='kingdom'>✨ Royaume des Dents de Lait ✨</div>
                                <div class='cert-title'>CERTIFICAT OFFICIEL</div>
                                <div class='cert-subtitle'>Attestation de récolte sous l'oreiller</div>
                            </div>
                            <div>
                                <div class='cert-certifies'>Ce document certifie que</div>
                                <div class='cert-name-box'>
                                    <span class='cert-name'>%s (%s ans)</span>
                                </div>
                                <div class='cert-desc'>
                                    a confié sa dent de lait (<b>%s</b>) à la Petite Souris.
                                </div>
                            </div>
                            <div class='cert-footer'>
                                <div>🎁 Récompense : %s</div>
                                <div>👑 Lieu : Grand Registre du Royaume</div>
                            </div>
                        </div>
                    </div>

                    <!-- PAGE 2 : LETTRE -->
                    <div class='page'>
                        <div class='letter-container'>
                            <div class='letter-header'>
                                <div style='font-size: 20px;'>🐭 💌</div>
                                <div class='letter-title'>LA LETTRE DE LA PETITE SOURIS</div>
                                <div style='font-size: 11px; color: #e91e63; text-transform: uppercase; letter-spacing: 1px;'>Message magique sous l'oreiller</div>
                            </div>
                            <div class='letter-body'>
                                <p><b>%s,</b></p>
                                <p>Je suis bien passée cette nuit pendant que tu dormais profondément à <b>%s</b> ! J'ai récupéré ta jolie dent (<b>%s</b>) sous ton oreiller. Quelle belle dent de lait bien entretenue ! En échange, je t'ai laissé une petite surprise : <b>%s</b>.</p>
                                <p>Continue de bien te brosser les dents matin et soir pour garder un sourire éclatant !</p>
                            </div>
                            <div>
                                <div style='font-size: 11px; color: #888;'>Royaume des Dents • 2026</div>
                                <div class='letter-footer'>
                                    Avec toute ma tendresse,<br>
                                    <span style='font-size: 18px;'>La Petite Souris 🌸</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PAGE 3 : ENVELOPPE (INCLUSE PAR DÉFAUT) -->
                    <div class='page' style='page-break-after: avoid;'>
                        <div class='envelope-container'>
                            <div style='font-size: 16px; font-weight: bold; color: #e91e63; margin-bottom: 20px;'>✂️ GABARIT D'ENVELOPPE A4</div>
                            <div class='envelope-box'>
                                <div class='envelope-title'>Destinataire :</div>
                                <div class='envelope-name'>%s</div>
                                <div class='envelope-details'>Sous l'oreiller 🛏️</div>
                            </div>
                            <p style='font-size: 12px; color: #666; margin-top: 30px;'>
                                ✨ 1. Imprimez &nbsp;•&nbsp; 2. Découpez les pointillés ✂️ &nbsp;•&nbsp; 3. Pliez et collez !
                            </p>
                        </div>
                    </div>
                </body>
                </html>
                """.formatted(
                    childName, childAge, toothType, gift,
                    cherForm, city, toothType.toLowerCase(), gift,
                    childName
                );

            page.setContent(htmlContent);
            byte[] pdfBytes = page.pdf(new Page.PdfOptions().setFormat("A4").setPrintBackground(true));
            browser.close();
            return pdfBytes;
        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de la génération du PDF", e);
        }
    }
}