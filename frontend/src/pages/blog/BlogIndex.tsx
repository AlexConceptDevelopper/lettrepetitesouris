import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { articles } from '../../articles';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export const BlogIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0a16] text-white flex flex-col justify-between font-sans">
      <Helmet>
        <title>Conseils Parents & Magie des Dents de Lait • Blog Lettre Petite Souris</title>
        <meta name="description" content="Tous nos conseils parents pour accompagner la perte des dents de lait et préparer la venue de la Petite Souris." />
        <link rel="canonical" href="https://lettrepetitesouris.fr/blog" />
      </Helmet>

      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-4 py-12 grow">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <Link to="/" className="text-xs text-amber-300 hover:underline">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-pink-400 to-purple-400">
            Conseils Parents & Dents de Lait 🌸
          </h1>
          <p className="text-slate-300 text-sm md:text-base">
            Astuces, guides et idées magiques pour accompagner votre enfant lors de la perte de ses dents.
          </p>
        </div>

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art) => (
            <div 
              key={art.slug} 
              className="bg-[#17142b] border border-pink-500/20 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-amber-400/40 transition-all shadow-lg group text-left"
            >
              {/* IMAGE CLIQUABLE */}
              {art.image && (
                <Link to={`/blog/${art.slug}`} className="w-full h-40 sm:h-48 overflow-hidden relative bg-slate-950 block">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
              )}

              <div className="p-6 space-y-3 grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-pink-500/10 text-pink-300 border border-pink-500/30 rounded-full text-[10px] font-bold uppercase">
                      {art.category}
                    </span>
                    <span className="text-[11px] text-slate-400">⏳ {art.readTime}</span>
                  </div>

                  {/* TITRE CLIQUABLE */}
                  <h2>
                    <Link to={`/blog/${art.slug}`} className="text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors block">
                      {art.title}
                    </Link>
                  </h2>

                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                    {art.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <Link to={`/blog/${art.slug}`} className="text-xs font-bold text-amber-300 hover:text-amber-200 transition">
                    Lire l'article →
                  </Link>
                  <img src="/favicon.png" alt="Souris" className="w-4 h-4 object-contain" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};