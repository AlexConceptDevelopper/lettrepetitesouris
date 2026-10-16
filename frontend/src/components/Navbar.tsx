import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <header className="w-full border-b border-pink-500/20 bg-slate-950/85 backdrop-blur-md sticky top-0 z-40 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="text-2xl">🐭✨</span>
          <div className="text-left">
            <span className="block text-[10px] font-black tracking-widest text-pink-400 uppercase">
              Royaume des Dents de Lait
            </span>
            <h1 className="text-sm md:text-base font-extrabold text-slate-100 group-hover:text-pink-300 transition-colors">
              lettrepetitesouris.fr
            </h1>
          </div>
        </Link>

        <nav className="flex items-center gap-4 text-xs font-bold text-slate-300">
          <Link to="/faq" className="hover:text-pink-400 transition-colors">
            FAQ
          </Link>
          <Link to="/blog" className="hover:text-pink-400 transition-colors hidden sm:inline-block">
            Conseils Parents
          </Link>
          <Link 
            to="/" 
            className="px-4 py-2 bg-linear-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 text-slate-950 rounded-2xl transition shadow-sm uppercase font-black text-[11px]"
          >
            Créer un Certificat 🦷
          </Link>
        </nav>
      </div>
    </header>
  );
};