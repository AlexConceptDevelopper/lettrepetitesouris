import React from 'react';
import { Link } from 'react-router-dom';

export const MentionsLegales: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f0d1b] text-slate-200 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-[#17142b] border border-slate-800 rounded-3xl p-6 md:p-10 space-y-6 text-left shadow-xl">
        <Link to="/" className="text-xs text-amber-300 hover:underline">
          ← Retour à l'accueil
        </Link>
        <h1 className="text-3xl font-extrabold text-white">Mentions Légales</h1>

        <section className="space-y-3 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-amber-300">1. Édition du site</h2>
          <p>
            Le site <strong>lettrepetitesouris.fr</strong> est édité par l'entreprise individuelle enregistrée en France sous le numéro SIREN <strong>109 752 832</strong>.
          </p>
          <p>
            <strong>Directeur de la publication :</strong> Le Responsable Légal<br />
            <strong>Contact :</strong> contact@lettrepetitesouris.fr
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-amber-300">2. Hébergement</h2>
          <p>
            Le site et sa base de données sont hébergés par :<br />
            <strong>Railway Corp.</strong> — 548 Market St, PMB 57274, San Francisco, CA 94104, États-Unis.<br />
            Le nom de domaine est enregistré auprès de <strong>IONOS SARL</strong> (7 Place de la Gare, 57200 Sarreguemines).
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-amber-300">3. Propriété intellectuelle</h2>
          <p>
            L'ensemble des visuels, modèles de lettres, certificats, gabarits d'enveloppes, graphismes et contenus textuels présents sur ce site sont protégés par le droit d'auteur. Toute reproduction ou distribution non autorisée est strictement interdite.
          </p>
        </section>
      </div>
    </div>
  );
};