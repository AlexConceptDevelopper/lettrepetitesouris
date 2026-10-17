package fr.petitesouris.service;

import com.microsoft.playwright.*;
import fr.petitesouris.model.DocumentData;
import fr.petitesouris.model.ToothOrder;
import org.springframework.stereotype.Service;

@Service
public class PdfService {

    public byte[] generateCertificatePdf(ToothOrder order) {
        DocumentData doc = order.getDocumentData();
        
        String childName = (doc != null && doc.getChildName() != null) ? doc.getChildName() : "Alex";
        String childAge = (doc != null && doc.getChildAge() != null) ? String.valueOf(doc.getChildAge()) : "6";
        String toothType = (doc != null && doc.getToothType() != null) ? doc.getToothType() : "Première dent ! - Bas - Côté";
        String city = (doc != null && doc.getCity() != null) ? doc.getCity() : "Paris";
        String gift = (doc != null && doc.getGiftType() != null) ? doc.getGiftType() : "Pièce de 2 €";
        
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
                        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Montserrat:wght@400;700;900&display=swap');

                        @page { size: A4 landscape; margin: 0; }
                        body { font-family: 'Montserrat', Arial, sans-serif; margin: 0; padding: 0; background: #fff; -webkit-print-color-adjust: exact; }

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
                            background: #fffdf5; 
                        }

                        .cert-outer-border {
                            width: 270mm;
                            height: 185mm;
                            border: 3px solid #fbcfe8;
                            border-radius: 24px;
                            padding: 10px;
                            box-sizing: border-box;
                            background: #ffffff;
                        }

                        .cert-inner-border {
                            width: 100%%;
                            height: 100%%;
                            border: 2px dashed #f59e0b;
                            border-radius: 18px;
                            padding: 25px 40px;
                            box-sizing: border-box;
                            text-align: center;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            align-items: center;
                        }

                        .cert-header-title { font-size: 11px; color: #b45309; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
                        .cert-main-title { font-size: 28px; font-weight: 900; color: #881337; margin: 4px 0; text-transform: uppercase; }
                        .cert-subtitle { font-size: 11px; color: #9ca3af; font-style: italic; }

                        .cert-certifies { font-size: 11px; color: #6b7280; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-top: 10px; }
                        
                        .cert-name-pill {
                            background: #be123c;
                            color: #ffffff;
                            font-size: 22px;
                            font-weight: 900;
                            padding: 8px 30px;
                            border-radius: 50px;
                            display: inline-block;
                            margin: 10px 0;
                            box-shadow: 0 4px 10px rgba(190, 18, 60, 0.2);
                        }

                        .cert-desc { font-size: 13px; color: #374151; margin: 8px 0; }
                        .cert-desc b { color: #be123c; }

                        .cert-footer-grid {
                            width: 100%%;
                            display: flex;
                            justify-content: space-between;
                            align-items: flex-end;
                            border-top: 1px solid #f3f4f6;
                            padding-top: 10px;
                        }

                        .cert-info { text-align: left; font-size: 10px; color: #4b5563; line-height: 1.6; }

                        .cert-stamp {
                            width: 50px;
                            height: 50px;
                            background: #fbbf24;
                            border-radius: 50%%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 22px;
                            box-shadow: 0 2px 8px rgba(251, 191, 36, 0.4);
                        }

                        /* ---------------- PAGE 2 : LETTRE PORTRAIT ---------------- */
                        .page-lettre { 
                            width: 210mm; 
                            height: 297mm; 
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
                            width: 175mm;
                            height: 255mm;
                            background: #fffdfa;
                            border: 2px solid #fbcfe8;
                            border-radius: 24px;
                            padding: 40px;
                            box-sizing: border-box;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                        }

                        .lettre-header { text-align: center; border-bottom: 1px solid #fce7f3; padding-bottom: 15px; }
                        .lettre-title { font-size: 20px; font-weight: 900; color: #881337; margin-top: 5px; }
                        .lettre-sub { font-size: 10px; color: #f43f5e; font-weight: 700; tracking: 1px; }

                        .lettre-body {
                            font-size: 15px;
                            color: #1f2937;
                            line-height: 1.8;
                            font-style: italic;
                            margin: 20px 0;
                        }
                        .lettre-body b { font-style: normal; font-weight: 700; color: #000; }

                        .lettre-footer {
                            display: flex;
                            justify-content: space-between;
                            align-items: flex-end;
                            border-top: 1px solid #f3f4f6;
                            padding-top: 15px;
                        }

                        .lettre-signature { text-align: right; color: #be123c; font-weight: 700; font-size: 14px; }

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
                            padding: 15mm;
                        }

                        .env-cut-outer {
                            width: 240mm;
                            height: 160mm;
                            border: 2px dashed #f43f5e;
                            border-radius: 16px;
                            background: #fff1f2;
                            position: relative;
                            box-sizing: border-box;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            align-items: center;
                            padding: 12px;
                        }

                        .env-rabat-haut {
                            background: #ffe4e6;
                            border: 1px dashed #f43f5e;
                            color: #be123c;
                            font-size: 9px;
                            font-weight: 800;
                            padding: 6px 30px;
                            border-radius: 6px;
                        }

                        .env-center-box {
                            width: 75%%;
                            height: 75mm;
                            background: #ffffff;
                            border: 1px solid #fecdd3;
                            border-radius: 12px;
                            padding: 15px 20px;
                            box-sizing: border-box;
                            position: relative;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                        }

                        .env-stamp {
                            position: absolute;
                            top: 12px;
                            right: 15px;
                            border: 1px dashed #f43f5e;
                            border-radius: 8px;
                            padding: 6px 10px;
                            text-align: center;
                            background: #fff1f2;
                            font-size: 8px;
                            color: #be123c;
                            font-weight: 700;
                        }

                        .env-to { font-size: 8px; color: #9ca3af; font-weight: 700; text-transform: uppercase; }
                        .env-name { font-size: 22px; font-weight: 900; color: #881337; margin: 4px 0; }
                        .env-sub { font-size: 11px; color: #4b5563; }

                        .env-bottom-controls {
                            width: 80%%;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }

                        .env-pill-fold {
                            background: #ffffff;
                            border: 1px dashed #f43f5e;
                            color: #be123c;
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
                                <div>
                                    <div class='cert-header-title'>🐭 ROYAUME DES DENTS DE LAIT 🐭</div>
                                    <div class='cert-main-title'>CERTIFICAT OFFICIEL</div>
                                    <div class='cert-subtitle'>Attestation de récolte sous l'oreiller</div>
                                </div>

                                <div>
                                    <div class='cert-certifies'>CE DOCUMENT CERTIFIE QUE</div>
                                    <div class='cert-name-pill'>%s (%s ans)</div>
                                    <div class='cert-desc'>
                                        a confié sa dent de lait (<b>%s</b>) à la Petite Souris.
                                    </div>
                                </div>

                                <div class='cert-footer-grid'>
                                    <div class='cert-info'>
                                        🎁 <b>Récompense :</b> %s<br/>
                                        📍 <b>Lieu :</b> Grand Registre du Royaume
                                    </div>
                                    <div class='cert-stamp'>🐭</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PAGE 2 : LETTRE PORTRAIT -->
                    <div class='page-lettre' style='@page { size: A4 portrait; }'>
                        <div class='lettre-card'>
                            <div class='lettre-header'>
                                <div style='font-size: 22px;'>🐭 ✉️</div>
                                <div class='lettre-title'>LA LETTRE DE LA PETITE SOURIS</div>
                                <div class='lettre-sub'>MESSAGE MAGIQUE SOUS L'OREILLER</div>
                            </div>

                            <div class='lettre-body'>
                                <p><b>%s,</b></p>
                                <p>Je suis bien passée cette nuit pendant que tu dormais profondément à <b>%s</b> ! J'ai récupéré ta jolie dent (<b>%s</b>) sous ton oreiller. Quelle belle dent de lait bien entretenue ! En échange, je t'ai laissé une petite surprise : <b>%s</b>.</p>
                                <p>Continue de bien te brosser les dents matin et soir pour garder un sourire éclatant !</p>
                            </div>

                            <div class='lettre-footer'>
                                <div style='font-size: 10px; color: #9ca3af;'>Royaume des Dents • 2026</div>
                                <div class='lettre-signature'>
                                    <div style='font-size: 11px; font-weight: normal; font-style: italic;'>Avec toute ma tendresse,</div>
                                    <div>La Petite Souris 🌸</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PAGE 3 : ENVELOPPE A4 PAYSAGE -->
                    <div class='page-enveloppe'>
                        <div style='width: 100%%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;'>
                            <div style='font-size: 12px; font-weight: 800; color: #be123c;'>✂️ GABARIT D'ENVELOPPE A4</div>
                            <div style='font-size: 10px; color: #6b7280;'>À découper et plier</div>
                        </div>

                        <div class='env-cut-outer'>
                            <div class='env-rabat-haut'>▼ RABAT HAUT</div>

                            <div class='env-center-box'>
                                <div class='env-stamp'>
                                    🐭<br/>1ER CHOIX
                                </div>
                                <div class='env-to'>DESTINATAIRE :</div>
                                <div class='env-name'>%s</div>
                                <div class='env-sub'>Sous l'oreiller 🛏️</div>
                            </div>

                            <div class='env-bottom-controls'>
                                <div class='env-pill-fold'>► PLIER</div>
                                <div class='env-rabat-haut' style='background: #ffe4e6;'>▲ RABAT BAS</div>
                                <div class='env-pill-fold'>PLIER ◄</div>
                            </div>
                        </div>

                        <div style='font-size: 10px; color: #6b7280; margin-top: 10px;'>
                            ✨ 1. Imprimez • 2. Découpez les pointillés ✂️ • 3. Pliez et collez !
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