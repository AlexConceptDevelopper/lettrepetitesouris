import React from 'react';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f0d1b] text-slate-200 py-12 px-4 flex items-center justify-center">
      <div className="max-w-md w-full bg-[#17142b] border border-pink-500/20 rounded-3xl p-8 text-center space-y-6 shadow-xl">
        <div className="text-5xl">💌</div>
        <h1 className="text-2xl font-bold text-white">Contactez la Petite Souris</h1>
        <p className="text-slate-300 text-sm leading-relaxed">
          Une question sur votre commande, un problème pour télécharger votre kit PDF ou un besoin particulier ? Le Secrétariat de la Petite Souris vous répond dans les plus brefs délais.
        </p>
        
        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
          <p className="text-xs text-slate-400 mb-1 uppercase font-bold">E-mail du Support</p>
          <a
            href="mailto:contact@lettrepetitesouris.fr"
            className="text-amber-300 font-bold hover:underline text-sm"
          >
            contact@lettrepetitesouris.fr
          </a>
        </div>

        <Link to="/" className="inline-block text-xs text-slate-400 hover:text-white pt-2">
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};