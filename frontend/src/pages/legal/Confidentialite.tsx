import React from 'react';
import { Link } from 'react-router-dom';

export const Confidentialite: React.FC = () => {
  return (
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
          <h2 className="text-lg font-bold text-amber-300">2. Utilisation & Traitement bancaire</h2>
          <p>
            Vos informations ne sont jamais revendues ou transmises à des tiers à des fins commerciales. Les transactions financières sont entièrement déléguées à Stripe, qui traite vos coordonnées bancaires en toute sécurité.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-amber-300">3. Vos droits (RGPD)</h2>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles sur simple demande à <strong>contact@lettrepetitesouris.fr</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};