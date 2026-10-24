import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-amber-400/20 bg-[#0b0a16] py-10 px-4 mt-auto text-slate-400 text-xs font-sans shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-left">
        
        {/* COLONNE 1 : LOGO & DESCRIPTION */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-linear-to-r from-pink-500/20 to-amber-400/20 blur-md rounded-full"></div>
              <img 
                src="/favicon.png" 
                alt="Petite Souris" 
                className="relative h-9 w-auto object-contain drop-shadow-[0_2px_8px_rgba(251,191,36,0.3)]"
              />
            </div>
            <span className="font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-200 to-amber-200 uppercase tracking-wider text-xs">
              Lettre Petite Souris
            </span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Le service magique pour immortaliser la perte des dents de lait avec élégance et poésie.
          </p>
        </div>

        {/* COLONNE 2 : NAVIGATION */}
        <div>
          <h4 className="font-bold text-amber-300 uppercase tracking-wider text-[11px] mb-3">Navigation</h4>
          <ul className="space-y-2 text-[11px]">
            <li><Link to="/" className="hover:text-amber-200 transition">Accueil &amp; Formulaire</Link></li>
            <li><Link to="/faq" className="hover:text-amber-200 transition">Foire Aux Questions</Link></li>
            <li><Link to="/blog" className="hover:text-amber-200 transition">Conseils &amp; Blog</Link></li>
          </ul>
        </div>

        {/* COLONNE 3 : INFORMATIONS LÉGALES */}
        <div>
          <h4 className="font-bold text-amber-300 uppercase tracking-wider text-[11px] mb-3">Informations Légales</h4>
          <ul className="space-y-2 text-[11px]">
            <li><Link to="/mentions-legales" className="hover:text-amber-200 transition">Mentions Légales</Link></li>
            <li><Link to="/cgv" className="hover:text-amber-200 transition">Conditions Générales de Vente</Link></li>
            <li><Link to="/confidentialite" className="hover:text-amber-200 transition">Politique de Confidentialité (RGPD)</Link></li>
          </ul>
        </div>

        {/* COLONNE 4 : CONTACT & SUPPORT */}
        <div>
          <h4 className="font-bold text-amber-300 uppercase tracking-wider text-[11px] mb-3">Contact &amp; Support</h4>
          <p className="text-[11px] text-slate-400 mb-3">
            Une question sur votre commande ou le téléchargement de votre certificat ?
          </p>
          <Link to="/contact" className="inline-block px-4 py-2 bg-slate-900 border border-amber-400/30 text-amber-300 rounded-xl hover:bg-slate-800 transition font-bold text-[11px] shadow-sm">
            Nous contacter ✉️
          </Link>
        </div>

      </div>

      {/* COPYRIGHT, SIREN & LIEN D'AUTORITÉ CUBTAIK */}
      <div className="max-w-7xl mx-auto border-t border-slate-900 pt-4 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-500 gap-2">
        <p>© 2026 lettrepetitesouris.fr • Tous droits réservés.</p>
        
        {/* Lien de marque / Studio central */}
        <p>
          Un service édité par{' '}
          <a 
            href="https://www.cubtaik.fr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-amber-300 font-semibold underline transition"
          >
            CubTaik Studio
          </a>
        </p>

        <p>Entreprise enregistrée en France (SIREN 109 752 832)</p>
      </div>
    </footer>
  );
};