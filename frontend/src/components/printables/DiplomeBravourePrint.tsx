export function DiplomeBravourePrint() {
  return (
    <div className="w-full max-w-[210mm] h-[260mm] box-border border-8 border-double border-amber-400 p-8 md:p-12 flex flex-col justify-between text-center bg-amber-50/50 text-slate-900 mx-auto shadow-sm relative overflow-hidden">
      
      {/* VRAIE IMAGE EN ARRIÈRE-PLAN */}
      <img 
        src="/images/fond-diplome.jpg" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
      />

      {/* EN-TÊTE */}
      <div className="relative z-10 space-y-2">
        <span className="text-4xl">👑</span>
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-amber-600 font-['Cinzel']">
          Royaume des Dents de Lait
        </h3>
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-['Cinzel'] tracking-wide">
          Diplôme de Bravoure
        </h1>
      </div>

      {/* CORPS DU DIPLÔME */}
      <div className="relative z-10 space-y-4 my-auto">
        <p className="text-xs md:text-sm italic text-slate-700">
          Ce certificat officiel est fièrement décerné à :
        </p>

        {/* Ligne vide pour écriture manuelle avec une police manuscrite pour l'exemple ou les pointillés */}
        <div className="border-b-2 border-dashed border-amber-400 max-w-md mx-auto pb-1 h-12 flex items-end justify-center">
          <span className="text-amber-900/60 text-2xl font-['Dancing_Script']">
            {/* Laisse vide pour l'écriture à la main ou ajoute un aperçu */}
          </span>
        </div>

        <p className="text-xs md:text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
          Pour son immense courage, sa patience et sa magnifique bravoure lors de la perte de sa dent de lait. La Petite Souris te félicite chaleureusement pour cet exploit de grand !
        </p>

        {/* SECTION DES PETITS ÉLÉMENTS GRAPHIQUES */}
        <div className="flex justify-center items-center gap-8 pt-3">
          <div className="flex flex-col items-center space-y-1">
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-amber-400 bg-white/50 flex items-center justify-center text-amber-500 text-sm font-bold shadow-2xs">
              ⭐
            </div>
            <span className="text-[9px] text-slate-500 uppercase font-semibold">Super Pouvoir</span>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <div className="w-16 h-12 rounded-xl border border-amber-300 bg-white/60 flex items-center justify-center text-amber-700 text-[10px] font-bold shadow-2xs font-['Dancing_Script'] text-base">
              Validé ✓
            </div>
            <span className="text-[9px] text-slate-500 uppercase font-semibold">Cachet Officiel</span>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-amber-400 bg-white/50 flex items-center justify-center text-amber-500 text-sm font-bold shadow-2xs">
              ✨
            </div>
            <span className="text-[9px] text-slate-500 uppercase font-semibold">Magie Pure</span>
          </div>
        </div>
      </div>

      {/* PIED DE PAGE */}
      <div className="relative z-10 flex justify-between items-end pt-4 border-t border-amber-200/60 text-xs font-semibold text-slate-600">
        <div className="text-left">
          <p>Fait le : ............................</p>
        </div>
        <div className="text-center">
          <span className="text-2xl block">🐭✨</span>
          <p className="font-bold text-amber-700 font-['Dancing_Script'] text-lg">La Petite Souris</p>
        </div>
      </div>
    </div>
  );
}