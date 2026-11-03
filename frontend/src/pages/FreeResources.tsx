import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const FreeResources: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#0b0a16] via-indigo-950 to-[#0b0a16] text-slate-100 flex flex-col justify-between font-sans">
      <Helmet>
        <title>Imprimables & Ateliers Gratuits – Petite Souris (PDF à Imprimer)</title>
        <meta 
          name="description" 
          content="Choisissez et imprimez gratuitement nos supports pour la Petite Souris : diplôme de bravoure, calendrier des dents de lait, kit coloriage et reçu de la Banque Magique." 
        />
        <link rel="canonical" href="https://lettrepetitesouris.fr/gratuit" />
      </Helmet>

      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-4 py-10 md:py-16 grow text-left space-y-12">
        
        {/* ENTÊTE DE LA PAGE HUB */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-purple-500/10 text-purple-300 border border-purple-500/30 rounded-full text-xs font-bold uppercase tracking-widest shadow-xs">
            🎁 100% Gratuit & Prêt à Imprimer
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Les Ateliers & Outils Magiques de la{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-300 via-amber-200 to-rose-300">
              Petite Souris
            </span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed">
            Choisissez votre support gratuit ci-dessous pour l'afficher en taille réelle, l'imprimer ou le télécharger en un clic.
          </p>
        </div>

        {/* GRILLE DES 4 RESSOURCES GRATUITES AVEC CHOIX VERS LES PREVIEWS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* 1. DIPLÔME DE BRAVOURE */}
          <div className="bg-slate-900/90 border border-slate-800 hover:border-pink-500/40 p-6 md:p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-xl transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl">📜</span>
                <span className="px-3 py-1 bg-pink-500/10 text-pink-300 border border-pink-500/30 rounded-full text-[10px] font-bold uppercase">
                  PDF A4 à remplir
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white">
                Diplôme de Bravoure Standard
              </h2>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                Un certificat officiel neutre à imprimer chez vous et à compléter manuellement au stylo avec le prénom de l'enfant et la date de perte de sa dent.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                <li>Design officiel du Royaume des Dents</li>
                <li>Format A4 haute définition</li>
                <li>Espace réservé à la signature de la Petite Souris</li>
              </ul>
            </div>
            <Link
              to="/gratuit/diplome-bravoure"
              className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-pink-300 font-bold rounded-2xl text-xs uppercase tracking-wider transition border border-pink-500/30 flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <span>🖨️ Choisir et Imprimer le Diplôme</span>
            </Link>
          </div>

          {/* 2. CALENDRIER DES DENTS DE LAIT */}
          <div className="bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 p-6 md:p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-xl transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl">🗓️</span>
                <span className="px-3 py-1 bg-amber-400/10 text-amber-300 border border-amber-400/30 rounded-full text-[10px] font-bold uppercase">
                  Check-list Frigo
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white">
                Calendrier des 20 Dents de Lait
              </h2>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                Une grille illustrée représentant les 20 dents de lait. L'enfant peut colorier ou cocher chaque dent tombée au fil des années (de 6 à 12 ans).
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                <li>Indique l'ordre chronologique de chute</li>
                <li>Parfait à afficher sur le réfrigérateur</li>
                <li>Souvenir d'enfance à conserver dans l'album</li>
              </ul>
            </div>
            <Link
              to="/gratuit/calendrier-dents-de-lait"
              className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold rounded-2xl text-xs uppercase tracking-wider transition border border-amber-400/30 flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <span>🖨️ Choisir et Imprimer le Calendrier</span>
            </Link>
          </div>

          {/* 3. KIT COLORIAGE & DESSIN */}
          <div className="bg-slate-900/90 border border-slate-800 hover:border-purple-400/40 p-6 md:p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-xl transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl">🎨</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-300 border border-purple-500/30 rounded-full text-[10px] font-bold uppercase">
                  Atelier Enfant
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white">
                Fiche Coloriage & Message du Soir
              </h2>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                Une fiche interactive où l'enfant peut faire un dessin pour la Petite Souris et cocher la case *"J'ai bien brossé mes dents ce soir !"*.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                <li>Évite le stress du coucher avant la perte de la dent</li>
                <li>Espace dessin libre pour stimuler la créativité</li>
                <li>Encourage la routine de brossage de dents</li>
              </ul>
            </div>
            <Link
              to="/gratuit/kit-coloriage"
              className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-purple-300 font-bold rounded-2xl text-xs uppercase tracking-wider transition border border-purple-500/30 flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <span>🖨️ Choisir et Imprimer le Kit Coloriage</span>
            </Link>
          </div>

          {/* 4. REÇU BANQUE DE LA PETITE SOURIS */}
          <div className="bg-slate-900/90 border border-slate-800 hover:border-emerald-400/40 p-6 md:p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-xl transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl">🧾</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 rounded-full text-[10px] font-bold uppercase">
                  Ticket de Caisse Rigolo
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white">
                Reçu Officiel de la Banque Magique
              </h2>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                Un petit reçu sous forme de ticket de caisse attestant de la réception de la dent de lait (Mention : *1 dent propre reçue = 1 sourire validé*).
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                <li>Format original à découper et glisser sous l'oreiller</li>
                <li>Mentionne la propreté et l'état de la dent</li>
                <li>Garantit un effet de surprise garanti au réveil</li>
              </ul>
            </div>
            <Link
              to="/gratuit/recu-banque-petite-souris"
              className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-emerald-300 font-bold rounded-2xl text-xs uppercase tracking-wider transition border border-emerald-400/30 flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <span>🖨️ Choisir et Imprimer le Reçu</span>
            </Link>
          </div>

        </div>

        {/* BANNIÈRE DE CONVERSION VERS L'OFFRE SUR-MESURE */}
        <div className="p-8 bg-linear-to-r from-pink-950/80 via-slate-900 to-amber-950/80 border border-amber-400/40 rounded-3xl text-center space-y-4 shadow-2xl my-12">
          <h2 className="text-2xl font-black text-white">
            Vous préférez une lettre 100% personnalisée avec le prénom de votre enfant ? ✨
          </h2>
          <p className="text-slate-300 text-xs md:text-sm max-w-2xl mx-auto">
            Découvrez nos kits magiques sur-mesure : la Petite Souris adresse une véritable lettre personnalisée mentionnant l'âge, la ville et la bravoure de votre enfant.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-linear-to-r from-amber-400 via-pink-500 to-purple-600 text-slate-950 font-black rounded-2xl text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition transform cursor-pointer"
          >
            Créer mon Kit Personnalisé (dès 0,99 €) 🦷
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
};