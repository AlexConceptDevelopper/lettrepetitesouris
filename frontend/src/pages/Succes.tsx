import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getPdfDownloadUrl } from "../apis/orderApi";
import { Helmet } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Succes() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get("session_id");

  const [hasDownloaded, setHasDownloaded] = useState(false);

  const handleDownload = () => {
    if (!sessionId) {
      alert("Identifiant de session manquant.");
      return;
    }

    // Lance le téléchargement sécurisé dans un nouvel onglet
    window.open(getPdfDownloadUrl(sessionId), "_blank");
    setHasDownloaded(true);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0b0a16] via-indigo-950 to-[#0b0a16] text-slate-100 flex flex-col justify-between font-sans">
      <Helmet>
        <title>
          Commande Validée • Téléchargez votre Kit de la Petite Souris !
        </title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Navbar />

      <main className="w-full max-w-xl mx-auto px-4 py-16 grow flex flex-col items-center justify-center relative">
        {/* Effet lumineux de fond */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full bg-slate-900/90 border-2 border-pink-500/30 p-8 rounded-3xl shadow-2xl backdrop-blur-xl text-center relative z-10 space-y-6">
          <div className="text-6xl animate-bounce">✨ 🐭 🎁</div>

          <div className="space-y-3">
            <span className="inline-block px-4 py-1.5 bg-pink-500/20 border border-pink-500/40 text-pink-300 rounded-full text-xs font-bold tracking-widest uppercase shadow-xs">
              Paiement Validé avec Succès !
            </span>
            <h1 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-pink-300 to-purple-300">
              Merci pour votre commande !
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              La Petite Souris est passée par ici ! Vos documents magiques
              (certificat officiel, lettre personnalisée et enveloppe) sont
              prêts.
            </p>

            {/* Notification e-mail */}
            <p className="text-xs text-amber-300/90 font-medium bg-amber-500/10 border border-amber-400/20 py-2.5 px-3 rounded-xl text-left">
              📧 Une copie de votre kit vient également de vous être envoyée par
              e-mail afin que vous puissiez le retrouver facilement.
            </p>
          </div>

          {hasDownloaded && (
            <div className="bg-emerald-950/60 border border-emerald-500/40 p-3 rounded-2xl text-emerald-200 text-xs font-medium">
              ✅ Téléchargement lancé avec succès ! Vous pouvez le relancer ou
              retourner à l'accueil à tout moment.
            </div>
          )}

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={handleDownload}
              style={{ cursor: "pointer" }}
              className="w-full py-4 bg-linear-to-r from-amber-400 via-pink-500 to-purple-600 hover:opacity-95 text-slate-950 font-black rounded-xl shadow-xl uppercase tracking-wider text-xs border border-amber-300/40 transition-transform transform hover:scale-[1.02]"
            >
              📥 Télécharger mon Kit Magique (PDF)
            </button>

            <button
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
              className="w-full py-3 bg-slate-950 hover:bg-slate-900 text-slate-300 font-bold rounded-xl border border-slate-800 text-xs tracking-wider transition-colors"
            >
              🏠 Retourner à l'accueil
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
