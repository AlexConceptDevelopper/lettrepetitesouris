import React from 'react';
import type { DocumentData } from '../types/document';

interface EnvelopePreviewProps {
  data: DocumentData;
}

export const EnvelopePreview: React.FC<EnvelopePreviewProps> = ({ data }) => {
  return (
    <div className="w-full max-w-md aspect-1/1.25 bg-white rounded-xl p-4 text-slate-800 shadow-2xl border-2 border-slate-300 relative overflow-hidden flex flex-col justify-between font-sans select-none">
      
      {/* Notice haut */}
      <div className="flex justify-between items-center border-b border-slate-200 pb-2 text-[10px]">
        <span className="font-bold text-pink-600 flex items-center gap-1">✂️ GABARIT D'ENVELOPPE A4</span>
        <span className="text-slate-400">À découper et plier</span>
      </div>

      {/* Patron d'enveloppe bien centré */}
      <div className="my-auto w-full aspect-[1.3/1] border-2 border-dashed border-rose-400 bg-rose-50/50 rounded-lg relative p-3 flex flex-col justify-between items-center">
        
        {/* Rabat haut */}
        <div className="w-2/3 h-7 bg-rose-200/70 border-b border-dashed border-rose-400 rounded-b-lg flex items-center justify-center text-[7px] font-bold text-rose-800 uppercase tracking-wider">
          ▼ RABAT HAUT
        </div>

        {/* Centre enveloppe */}
        <div className="w-full my-auto py-2 px-3 bg-white border border-rose-300 rounded-lg shadow-xs flex justify-between items-center">
          <div className="text-left space-y-0.5">
            <span className="text-[6px] uppercase font-bold text-slate-400 block">DESTINATAIRE :</span>
            <span className="text-xs font-black text-pink-700">{data.childName || "Léa"}</span>
            <span className="text-[7px] text-slate-500 block">Sous l'oreiller 🛏️</span>
          </div>

          <div className="w-8 h-9 border border-dashed border-rose-400 bg-rose-100 rounded flex flex-col items-center justify-center text-[6px] text-rose-800 font-bold p-0.5">
            <img src="/favicon.png" alt="Timbre" className="w-5 h-5 object-contain" />
            <span className="text-[5px] scale-90">1ER CHOIX</span>
          </div>
        </div>

        {/* Rabats bas & côtés */}
        <div className="w-full flex justify-between items-end text-[7px] font-bold text-rose-800">
          <span className="bg-rose-200/60 px-1.5 py-0.5 rounded border border-dashed border-rose-400">► PLIER</span>
          <span className="bg-rose-200/60 px-2 py-0.5 rounded border border-dashed border-rose-400">▲ RABAT BAS</span>
          <span className="bg-rose-200/60 px-1.5 py-0.5 rounded border border-dashed border-rose-400">PLIER ◄</span>
        </div>

      </div>

      {/* Instructions bas */}
      <div className="pt-2 border-t border-slate-200 text-center text-[9px] text-slate-500">
        ✨ 1. Imprimez • 2. Découpez les pointillés ✂️ • 3. Pliez et collez !
      </div>

    </div>
  );
};