import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { DiplomeBravourePrint } from '../components/printables/DiplomeBravourePrint';
import { CalendrierDentsPrint } from '../components/printables/CalendrierDentsPrint';
import { KitColoriagePrint } from '../components/printables/KitColoriagePrint';
import { RecuBanquePrint } from '../components/printables/RecuBanquePrint';

interface ResourceDetail {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  tag: string;
  pdfUrl: string;
}

const resourcesData: Record<string, ResourceDetail> = {
  'diplome-bravoure': {
    title: 'Diplôme de Bravoure Officiel',
    subtitle: 'Certificat neutre à remplir au stylo',
    description: 'Imprimez ce diplôme officiel du Royaume des Dents pour féliciter votre enfant après la perte de sa dent de lait.',
    icon: '📜',
    tag: 'Diplôme A4 Standard',
    pdfUrl: '/pdf/diplome-bravoure-gratuit.pdf',
  },
  'calendrier-dents-de-lait': {
    title: 'Calendrier des 20 Dents de Lait',
    subtitle: 'Grille de suivi visuelle pour le frigo',
    description: 'Une illustration complète des 20 dents de lait pour que votre enfant puisse cocher ou colorier chaque dent tombée.',
    icon: '🗓️',
    tag: 'Check-list A4',
    pdfUrl: '/pdf/calendrier-dents-gratuit.pdf',
  },
  'kit-coloriage': {
    title: 'Fiche Coloriage & Message du Soir',
    subtitle: 'Atelier de préparation avant le coucher',
    description: 'Un atelier dessin et brossage de dents à laisser sous l’oreiller avec la dent.',
    icon: '🎨',
    tag: 'Atelier Enfant A4',
    pdfUrl: '/pdf/kit-coloriage-gratuit.pdf',
  },
  'recu-banque-petite-souris': {
    title: 'Reçu Officiel de la Banque Magique',
    subtitle: 'Ticket de caisse 1 dent = 1 sourire validé',
    description: 'Un bon d’échange rigolo certifiant la bonne réception de la dent de lait par la Banque du Royaume.',
    icon: '🧾',
    tag: 'Ticket à Découper',
    pdfUrl: '/pdf/recu-banque-gratuit.pdf',
  },
};

export const PrintablePreview: React.FC = () => {
  const { resourceSlug } = useParams<{ resourceSlug: string }>();
  const navigate = useNavigate();
  const [showUpsell, setShowUpsell] = useState(false);

  const resource = resourceSlug ? resourcesData[resourceSlug] : null;

  if (!resource) {
    return (
      <div className="min-h-screen bg-[#0b0a16] text-white flex flex-col justify-between">
        <Navbar />
        <div className="text-center py-20 space-y-4">
          <h1 className="text-2xl font-bold">Ressource introuvable</h1>
          <Link to="/gratuit" className="text-pink-300 underline">Retour aux imprimables gratuits</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
    setShowUpsell(true);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0b0a16] via-indigo-950 to-[#0b0a16] text-slate-100 flex flex-col justify-between font-sans print:bg-white print:text-black">
      
      {/* RÈGLES CSS STRICTES POUR FORCER LE FORMAT UNE SEULE PAGE A4 À L'IMPRESSION */}
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 0mm;
          }
          body, html {
            background: white !important;
            color: black !important;
            height: 100% !important;
            overflow: hidden !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          /* Conteneur A4 strict pour l'impression */
          .a4-sheet {
            width: 210mm !important;
            height: 297mm !important;
            max-height: 297mm !important;
            margin: 0 !important;
            padding: 10mm !important;
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
            page-break-after: avoid !important;
            page-break-inside: avoid !important;
            overflow: hidden !important;
          }
        }
      `}</style>

      <Helmet>
        <title>{`${resource.title} à Imprimer – Gratuit`}</title>
        <meta name="description" content={resource.description} />
      </Helmet>

      {/* Masqué lors de l'impression papier */}
      <div className="print:hidden">
        <Navbar />
      </div>

      <main className="w-full max-w-5xl mx-auto px-4 py-8 md:py-12 grow space-y-6 print:p-0 print:m-0 print:w-full">
        
        {/* GROS BOUTON RETOUR BIEN VISIBLE AU-DESSUS DE LA DIV D'IMPRESSION (Masqué à l'impression) */}
        <div className="print:hidden">
          <button
            onClick={() => navigate('/gratuit')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-400/30 rounded-2xl text-xs font-bold uppercase tracking-wider shadow-md transition cursor-pointer"
          >
            <span>←</span> Retour à la liste des imprimables gratuits
          </button>
        </div>

        {/* BARRE D'ACTIONS DU HAUT (Masquée à l'impression) */}
        <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl print:hidden">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-2xl">{resource.icon}</span>
              <span className="text-xs uppercase font-bold text-pink-300 px-2.5 py-0.5 bg-pink-500/10 border border-pink-500/30 rounded-full">
                {resource.tag}
              </span>
            </div>
            <h1 className="text-xl md:text-2xl font-black text-white">{resource.title}</h1>
            <p className="text-slate-400 text-xs">{resource.subtitle}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <button
              onClick={handlePrint}
              className="flex-1 md:flex-none px-6 py-3.5 bg-linear-to-r from-amber-400 via-pink-500 to-purple-600 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider shadow-lg hover:opacity-95 transition cursor-pointer flex items-center justify-center gap-2"
            >
              <span>🖨️ Imprimer en Taille Réelle</span>
            </button>
            <a
              href={resource.pdfUrl}
              download
              className="flex-1 md:flex-none px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl text-xs uppercase tracking-wider transition text-center border border-slate-700"
            >
              📥 Télécharger PDF
            </a>
          </div>
        </div>

        {/* FEUILLE A4 EN TAILLE RÉELLE (Visuel écran + sortie imprimante) */}
        <div className="flex justify-center my-6 print:m-0">
          <div className="a4-sheet w-full max-w-[210mm] min-h-[297mm] bg-white text-slate-900 p-8 md:p-10 shadow-2xl rounded-xl border border-slate-300 flex flex-col justify-between">
            
            {/* RENDU DU COMPOSANT VISUEL SPÉCIFIQUE */}
            <div className="grow flex flex-col justify-center">
              {resourceSlug === 'diplome-bravoure' && <DiplomeBravourePrint />}
              {resourceSlug === 'calendrier-dents-de-lait' && <CalendrierDentsPrint />}
              {resourceSlug === 'kit-coloriage' && <KitColoriagePrint />}
              {resourceSlug === 'recu-banque-petite-souris' && <RecuBanquePrint />}
            </div>

            {/* PIED DE PAGE IMPRESSION */}
            <div className="border-t border-slate-200 pt-3 mt-4 flex items-center justify-between text-[10px] text-slate-400">
              <span>lettrepetitesouris.fr</span>
              <span>100% Gratuit pour les familles</span>
            </div>
          </div>
        </div>
      </main>

      {/* MODALE D'UPSELL POST-IMPRESSION */}
      {showUpsell && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 print:hidden">
          <div className="bg-slate-900 border-2 border-amber-400/50 rounded-3xl p-6 md:p-8 max-w-md w-full space-y-5 text-center shadow-2xl relative">
            <button
              onClick={() => setShowUpsell(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold cursor-pointer"
            >
              ✕
            </button>
            <span className="text-4xl block">✨</span>
            <h3 className="text-xl font-black text-white">
              Une impression réussie !
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Ce support gratuit est parfait pour commencer. Pour offrir un souvenir magique unique, découvrez notre kit payant : **la Petite Souris rédige une lettre 100% sur-mesure** mentionnant le **prénom de votre enfant**, son âge et sa ville !
            </p>
            <div className="pt-2 space-y-2">
              <Link
                to="/"
                className="block w-full py-3.5 bg-linear-to-r from-amber-400 via-pink-500 to-purple-600 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider shadow-md hover:opacity-95 transition"
              >
                Créer la lettre personnalisée (dès 0,99 €) ✍️
              </Link>
              <button
                onClick={() => setShowUpsell(false)}
                className="block w-full py-2 text-slate-400 hover:text-white text-xs underline cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Masqué lors de l'impression papier */}
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
};