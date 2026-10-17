import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <header className="w-full border-b border-amber-400/20 bg-[#0b0a16]/90 backdrop-blur-md sticky top-0 z-40 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* LOGO & NOM DE MARQUE */}
        <Link to="/" className="flex items-center gap-3.5 group">
          <div className="relative flex items-center justify-center">
            {/* Halo lumineux sous le favicon pour le faire ressortir */}
            <div className="absolute inset-0 bg-linear-to-r from-pink-500/30 to-amber-400/30 blur-md rounded-full group-hover:scale-125 transition-transform"></div>
            <img 
              src="/favicon.png" 
              alt="Petite Souris" 
              className="relative h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)]"
            />
          </div>

          <div className="text-left">
            <span className="block text-[10px] md:text-[11px] font-black tracking-widest text-amber-300 uppercase">
              Royaume des Dents de Lait
            </span>
            <h1 className="text-base md:text-lg font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-200 via-amber-200 to-pink-300 group-hover:from-white group-hover:to-amber-200 transition-all">
              lettrepetitesouris.fr
            </h1>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-5 text-xs font-bold text-slate-200">
          <Link to="/faq" className="hover:text-amber-300 transition-colors">
            FAQ
          </Link>
          <Link to="/blog" className="hover:text-amber-300 transition-colors hidden sm:inline-block">
            Conseils Parents
          </Link>
          <Link 
            to="/" 
            className="px-5 py-2.5 bg-linear-to-r from-amber-400 via-pink-500 to-purple-600 hover:opacity-95 text-slate-950 font-black rounded-2xl transition shadow-md hover:shadow-amber-400/20 uppercase text-[11px] tracking-wide"
          >
            Créer un Certificat 🦷
          </Link>
        </nav>

      </div>
    </header>
  );
};