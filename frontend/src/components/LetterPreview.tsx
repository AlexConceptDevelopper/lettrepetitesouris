import React from 'react';
import type { DocumentData } from '../types/document';

interface LetterPreviewProps {
  data: DocumentData;
}

export const LetterPreview: React.FC<LetterPreviewProps> = ({ data }) => {
  const childName = data.childName || "Léa";
  const customMsg = data.customMessage || `Je suis bien passée cette nuit pendant que tu dormais profondément ! J'ai récupéré ta jolie dent sous ton oreiller. Quelle belle dent bien entretenue ! En échange, je t'ai laissé une petite surprise : ${data.giftType || "une pièce"}. Continue de bien te brosser les dents !`;

  return (
    <div className="w-full max-w-sm aspect-[1/1.3] bg-amber-50/95 rounded-2xl p-5 text-slate-800 shadow-2xl border-2 border-rose-300 relative overflow-hidden flex flex-col justify-between font-serif select-none transform hover:scale-[1.01] transition-transform">
      
      {/* En-tête de la mini-lettre */}
      <div className="text-center border-b border-rose-200/80 pb-2">
        <span className="text-xl">🐭✉️</span>
        <h3 className="text-xs font-black text-rose-900 uppercase tracking-wider font-sans mt-0.5">
          La Lettre de la Petite Souris
        </h3>
        <span className="text-[8px] text-rose-400 uppercase tracking-widest font-sans">
          Message magique sous l'oreiller
        </span>
      </div>

      {/* Contenu unique et propre */}
      <div className="my-auto py-2 space-y-2 text-left text-xs text-slate-700 leading-relaxed font-serif italic">
        <p className="font-bold text-rose-800 not-italic text-sm">
          {data.childGender === 'M' ? 'Mon cher' : 'Ma chère'} {childName},
        </p>
        <p className="text-[11px] text-slate-700 whitespace-pre-line leading-snug">
          {customMsg}
        </p>
      </div>

      {/* Pied de page et signature */}
      <div className="pt-2 border-t border-rose-200/80 flex justify-between items-end font-sans">
        <span className="text-[8px] text-slate-400">Royaume des Dents • 2026</span>
        <div className="text-right">
          <span className="text-[9px] text-rose-700 block italic font-serif">Avec toute ma tendresse,</span>
          <span className="text-xs font-black text-rose-900">La Petite Souris 🌸</span>
        </div>
      </div>

    </div>
  );
};