import React from 'react';
import type { DocumentData } from '../types/document';

interface CertificatePreviewProps {
  data: DocumentData;
}

export const CertificatePreview: React.FC<CertificatePreviewProps> = ({ data }) => {
  return (
    <div className="w-full max-w-lg aspect-[1.414/1] rounded-xl shadow-2xl border-2 border-amber-300 relative overflow-hidden flex flex-col justify-between font-serif select-none bg-[#fffdf9]">
      
      {/* Fond de certificat féerique avec le titre déjà intégré */}
      <img 
        src="/images/certificat-petite-souris-fond.jpg" 
        alt="Fond Certificat Féerique" 
        className="absolute inset-0 w-full h-full object-fill pointer-events-none z-0"
      />

      {/* Conteneur de texte ajusté pour épouser l'espace vide central et le bas du parchemin */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between px-16 py-12 sm:px-20 sm:py-14 text-[#3d2314]">
        
        {/* Espace vide supérieur pour laisser respirer le titre intégré dans l'image */}
        <div className="pt-8 sm:pt-10"></div>

        {/* Corps central (Prénom, Âge, Dent) */}
        <div className="my-auto text-center space-y-2">
          <p className="text-[10px] sm:text-xs text-slate-500 uppercase font-sans tracking-widest font-bold">
            Ce document certifie que
          </p>
          <div>
            <span className="text-base sm:text-xl font-black text-rose-800 font-sans tracking-tight border-b-2 border-rose-300 inline-block px-4 pb-0.5">
              {data.childName || "Léna"} ({data.childAge || 6} ans)
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-snug pt-1 italic font-medium max-w-md mx-auto">
            a confié sa dent de lait (<strong className="text-rose-800 not-italic font-bold">{data.toothType || "Incisive"}</strong> {data.toothPosition ? `- ${data.toothPosition}` : ""}) à la Petite Souris.
          </p>
        </div>

        {/* Pied de certificat : Récompense à gauche et Sceau à droite */}
        <div className="pt-2 flex justify-between items-end text-left font-sans">
          <div className="text-[10px] sm:text-xs text-slate-700 space-y-0.5 max-w-[75%] leading-tight">
            <p>🎁 <strong>Récompense :</strong> {data.giftType || "Pièce de 2 €"}</p>
            <p>📍 <strong>Lieu :</strong> Grand Registre du Royaume</p>
          </div>

          {/* Sceau / Tampon officiel */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-linear-to-br from-amber-300 via-yellow-400 to-amber-500 border-2 border-amber-200 flex flex-col items-center justify-center text-amber-950 shadow-md shrink-0 overflow-hidden p-0.5">
            <img src="/favicon.png" alt="Sceau" className="w-5 h-5 object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
            <span className="text-[4px] font-black uppercase tracking-tighter scale-90">OFFICIEL</span>
          </div>
        </div>

      </div>
    </div>
  );
};