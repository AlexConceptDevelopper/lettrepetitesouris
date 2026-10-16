import { useState } from "react";
import type { DocumentData, CreateOrderRequest } from "../types/document";
import { checkoutOrder } from "../apis/orderApi";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { AkinatorQuiz } from "../components/AkinatorQuiz";
import { CertificatePreview } from "../components/CertificatePreview";
import { LetterPreview } from "../components/LetterPreview";
import { EnvelopePreview } from "../components/EnvelopePreview";
import { Helmet } from "react-helmet-async";

export function Home() {
  const [customerEmail, setCustomerEmail] = useState("");
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [includeEnvelope, setIncludeEnvelope] = useState(true);

  const [formData, setFormData] = useState<DocumentData>({
    childName: "Léna",
    childAge: 6,
    toothType: "Incisive",
    toothPosition: "Haut - Devant",
    giftType: "Pièce de 2 €",
    customMessage: "Bravo pour ton courage ! Continue de bien te brosser les dents chaque soir.",
  });

  const [activePreview, setActivePreview] = useState<"certificate" | "letter" | "envelope">("certificate");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleQuizComplete = (quizData: Partial<DocumentData>) => {
    setFormData((prev) => ({
      ...prev,
      ...quizData,
    }));
    setIsQuizCompleted(true);
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerEmail) {
      setErrorMessage("Veuillez entrer une adresse e-mail valide pour recevoir vos documents.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const orderRequest: CreateOrderRequest = {
        customerEmail,
        documentData: {
          ...formData,
        },
      };

      const response = await checkoutOrder(orderRequest);

      if (response.sessionUrl) {
        window.location.href = response.sessionUrl;
      } else {
        throw new Error("URL de redirection introuvable.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Une erreur est survenue lors de la communication avec le Royaume. Réessayez !");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-indigo-950 to-slate-950 text-slate-100 flex flex-col justify-between font-sans">
      <Helmet>
        <title>Le Kit Magique de la Petite Souris - Certificat, Lettre &amp; Enveloppe</title>
      </Helmet>

      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12 grow flex flex-col justify-center">
        
        {/* SECTION SPLIT-SCREEN HÉRO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* COLONNE GAUCHE : Texte & Réassurance */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="inline-block px-4 py-1.5 bg-slate-900 border border-pink-500/30 text-pink-300 rounded-full text-xs font-bold tracking-widest uppercase shadow-xs">
              🌸 Kit Complet &amp; Enveloppe Magique 🌸
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Le Kit Magique de la <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 via-purple-300 to-rose-300">Petite Souris</span>
            </h1>

            <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed">
              {!isQuizCompleted
                ? "Immortalisez la perte de la première dent de lait. Obtenez instantanément le certificat officiel, la lettre personnalisée de la Petite Souris, et le gabarit de son enveloppe décorée à plier !"
                : `Le dossier magique est prêt pour ${formData.childName} ! Vérifiez l'aperçu à droite et commandez votre kit complet.`}
            </p>

            {/* Badges de réassurance */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-xs">
                <span className="text-lg">📜</span>
                <span className="text-xs font-bold text-slate-200">Certificat Officiel</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-xs">
                <span className="text-lg">✉️</span>
                <span className="text-xs font-bold text-slate-200">Lettre Personnalisée</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-xs">
                <span className="text-lg">✂️</span>
                <span className="text-xs font-bold text-slate-200">Enveloppe à Plier</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-xs">
                <span className="text-lg">✨</span>
                <span className="text-xs font-bold text-slate-200">Le Tout pour 1,99€</span>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : Quiz / Formulaire & Vrais Aperçus */}
          <div className="lg:col-span-6 w-full">
            {!isQuizCompleted ? (
              <div className="w-full">
                <AkinatorQuiz onComplete={handleQuizComplete} />
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* FORMULAIRE & APERÇU RÉALISTE */}
                <form onSubmit={handleCheckout} className="bg-slate-900/90 border-2 border-pink-500/30 p-6 rounded-3xl shadow-xl space-y-5 text-left text-white">
                  
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h2 className="text-xs font-bold text-pink-300 uppercase tracking-wider flex items-center gap-1.5">
                      <span>✨</span> Votre Kit Magique Tout-en-Un
                    </h2>
                    <button
                      type="button"
                      onClick={() => setIsQuizCompleted(false)}
                      className="text-[11px] text-pink-400 underline hover:text-pink-300 cursor-pointer"
                    >
                      Modifier les réponses
                    </button>
                  </div>

                  {/* Sélecteur d'onglets d'aperçu */}
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setActivePreview("certificate")}
                      className={`py-2 px-2 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-all border flex items-center justify-center gap-1 cursor-pointer ${
                        activePreview === "certificate"
                          ? "bg-pink-500 text-slate-950 border-pink-400 shadow-xs"
                          : "bg-slate-950 text-slate-300 border-slate-800"
                      }`}
                    >
                      📜 Certificat
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePreview("letter")}
                      className={`py-2 px-2 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-all border flex items-center justify-center gap-1 cursor-pointer ${
                        activePreview === "letter"
                          ? "bg-pink-500 text-slate-950 border-pink-400 shadow-xs"
                          : "bg-slate-950 text-slate-300 border-slate-800"
                      }`}
                    >
                      ✉️ Lettre
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePreview("envelope")}
                      className={`py-2 px-2 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-all border flex items-center justify-center gap-1 cursor-pointer ${
                        activePreview === "envelope"
                          ? "bg-pink-500 text-slate-950 border-pink-400 shadow-xs"
                          : "bg-slate-950 text-slate-300 border-slate-800"
                      }`}
                    >
                      ✂️ Enveloppe
                    </button>
                  </div>

                  {/* APERÇU VISUEL RÉALISTE */}
                  <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-2xl flex items-center justify-center overflow-hidden">
                    {activePreview === "certificate" && <CertificatePreview data={formData} />}
                    {activePreview === "letter" && <LetterPreview data={formData} />}
                    {activePreview === "envelope" && <EnvelopePreview data={formData} />}
                  </div>

                  {/* Option Enveloppe checkbox */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="envelopeOption"
                      checked={includeEnvelope}
                      onChange={(e) => setIncludeEnvelope(e.target.checked)}
                      className="rounded border-slate-700 bg-slate-950 text-pink-500 focus:ring-pink-400 w-4 h-4 cursor-pointer"
                    />
                    <label htmlFor="envelopeOption" className="text-xs text-slate-300 cursor-pointer">
                      Inclure la feuille d'enveloppe magique à découper et plier ✂️
                    </label>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-300 mb-1">
                      Adresse e-mail du parent
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="parent@exemple.fr"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:ring-2 focus:ring-pink-400 outline-none"
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-red-400 text-xs text-center font-medium bg-red-950/60 p-2.5 rounded-xl border border-red-500/30">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 bg-linear-to-r from-pink-400 via-rose-400 to-purple-400 hover:opacity-90 text-slate-950 font-black rounded-xl shadow-lg uppercase tracking-wider text-xs transition transform hover:scale-[1.01] disabled:opacity-50 cursor-pointer"
                  >
                    {isLoading ? "Préparation du kit..." : "🎁 Obtenir mon Kit Magique Tout-en-Un (1,99 €)"}
                  </button>

                </form>
              </div>
            )}
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}