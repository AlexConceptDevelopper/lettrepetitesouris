import React from 'react';
import type { DocumentData } from '../types/document';

interface EnvelopePreviewProps {
  data: DocumentData;
}

export const EnvelopePreview: React.FC<EnvelopePreviewProps> = ({ data }) => {
  return (
    <div className="w-full max-w-2xl bg-[#fffdf9] rounded-2xl p-3 sm:p-4 text-slate-800 shadow-2xl border-2 border-amber-300 relative overflow-hidden flex flex-col justify-between font-sans select-none">
      
      {/* Notice haut */}
      <div className="flex justify-between items-center border-b border-amber-200/80 pb-1.5 text-xs mb-2">
        <span className="font-extrabold text-amber-900 flex items-center gap-1 tracking-wide">
          ✂️ GABARIT D'ENVELOPPE A4
        </span>
        <span className="text-slate-500 font-medium text-[11px]">À découper et plier</span>
      </div>

      {/* Zone du Gabarit A4 Paysage */}
      <div className="w-full aspect-[1.414/1] rounded-xl relative overflow-hidden shadow-inner border border-amber-300 bg-amber-50/20">
        
        {/* Fond du Template Généré */}
        <img 
          src="/images/enveloppe-magique-fond.jpg" 
          alt="Gabarit enveloppe magique Petite Souris" 
          className="absolute inset-0 w-full h-full object-fill"
        />

        {/* Zone de Texte Dynamique : Ancrée directement au centre réel du cartouche */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-[59%] -translate-y-1/2 w-[40%] text-center pointer-events-none flex items-center justify-center"
        >
          <span 
            className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#4a2810] leading-none tracking-wider drop-shadow-[0_1px_2px_rgba(255,248,220,0.8)]"
            style={{ fontFamily: "'Great Vibes', 'Georgia', cursive, serif" }}
          >
            {data.childName || "Léna"}
          </span>
        </div>

      </div>

      {/* Instructions bas */}
      <div className="pt-2 mt-2 border-t border-amber-200/80 text-center text-[11px] text-slate-600 font-medium">
        ✨ 1. Imprimez • 2. Découpez les pointillés ✂️ • 3. Pliez et collez pour la Petite Souris !
      </div>

    </div>
  );
};