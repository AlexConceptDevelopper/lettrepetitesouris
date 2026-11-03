export function KitColoriagePrint() {
  return (
    <div className="w-full h-full border-4 border-double border-purple-400 p-6 md:p-8 flex flex-col justify-between text-center bg-purple-50/30 text-slate-900 rounded-lg relative overflow-hidden">
      
      {/* VRAIE IMAGE EN ARRIÈRE-PLAN */}
      <img 
        src="/images/coloring-sheet-background.jpg" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
      />

      {/* EN-TÊTE AVEC POLICE ÉLÉGANTE */}
      <div className="relative z-10 space-y-2">
        <span className="text-3xl">🎨</span>
        <h1 className="text-2xl md:text-3xl font-black text-purple-950 font-['Cinzel'] tracking-wide">
          Mon Message pour la Petite Souris
        </h1>
        <p className="text-xs text-purple-900 font-medium italic">
          Colorie ce dessin et laisse-le sous ton oreiller avec ta dent !
        </p>
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="relative z-10 my-auto space-y-4">
        {/* Check-list brossage */}
        <div className="p-3.5 bg-white/90 backdrop-blur-xs border border-purple-200 rounded-2xl text-left max-w-md mx-auto space-y-1.5 shadow-xs">
          <h3 className="text-xs font-bold text-purple-950 uppercase font-['Cinzel']">
            ✨ Mon rituel de propreté :
          </h3>
          <p className="text-xs text-slate-700 font-medium">
            ☑️ J'ai bien brossé mes dents matin et soir cette semaine !
          </p>
        </div>

        {/* Cadre de dessin avec le texte replacé EN HAUT */}
        <div className="w-full h-64 border-2 border-dashed border-purple-300 bg-white/90 backdrop-blur-xs rounded-2xl p-4 flex flex-col justify-start items-center shadow-xs">
          <span className="text-slate-500 text-xs italic font-medium">
            [ Espace libre : Dessine un beau sourire ou la Petite Souris ici ! ]
          </span>
        </div>
      </div>

      {/* PIED DE PAGE */}
      <div className="relative z-10 text-[11px] text-slate-500 pt-3 border-t border-purple-200 flex justify-between items-center font-medium">
        <span>✨ Doux rêves magiques !</span>
        <span className="font-bold text-purple-950">lettrepetitesouris.fr</span>
      </div>
    </div>
  );
}