import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const Confidentialite: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité | Lettre Petite Souris</title>
        <meta 
          name="description" 
          content="Politique de traitement des données personnelles et engagement RGPD de Lettre Petite Souris." 
        />
        {/* Balise optionnelle : empêche l'indexation inutile dans Google tout en autorisant les liens */}
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-[#0f0d1b] text-slate-200 py-12 px-4">
        <div className="max-w-3xl mx-auto bg-[#17142b] border border-slate-800 rounded-3xl p-6 md:p-10 space-y-6 text-left shadow-xl">
          <Link to="/" className="text-xs text-amber-300 hover:underline">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-3xl font-extrabold text-white">Politique de Confidentialité</h1>

          <section className="space-y-3 text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-amber-300">1. Données collectées</h2>
            <p>
              Dans le cadre de la personnalisation de votre kit, nous collectons uniquement le prénom de l'enfant, son âge, sa ville, ainsi que l'adresse e-mail du parent pour la livraison du fichier PDF.
            </p>
          </section>

          <section className="space-y-3 text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-amber-300">2. Conservation & Suppression automatique (RGPD)</h2>
            <p>
              Afin de protéger la vie privée des enfants et de respecter une politique stricte de minimisation des données, <strong>toutes les données de personnalisation (prénom, âge, ville) sont automatiquement et définitivement supprimées de nos serveurs au bout de 48 heures</strong> après la commande. L'e-mail de confirmation et le PDF en pièce jointe reçus sur votre boîte mail restent à votre disposition permanente.
            </p>
          </section>

          <section className="space-y-3 text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-amber-300">3. Traitement bancaire</h2>
            <p>
              Vos informations ne sont jamais revendues ou transmises à des tiers à des fins commerciales. Les transactions financières sont entièrement déléguées à Stripe, qui traite vos coordonnées bancaires en toute sécurité.
            </p>
          </section>

          <section className="space-y-3 text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-amber-300">4. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles sur simple demande à <strong>contact@lettrepetitesouris.fr</strong>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};