import React from 'react';
import { Link } from 'react-router-dom';

export const Cancel: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f0d1b] text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#17142b] border border-pink-500/30 rounded-2xl p-8 text-center shadow-xl">
        <div className="text-5xl mb-4">🐭 💭</div>
        
        <h1 className="text-2xl font-bold text-pink-300 mb-2">
          Paiement non finalisé
        </h1>
        
        <p className="text-slate-300 text-sm mb-6 leading-relaxed">
          La commande a été interrompue. Aucune somme n'a été prélevée sur votre compte. La Petite Souris garde précieusement vos personnalisations si vous souhaitez réessayer !
        </p>

        <div className="space-y-3">
          <Link
            to="/"
            className="block w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white font-bold rounded-xl transition"
          >
            Réessayer la personnalisation 🪄
          </Link>

          <Link
            to="/"
            className="block text-xs text-slate-400 hover:text-white transition"
          >
            Retourner à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};