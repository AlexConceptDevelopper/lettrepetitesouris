import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const Cgv: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Conditions Générales de Vente (CGV) | Lettre Petite Souris</title>
        <meta 
          name="description" 
          content="Conditions Générales de Vente applicables aux commandes de kits numériques personnalisés sur lettrepetitesouris.fr." 
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-[#0f0d1b] text-slate-200 py-12 px-4">
        <div className="max-w-3xl mx-auto bg-[#17142b] border border-slate-800 rounded-3xl p-6 md:p-10 space-y-6 text-left shadow-xl">
          <Link to="/" className="text-xs text-amber-300 hover:underline">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-3xl font-extrabold text-white">Conditions Générales de Vente (CGV)</h1>

          <section className="space-y-3 text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-amber-300">1. Objet & Service</h2>
            <p>
              Les présentes CGV régissent les ventes de kits numériques personnalisés (Certificat, Lettre et Enveloppe de la Petite Souris au format PDF) effectuées sur le site <strong>lettrepetitesouris.fr</strong>.
            </p>
          </section>

          <section className="space-y-3 text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-amber-300">2. Prix & Paiement</h2>
            <p>
              Le prix du kit numérique complet est fixé à <strong>1,99 € TTC</strong> (TVA non applicable, art. 293 B du CGI). Le paiement s'effectue en ligne de manière sécurisée via notre prestataire bancaire <strong>Stripe</strong>.
            </p>
          </section>

          <section className="space-y-3 text-sm leading-relaxed">
            <h2 className="text-lg font-bold text-amber-300">3. Droit de rétractation & Livraison</h2>
            <p>
              S'agissant d'un contenu numérique personnalisé généré immédiatement après paiement et téléchargeable sans support matériel (article L.221-28 du Code de la consommation), l'acheteur renonce expressément à son droit de rétractation après validation de sa commande. Le fichier PDF est rendu accessible immédiatement après paiement et transmis par e-mail.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};