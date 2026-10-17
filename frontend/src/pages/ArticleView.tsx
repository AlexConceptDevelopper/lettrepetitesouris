import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getArticleBySlug } from '../articles';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const ArticleView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0b0a16] text-slate-200 flex flex-col justify-between font-sans">
      <Helmet>
        <title>{`${article.title} • Lettre Petite Souris`}</title>
        <meta name="description" content={article.description} />
        <link rel="canonical" href={`https://lettrepetitesouris.fr/blog/${article.slug}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
      </Helmet>

      <Navbar />

      <main className="w-full max-w-3xl mx-auto px-4 py-10 md:py-14 grow space-y-8 text-left">
        <Link to="/blog" className="text-xs text-amber-300 hover:underline inline-flex items-center gap-1 font-bold">
          ← Retour aux Conseils
        </Link>

        {/* En-tête Article */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-pink-500/10 text-pink-300 border border-pink-500/30 rounded-full text-[10px] font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs text-slate-400">⏳ {article.readTime} de lecture</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
            {article.title}
          </h1>
        </div>

        {/* Contenu fourni par le composant TSX de l'article */}
        <div className="bg-[#17142b] border border-pink-500/20 rounded-3xl p-6 md:p-8 shadow-xl">
          {article.content}
        </div>
      </main>

      <Footer />
    </div>
  );
};