import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const MentionsLegales: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales | Lettre Petite Souris</title>
        <meta
          name="description"
          content="Mentions légales et informations officielles de l'éditeur du site lettrepetitesouris.fr (CubTaik)."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-[#0f0d1b] text-amber-100/90 px-6 py-16 relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-8 relative z-10 text-left">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-amber-400 hover:text-amber-300 transition-colors"
          >
            ← Retour à l'accueil 🌸
          </Link>

          <div className="border-b border-amber-400/20 pb-6">
            <h1 className="text-3xl font-bold text-amber-300 drop-shadow-sm">
              Mentions Légales
            </h1>
            <p className="mt-2 text-xs text-amber-200/60">
              Informations officielles du Royaume des Dents de Lait
            </p>
          </div>

          <div className="space-y-6 text-sm text-amber-100/80 leading-relaxed">
            <section className="bg-indigo-900/40 border border-amber-400/20 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-3">
              <h2 className="text-lg font-semibold text-amber-300">
                1. Édition du site
              </h2>
              <p>
                Le présent site est édité par la structure commerciale{" "}
                <strong className="text-amber-200">CubTaik</strong>, représentée
                par :
              </p>
              <div className="rounded-xl border border-amber-400/10 bg-[#0f0d1b]/60 p-4 text-xs text-amber-200/80 space-y-1">
                <p>
                  <strong className="text-amber-200">
                    Entrepreneur individuel :
                  </strong>{" "}
                  Alexandre Cubizolle
                </p>
                <p>
                  <strong className="text-amber-200">Nom commercial :</strong>{" "}
                  CubTaik
                </p>
                <p>
                  <strong className="text-amber-200">SIREN :</strong> 109 752
                  832
                </p>
                <p>
                  <strong className="text-amber-200">Siège social :</strong> 3
                  Chem des Brandes, 17600 Sablonceaux, France
                </p>
                <p>
                  <strong className="text-amber-200">TVA :</strong> TVA non
                  applicable, art. 293 B du CGI
                </p>
                <p>
                  <strong className="text-amber-200">
                    Directeur de la publication :
                  </strong>{" "}
                  Alexandre Cubizolle
                </p>
                <p>
                  <strong className="text-amber-200">Contact :</strong>{" "}
                  <a
                    href="mailto:contact@lettrepetitesouris.fr"
                    className="text-amber-400 underline hover:text-amber-300"
                  >
                    contact@lettrepetitesouris.fr
                  </a>
                </p>
              </div>
            </section>

            <section className="bg-indigo-900/40 border border-amber-400/20 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-3">
              <h2 className="text-lg font-semibold text-amber-300">
                2. Hébergement, Sécurité & Prestataires techniques
              </h2>
              <p>
                Le site, son infrastructure et ses services tiers reposent sur
                les prestataires suivants :
              </p>
              <div className="rounded-xl border border-amber-400/10 bg-[#0f0d1b]/60 p-4 text-xs text-amber-200/80 space-y-2">
                <p>
                  <strong className="text-amber-200">
                    Hébergement Backend & Base de données :
                  </strong>{" "}
                  Railway Corp. (San Francisco, CA, USA)
                </p>
                <p>
                  <strong className="text-amber-200">
                    Sécurité & Pare-feu (CDN/DNS) :
                  </strong>{" "}
                  Cloudflare, Inc. (101 Townsend St, San Francisco, CA, USA)
                </p>
                <p>
                  <strong className="text-amber-200">Nom de domaine :</strong>{" "}
                  IONOS SARL (7 Place de la Gare, 57200 Sarreguemines, France)
                </p>
                <p>
                  <strong className="text-amber-200">
                    Solution de Paiement :
                  </strong>{" "}
                  Stripe Payments Europe, Ltd. (gestion sécurisée des
                  transactions bancaires)
                </p>
              </div>
            </section>

            <section className="bg-indigo-900/40 border border-amber-400/20 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-3">
              <h2 className="text-lg font-semibold text-amber-300">
                3. Propriété intellectuelle
              </h2>
              <p>
                L'ensemble de ce site et de ses contenus (visuels, lettres,
                certificats, enveloppes, graphismes et textes) relève de la
                législation française et internationale sur le droit d'auteur et
                la propriété intellectuelle. Tous les droits de reproduction
                sont réservés.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentionsLegales;
