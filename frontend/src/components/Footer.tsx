import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-pink-500/20 bg-slate-950 py-8 px-4 mt-auto text-slate-400 text-xs font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 text-left">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🐭✨</span>
            <span className="font-bold text-pink-400 uppercase tracking-wider text-xs">
              La Petite Souris
            </span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Le service magique pour immortaliser la perte des dents de lait avec élégance et poésie.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-2">Navigation</h4>
          <ul className="space-y-1.5 text-[11px]">
            <li><Link to="/" className="hover:text-pink-400 transition">Accueil &amp; Formulaire</Link></li>
            <li><Link to="/faq" className="hover:text-pink-400 transition">Foire Aux Questions</Link></li>
            <li><Link to="/blog" className="hover:text-pink-400 transition">Conseils &amp; Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-2">Informations Légales</h4>
          <ul className="space-y-1.5 text-[11px]">
            <li><Link to="/mentions-legales" className="hover:text-pink-400 transition">Mentions Légales</Link></li>
            <li><Link to="/cgv" className="hover:text-pink-400 transition">Conditions Générales de Vente</Link></li>
            <li><Link to="/confidentialite" className="hover:text-pink-400 transition">Politique de Confidentialité (RGPD)</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-2">Contact &amp; Support</h4>
          <p className="text-[11px] text-slate-400 mb-2">
            Une question sur votre commande ou le téléchargement de votre certificat ?
          </p>
          <Link to="/contact" className="inline-block px-3 py-1.5 bg-slate-900 border border-pink-500/30 text-pink-300 rounded-xl hover:bg-slate-800 transition font-bold text-[11px]">
            Nous contacter ✉️
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-900 pt-4 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-500">
        <p>© 2026 lettrepetitesouris.fr • Tous droits réservés.</p>
        <p className="mt-2 sm:mt-0">Entreprise enregistrée en France (SIREN 109 752 832)</p>
      </div>
    </footer>
  );
};