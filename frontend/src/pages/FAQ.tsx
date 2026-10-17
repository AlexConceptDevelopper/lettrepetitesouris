import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: "Sous quel format vais-je recevoir le Kit ?",
    answer:
      "Vous recevrez immédiatement après votre paiement un document PDF haute résolution de 3 pages au format A4 prêt à être imprimé : le Certificat officiel, la Lettre personnalisée et l'Enveloppe féerique à découper et plier.",
  },
  {
    question: "En combien de temps est livré le Kit ?",
    answer:
      "C'est instantané ! Dès le paiement validé (1,99 €), vous pouvez télécharger le Kit directement sur la page de confirmation et vous recevez également une copie par e-mail dans les minutes qui suivent.",
  },
  {
    question: "Comment imprimer et fabriquer l'enveloppe ?",
    answer:
      "L'impression se fait sur n'importe quelle imprimante familiale (A4). Pour l'enveloppe, il suffit de suivre les pointillés, découper les contours et ajouter une touche de colle sur les rabats.",
  },
  {
    question: "Que faire si je ne trouve pas l'e-mail après l'achat ?",
    answer:
      "Pensez à vérifier votre dossier 'Spams' ou 'Courriers indésirables'. Si vous n'avez toujours rien reçu, vous pouvez télécharger le PDF depuis la page de succès ou nous contacter pour qu'on vous le renvoie.",
  },
  {
    question: "Le paiement est-il sécurisé ?",
    answer:
      "Absolument. Nous utilisons Stripe, le leader mondial du paiement en ligne. Aucune donnée bancaire n'est stockée sur nos serveurs.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0f0d1b] text-white py-12 px-4">
      <Helmet>
        <title>Foire Aux Questions • Lettre Petite Souris</title>
        <meta
          name="description"
          content="Toutes les réponses sur le téléchargement instantané du Kit de la Petite Souris, l'impression du certificat et la sécurité des paiements."
        />
      </Helmet>
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Entête */}
        <div className="text-center space-y-3">
          <Link to="/" className="text-xs text-amber-300 hover:underline">
            ← Retour à l'accueil
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-pink-400 to-purple-400">
            Foire Aux Questions 🌸
          </h1>
          <p className="text-slate-300 text-sm">
            Toutes les réponses pour préparer une nuit magique à votre enfant.
          </p>
        </div>

        {/* Liste Accordéon */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#17142b] border border-purple-500/20 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 text-left flex justify-between items-center space-x-4 hover:bg-white/5 transition"
                >
                  <span className="font-semibold text-slate-100 text-base">
                    {item.question}
                  </span>
                  <span className="text-amber-400 text-xl font-bold">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call To Action Bas de page */}
        <div className="text-center pt-6">
          <Link
            to="/"
            className="inline-block py-3.5 px-8 bg-linear-to-r from-amber-400 via-pink-500 to-purple-600 hover:opacity-90 text-white font-bold rounded-xl shadow-lg transition transform active:scale-95"
          >
            Créer mon Kit Magique (1,99 €) ✨
          </Link>
        </div>
      </div>
    </div>
  );
};
