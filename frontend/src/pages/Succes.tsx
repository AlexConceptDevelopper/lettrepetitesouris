import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getApiUrl } from '../apis/client';

export const Succes: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [downloading, setDownloading] = useState<boolean>(false);

  useEffect(() => {
    if (!sessionId) {
      setError('Identifiant de session manquant.');
      setLoading(false);
      return;
    }

    fetch(getApiUrl(`/api/orders/success?session_id=${sessionId}`), {
      method: 'POST',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Paiement non validé ou session introuvable.');
        }
        return res.text();
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [sessionId]);

  const handleDownloadPdf = async () => {
    if (!sessionId) return;
    setDownloading(true);

    try {
      const response = await fetch(getApiUrl(`/api/orders/download-pdf?session_id=${sessionId}`));
      if (!response.ok) {
        throw new Error('Impossible de récupérer le fichier PDF.');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Kit_Petite_Souris.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert('Erreur lors du téléchargement. Vérifiez vos e-mails, le kit y a également été envoyé !');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0d1b] text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#17142b] border border-amber-400/30 rounded-2xl p-8 text-center shadow-xl backdrop-blur-md">
        
        {loading ? (
          <div className="py-10 space-y-4">
            <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-amber-200 text-lg font-medium">Validation de votre commande magique...</p>
          </div>
        ) : error ? (
          <div className="space-y-4">
            <div className="text-4xl">⚠️</div>
            <h1 className="text-2xl font-bold text-red-400">Une erreur est survenue</h1>
            <p className="text-gray-300 text-sm">{error}</p>
            <Link
              to="/"
              className="inline-block mt-4 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition"
            >
              Retour à l'accueil
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-5xl animate-bounce">✨ 🐭 💌</div>
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-pink-400">
              Merci pour votre commande !
            </h1>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              La Petite Souris prépare soigneusement votre kit. Un e-mail contenant le coffret magique en pièce jointe vient de vous être envoyé.
            </p>

            <div className="bg-amber-400/10 border border-amber-400/20 rounded-xl p-4 text-xs text-amber-200 text-left space-y-1">
              <p>💡 <strong>Conseil :</strong> Pensez à vérifier vos courriers indésirables (spams) si vous ne trouvez pas l'e-mail.</p>
            </div>

            <div className="pt-2 space-y-3">
              <button
                onClick={handleDownloadPdf}
                disabled={downloading}
                className="w-full py-3.5 px-6 bg-linear-to-r from-amber-400 via-pink-500 to-purple-600 hover:opacity-90 text-white font-bold rounded-xl shadow-lg transition transform active:scale-95 disabled:opacity-50 cursor-pointer"
              >
                {downloading ? 'Chargement du PDF...' : 'Télécharger mon Kit PDF Directement 📄'}
              </button>

              <Link
                to="/"
                className="block text-xs text-slate-400 hover:text-white transition pt-2"
              >
                ← Retourner sur le site
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};