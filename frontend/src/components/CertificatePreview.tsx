import React from 'react';
import type { DocumentData } from '../types/document';

interface CertificatePreviewProps {
  data: DocumentData;
}

export const CertificatePreview: React.FC<CertificatePreviewProps> = ({ data }) => {
  return (
    <div className="w-full max-w-md aspect-[1.41/1] bg-linear-to-br from-amber-50 via-rose-50 to-pink-100 rounded-xl p-4 sm:p-5 text-slate-800 shadow-2xl border-4 border-amber-300/80 relative overflow-hidden flex flex-col justify-between font-serif select-none">
      
      {/* Cadre intérieur propre avec padding suffisant */}
      <div className="h-full border-2 border-dashed border-amber-400/70 rounded-lg p-3 sm:p-4 flex flex-col justify-between relative z-10 bg-white/70 backdrop-blur-xs overflow-hidden">
        
        {/* En-tête */}
        <div className="text-center space-y-0.5 border-b border-amber-200 pb-1.5">
          <div className="flex justify-center items-center gap-1.5 text-amber-700 text-[9px] font-sans tracking-widest font-black uppercase">
            <span>✨</span> ROYAUME DES DENTS DE LAIT <span>✨</span>
          </div>
          <h2 className="text-base sm:text-lg font-black text-rose-800 uppercase tracking-wide">
            Certificat Officiel
          </h2>
          <p className="text-[8px] text-amber-800 italic">Attestation de récolte sous l'oreiller</p>
        </div>

        {/* Corps */}
        <div className="my-auto text-center space-y-1.5 py-1">
          <p className="text-[9px] text-slate-500 uppercase font-sans tracking-wider">Ce document certifie que</p>
          <p className="text-base sm:text-xl font-black text-pink-700 font-sans tracking-tight border-b-2 border-pink-300 inline-block px-3 pb-0.5">
            {data.childName || "Léa"} ({data.childAge || 6} ans)
          </p>
          <p className="text-[10px] text-slate-700 leading-tight pt-0.5">
            a confié sa dent de lait (<strong className="text-rose-800">{data.toothType || "Incisive"}</strong> - <i>{data.toothPosition || "Haut"}</i>) à la Petite Souris.
          </p>
        </div>

        {/* Pied de certificat : bien ajusté au-dessus du cadre */}
        <div className="pt-1.5 border-t border-amber-200 flex justify-between items-center text-left">
          <div className="text-[8px] font-sans text-slate-600 space-y-0.5 max-w-[70%] leading-tight">
            <p className="truncate">🎁 <strong>Récompense :</strong> {data.giftType || "Pièce de 2 €"}</p>
            <p className="truncate">📍 <strong>Lieu :</strong> Grand Registre du Royaume</p>
          </div>

          {/* Sceau */}
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-amber-300 via-yellow-400 to-amber-500 border-2 border-amber-200 flex flex-col items-center justify-center text-amber-950 shadow-xs shrink-0">
            <span className="text-xs">🐭</span>
            <span className="text-[4px] font-black uppercase tracking-tighter">OFFICIEL</span>
          </div>
        </div>

      </div>
    </div>
  );
};