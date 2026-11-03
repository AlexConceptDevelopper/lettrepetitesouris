import { useState } from 'react';

export function RecuBanquePrint() {
  // Génère un numéro aléatoire entre 0000 et 9999 une seule fois au chargement du composant
  const [receiptNumber] = useState(() => {
    const randomNum = Math.floor(Math.random() * 10000);
    return String(randomNum).padStart(4, '0');
  });

  return (
    <div className="w-full h-full max-w-[210mm] min-h-[250mm] border-8 border-double border-amber-400 p-8 md:p-12 flex flex-col justify-between text-center bg-amber-50/40 text-slate-900 rounded-lg relative overflow-hidden mx-auto shadow-sm">
      
      {/* VRAIE IMAGE EN ARRIÈRE-PLAN */}
      <img 
        src="/images/tooth-fairy-certificate-background.jpg" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
      />

      {/* EN-TÊTE OFFICIEL */}
      <div className="relative z-10 space-y-3">
        <span className="text-4xl">🏦✨</span>
        <h2 className="text-sm font-bold uppercase tracking-widest text-amber-700 font-['Cinzel']">
          Banque Officielle du Royaume des Dents de Lait
        </h2>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 font-['Cinzel'] tracking-wide">
          Reçu de Dépôt Magique N° {receiptNumber}
        </h1>
      </div>

      {/* CORPS DU REÇU (Agrandis, aérés et structurés) */}
      <div className="relative z-10 my-auto space-y-6 bg-white/85 backdrop-blur-xs p-6 md:p-8 rounded-2xl border border-amber-200 shadow-xs text-left">
        
        <div className="flex justify-between items-center border-b border-amber-200 pb-3">
          <span className="text-xs md:text-sm font-bold text-slate-600 uppercase font-['Cinzel']">Bénéficiaire :</span>
          <span className="text-sm md:text-base font-bold text-amber-900 font-['Dancing_Script']">........................................</span>
        </div>

        <div className="flex justify-between items-center border-b border-amber-200 pb-3">
          <span className="text-xs md:text-sm font-bold text-slate-600 uppercase font-['Cinzel']">Article Reçu :</span>
          <span className="text-sm md:text-base font-bold text-slate-800">🦷 1 Dent de lait (Brillante et solide)</span>
        </div>

        <div className="flex justify-between items-center border-b border-amber-200 pb-3">
          <span className="text-xs md:text-sm font-bold text-slate-600 uppercase font-['Cinzel']">Indice de Propreté :</span>
          <span className="text-sm md:text-base font-bold text-amber-600">⭐⭐⭐⭐⭐ (Parfait)</span>
        </div>

        <div className="flex justify-between items-center border-b border-amber-200 pb-3">
          <span className="text-xs md:text-sm font-bold text-slate-600 uppercase font-['Cinzel']">Taux de Magie :</span>
          <span className="text-sm md:text-base font-bold text-slate-800">100% Validé & Certifié</span>
        </div>

        <div className="flex justify-between items-center pt-1">
          <span className="text-xs md:text-sm font-bold text-slate-600 uppercase font-['Cinzel']">Statut du Paiement :</span>
          <span className="text-xs md:text-sm font-black text-pink-600 bg-pink-50 px-3 py-1 rounded-full border border-pink-200">
            PAYÉ & COMPENSÉ EN SURPRISE 🎁
          </span>
        </div>
      </div>

      {/* PIED DE PAGE ET CACHET */}
      <div className="relative z-10 pt-4 border-t border-amber-200 flex justify-between items-end text-xs font-semibold text-slate-700">
        <div className="text-left space-y-1">
          <p className="italic text-slate-600 max-w-xs">
            "Merci pour ta magnifique dent, continue de bien te brosser les dents tous les jours !"
          </p>
          <p>Date : ............................</p>
        </div>
        <div className="text-center space-y-1">
          <span className="text-2xl block">🐭⭐</span>
          <p className="font-bold text-amber-800 font-['Dancing_Script'] text-lg">La Petite Souris</p>
        </div>
      </div>
    </div>
  );
}