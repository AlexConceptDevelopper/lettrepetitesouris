export function CalendrierDentsPrint() {
  return (
    <div className="w-full h-full border-4 border-double border-indigo-400 p-6 md:p-8 flex flex-col justify-between text-center bg-indigo-50/30 text-slate-900 rounded-lg relative overflow-hidden">
      
      {/* VRAIE IMAGE EN ARRIÈRE-PLAN */}
      <img 
        src="/images/tooth-tracker-background.jpg" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
      />

      {/* EN-TÊTE AVEC POLICE ÉLÉGANTE */}
      <div className="relative z-10 space-y-2">
        <span className="text-3xl">🗓️</span>
        <h1 className="text-2xl md:text-3xl font-black text-indigo-950 font-['Cinzel'] tracking-wide">
          Mon Calendrier des 20 Dents de Lait
        </h1>
        <p className="text-xs text-indigo-900 font-medium italic">
          Colorie ou coche chaque dent dès qu'elle tombe (de 6 à 12 ans) pour suivre ton aventure !
        </p>
      </div>

      {/* GRILLES DES DENTS (Complètes et enrichies) */}
      <div className="relative z-10 grid grid-cols-2 gap-4 my-auto text-left">
        
        {/* MÂCHOIRE DU HAUT */}
        <div className="p-3.5 bg-white/85 backdrop-blur-xs border border-indigo-200 rounded-2xl shadow-xs space-y-2">
          <h3 className="text-xs font-bold text-indigo-950 uppercase border-b border-indigo-200 pb-1 font-['Cinzel']">
            🦷 Mâchoire du Haut
          </h3>
          <ul className="text-[11px] space-y-1 text-slate-700 font-medium">
            <li>⬜ Incisive centrale droite (6-7 ans)</li>
            <li>⬜ Incisive centrale gauche (6-7 ans)</li>
            <li>⬜ Incisive latérale droite (7-8 ans)</li>
            <li>⬜ Incisive latérale gauche (7-8 ans)</li>
            <li>⬜ Canine droite (9-11 ans)</li>
            <li>⬜ Canine gauche (9-11 ans)</li>
            <li>⬜ 1ère molaire droite / gauche (9-11 ans)</li>
            <li>⬜ 2nde molaire droite / gauche (10-12 ans)</li>
          </ul>
        </div>

        {/* MÂCHOIRE DU BAS */}
        <div className="p-3.5 bg-white/85 backdrop-blur-xs border border-indigo-200 rounded-2xl shadow-xs space-y-2">
          <h3 className="text-xs font-bold text-indigo-950 uppercase border-b border-indigo-200 pb-1 font-['Cinzel']">
            🦷 Mâchoire du Bas
          </h3>
          <ul className="text-[11px] space-y-1 text-slate-700 font-medium">
            <li>⬜ Incisive centrale gauche (6-7 ans)</li>
            <li>⬜ Incisive centrale droite (6-7 ans)</li>
            <li>⬜ Incisive latérale gauche (7-8 ans)</li>
            <li>⬜ Incisive latérale droite (7-8 ans)</li>
            <li>⬜ Canine gauche (9-11 ans)</li>
            <li>⬜ Canine droite (9-11 ans)</li>
            <li>⬜ 1ère molaire gauche / droite (9-11 ans)</li>
            <li>⬜ 2nde molaire gauche / droite (11-12 ans)</li>
          </ul>
        </div>
      </div>

      {/* SECTION SOUVENIRS / NOTES POUR REMPLIR LE BAS */}
      <div className="relative z-10 bg-white/85 backdrop-blur-xs border border-indigo-200 p-3 rounded-xl text-left space-y-1 shadow-xs">
        <h4 className="text-[11px] font-bold text-indigo-900 font-['Cinzel']">🌟 Mes Notes Magiques :</h4>
        <div className="border-b border-dashed border-indigo-300 h-5"></div>
        <div className="border-b border-dashed border-indigo-300 h-5"></div>
      </div>

      {/* PIED DE PAGE */}
      <div className="relative z-10 text-[10px] text-slate-500 pt-2 border-t border-indigo-200 flex justify-between items-center">
        <span>✨ Accroche ce calendrier sur ton frigo !</span>
        <span className="font-bold text-indigo-900">lettrepetitesouris.fr</span>
      </div>
    </div>
  );
}