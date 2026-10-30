import React from "react";
import type { DocumentData } from "../types/document";

interface LetterPreviewProps {
  data: DocumentData;
}

export const LetterPreview: React.FC<LetterPreviewProps> = ({ data }) => {
  const childName = data.childName || "Léna";
  const rawMsg =
    data.customMessage ||
    "Je suis bien passée cette nuit pendant que tu dormais profondément ! J'ai récupéré ta jolie dent sous ton oreiller.";

  const cleanedMsg = rawMsg
    .replace(/^(ma chère|mon cher)\s+[^,\n]+,?\s*/i, "")
    .trim();

  return (
    <div className="w-full max-w-md aspect-[1/1.414] rounded-2xl shadow-2xl border-2 border-amber-300 relative overflow-hidden flex flex-col justify-between select-none bg-[#fffdf9]">
      {/* Fond de la lettre féerique */}
      <img
        src="/images/lettre-petite-souris-fond.jpg"
        alt="Fond Lettre Petite Souris"
        className="absolute inset-0 w-full h-full object-fill pointer-events-none z-0"
      />

      {/* Conteneur de texte avec des marges taillées sur mesure pour l'encadré beige */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between px-16 py-14 sm:px-20 sm:py-16 text-[#3d2314] font-serif">
        {/* Zone Haute : Salutation bien calée sous le blason */}
        <div className="pt-2 sm:pt-10 text-left">
          <p className="font-bold text-[#881337] text-lg sm:text-xl md:text-2xl font-serif italic tracking-wide">
            {data.childGender === "M" ? "Mon cher" : "Ma chère"} {childName},
          </p>
        </div>

        {/* Zone Centrale : Corps du message avec un espace naturel */}
        <div className="my-auto text-left py-4">
          <div className="text-[#4a2810] whitespace-pre-line leading-relaxed italic text-xs sm:text-sm font-medium">
            {cleanedMsg}
          </div>
        </div>

        {/* Zone Basse : Pied de page et Signature */}
        <div className="w-full flex justify-between items-end font-sans pb-10">
          <span className="text-[9px] text-slate-500 font-medium">
            Royaume des Dents • 2026
          </span>

          {/* Bloc global aligné à droite de la page, mais dont les éléments internes s'alignent sous le texte du haut */}
          <div className="flex flex-col items-start pr-2 sm:pr-4">
            <span className="text-[10px] sm:text-[11px] text-[#5c3a21] block italic font-serif mb-0.5 w-full text-right">
              Avec toute ma tendresse,
            </span>
            <span className="text-xs sm:text-sm font-black text-[#881337] tracking-wide inline-flex items-center gap-1.5">
              La Petite Souris
              <img
                src="/favicon.png"
                alt="Petite Souris Icon"
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain inline-block drop-shadow-xs"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
