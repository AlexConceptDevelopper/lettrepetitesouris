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
                        @page { size: A4 landscape; margin: 0; }
                        body { font-family: 'Helvetica', 'Arial', sans-serif; margin: 0; padding: 0; background: #fff; -webkit-print-color-adjust: exact; }
                        
                        /* Pages en format Paysage (297mm x 210mm) */
                        .page { width: 297mm; height: 210mm; page-break-after: always; box-sizing: border-box; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #fffdfa; }
                        
                        .logo { width: 55px; height: auto; margin-bottom: 5px; }

                        /* CERTIFICAT PAYSAGE */
                        .certificate-container { width: 260mm; height: 175mm; border: 4px double #d4af37; padding: 25px; border-radius: 15px; background: radial-gradient(circle, #ffffff 60%, #fff9f0 100%); text-align: center; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; }
                        .kingdom { font-size: 13px; color: #b8860b; text-transform: uppercase; letter-spacing: 2px; font-weight: bold; }
                        .cert-title { color: #8b0000; font-size: 28px; font-weight: bold; margin: 5px 0; text-transform: uppercase; }
                        .cert-subtitle { font-size: 11px; color: #666; font-style: italic; margin-bottom: 15px; }
                        .cert-certifies { font-size: 12px; color: #555; text-transform: uppercase; letter-spacing: 1px; }
                        .cert-name-box { background: #fff0f5; border: 2px dashed #e91e63; padding: 10px 25px; border-radius: 10px; display: inline-block; margin: 10px auto; }
                        .cert-name { color: #8b0000; font-size: 24px; font-weight: bold; }
                        .cert-desc { font-size: 15px; color: #444; line-height: 1.5; margin: 10px 0; }
                        .cert-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #eee; padding-top: 12px; font-size: 11px; color: #666; }

                        /* LETTRE (Portrait) */
                        .page-portrait { width: 210mm; height: 297mm; page-break-after: always; box-sizing: border-box; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #fff9fb; }
                        .letter-container { width: 180mm; height: 250mm; border: 2px solid #f8bbd0; padding: 35px; border-radius: 15px; background: #fff9fb; text-align: left; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; }
                        .letter-header { text-align: center; border-bottom: 1px solid #fce4ec; padding-bottom: 15px; }
                        .letter-title { color: #8b0000; font-size: 22px; font-weight: bold; margin: 5px 0; }
                        .letter-body { font-size: 14px; color: #333; line-height: 1.7; flex-grow: 1; margin-top: 15px; }
                        .letter-footer { text-align: right; margin-top: 20px; font-style: italic; color: #8b0000; font-weight: bold; }

                        /* ENVELOPPE PAYSAGE AVEC LIGNES DE DÉCOUPE ET DE PLIAGE */
                        .envelope-page { width: 297mm; height: 210mm; page-break-after: avoid; box-sizing: border-box; position: relative; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #fff; }
                        
                        /* Ligne de découpe extérieure (Pointillés larges) */
                        .cut-container {
                            width: 230mm;
                            height: 140mm;
                            border: 2px dashed #e91e63;
                            border-radius: 12px;
                            background: #fff9fb;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            position: relative;
                            box-shadow: 0 4px 15px rgba(233,30,99,0.08);
                        }

                        /* Lignes de pliage intérieures (Pointillés fins avec icônes) */
                        .fold-line-h {
                            position: absolute;
                            left: 10mm;
                            right: 10mm;
                            top: 50%%;
                            border-top: 1.5px dashed #b0bec5;
                        }
                        
                        .stamp { 
                            position: absolute; 
                            top: 15px; 
                            right: 20px; 
                            width: 18mm; 
                            height: 22mm; 
                            border: 2px dashed #d4af37; 
                            border-radius: 4px; 
                            background: #fff; 
                            font-size: 7pt; 
                            color: #d4af37; 
                            text-align: center; 
                            padding-top: 3mm; 
                        }

                        .envelope-box { 
                            width: 65%%; 
                            height: 60mm; 
                            border: 2px solid #8b0000; 
                            border-radius: 8px; 
                            display: flex; 
                            flex-direction: column; 
                            justify-content: center; 
                            align-items: center; 
                            background: #ffffff; 
                            z-index: 2;
                        }
                    </style>
                </head>
                <body>
                    <!-- PAGE 1 : CERTIFICAT OFFICIEL (PAYSAGE) -->
                    <div class='page'>
                        <div class='certificate-container'>
                            <div>
                                <img src='https://lettrepetitesouris.fr/favicon.png' class='logo' alt='Logo' />
                                <div class='kingdom'>✨ Royaume des Dents de Lait ✨</div>
                                <div class='cert-title'>Certificat Officiel</div>
                                <div class='cert-subtitle'>Attestation de récolte sous l'oreiller</div>
                            </div>
                            <div>
                                <div class='cert-certifies'>Ce document certifie que</div>
                                <div class='cert-name-box'>
                                    <span class='cert-name'>%s (%s ans)</span>
                                </div>
                                <div class='cert-desc'>
                                    a courageusement confié sa dent de lait (<b>%s</b>) à la Petite Souris.
                                </div>
                            </div>
                            <div class='cert-footer'>
                                <div>🎁 Récompense : %s</div>
                                <div>👑 Lieu : Grand Registre du Royaume</div>
                            </div>
                        </div>
                    </div>

                    <!-- PAGE 2 : LETTRE (PORTRAIT) -->
                    <div class='page-portrait' style='@page { size: A4 portrait; }'>
                        <div class='letter-container'>
                            <div class='letter-header'>
                                <img src='https://lettrepetitesouris.fr/favicon.png' class='logo' alt='Logo' />
                                <div class='letter-title'>LA LETTRE DE LA PETITE SOURIS</div>
                                <div style='font-size: 10px; color: #e91e63; text-transform: uppercase; letter-spacing: 1px;'>Message magique sous l'oreiller</div>
                            </div>
                            <div class='letter-body'>
                                <p><b>%s,</b></p>
                                <p>Je suis bien passée cette nuit pendant que tu dormais profondément à <b>%s</b> ! J'ai récupéré ta jolie dent (<b>%s</b>) sous ton oreiller. Quelle belle dent de lait bien entretenue ! En échange, je t'ai laissé une petite surprise : <b>%s</b>.</p>
                                <p>Continue de bien te brosser les dents matin et soir pour garder un sourire éclatant !</p>
                            </div>
                            <div>
                                <div style='font-size: 10px; color: #888;'>Royaume des Dents • 2026</div>
                                <div class='letter-footer'>
                                    Avec toute ma tendresse,<br>
                                    <span style='font-size: 16px;'>La Petite Souris 🌸</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PAGE 3 : ENVELOPPE MAGIQUE (PAYSAGE AVEC LIGNES DE DÉCOUPE ET PLI) -->
                    <div class='envelope-page'>
                        <div style='display: flex; align-items: center; gap: 8px; margin-bottom: 15px;'>
                            <img src='https://lettrepetitesouris.fr/favicon.png' style='width: 25px;' alt='Logo' />
                            <div style='font-size: 13px; font-weight: bold; color: #e91e63; text-transform: uppercase;'>
                                ✂️ Gabarit de l'Enveloppe Magique (Découper le long des pointillés extérieurs)
                            </div>
                        </div>
                        
                        <div class='cut-container'>
                            <!-- Repères de pliage -->
                            <div class='fold-line-h'></div>
                            <div style='position: absolute; top: 10mm; left: 50%%; font-size: 9pt; color: #78909c; transform: translateX(-50%%); background: #fff9fb; padding: 0 8px;'>
                                ⤹ Ligne de pliage ⤸
                            </div>

                            <div class='stamp'>
                                🌸<br/><b>Magique</b>
                            </div>
                            
                            <div class='envelope-box'>
                                <div style='font-size: 9px; color: #888; text-transform: uppercase; margin-bottom: 2px;'>Destinataire :</div>
                                <div style='font-size: 24px; font-weight: bold; color: #8b0000;'>%s</div>
                                <div style='font-size: 11px; color: #555; font-style: italic; margin-top: 4px;'>Sous l'oreiller 🛏️</div>
                            </div>
                        </div>

                        <div style='font-size: 11px; color: #555; margin-top: 15px; background: #fff5f8; padding: 8px 20px; border-radius: 20px; border: 1px solid #f8bbd0;'>
                            ✂️ <b>1. Découpez</b> le long du trait rose pointillé &nbsp;•&nbsp; ✉️ <b>2. Pliez</b> le long des repères &nbsp;•&nbsp; 🪄 <b>3. Collez les rabats !</b>
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