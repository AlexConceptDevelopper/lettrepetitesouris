import React, { useState } from 'react';
import type { DocumentData } from '../types/document';

interface AkinatorQuizProps {
  onComplete: (data: Partial<DocumentData>) => void;
}

export const AkinatorQuiz: React.FC<AkinatorQuizProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [age, setAge] = useState(6);
  const [gender, setGender] = useState<'M' | 'F'>('F');
  const [city, setCity] = useState('');
  
  const [toothType, setToothType] = useState('Incisive');
  const [toothPosition, setToothPosition] = useState('Haut - Devant');
  const [giftType, setGiftType] = useState('Pièce de 2 €');

  const handleFinish = () => {
    const childName = name || 'Léna';
    const childAge = Number(age) || 6;
    const childCity = city || 'Paris';

    const cherForm = gender === 'F' ? 'Ma chère' : 'Mon cher';
    const generatedCustomMessage = `${cherForm} ${childName},\n\n`
      + `Je suis bien passée cette nuit pendant que tu dormais profondément à ${childCity} ! `
      + `J'ai récupéré ta jolie dent (${toothType.toLowerCase()}) sous ton oreiller. `
      + `Quelle belle dent de lait bien entretenue ! En échange, je t'ai laissé une petite surprise : ${giftType}.\n\n`
      + `Continue de bien te brosser les dents matin et soir pour garder un sourire éclatant !`;

    onComplete({
      childName,
      childAge,
      toothType,
      toothPosition,
      giftType,
      customMessage: generatedCustomMessage,
    });
  };

  return (
    <div className="bg-white/90 border-2 border-pink-200 p-8 rounded-3xl shadow-xl backdrop-blur-md text-slate-800 max-w-xl mx-auto my-8 font-sans">
      
      {/* ÉTAPE 1 : L'enfant */}
      {step === 1 && (
        <div className="space-y-5 text-center">
          <div className="inline-block p-3 bg-pink-100 rounded-full text-2xl shadow-inner">🐭✨</div>
          <h2 className="text-2xl font-extrabold text-pink-600">Le Carnet Secret de la Petite Souris</h2>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Dis-moi tout sur le petit propriétaire de cette dent magique !
          </p>

          <div className="space-y-4 text-left pt-2">
            <div>
              <label className="block text-xs uppercase font-bold text-slate-600 mb-1">Prénom de l'enfant</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Léna"
                className="w-full bg-pink-50/50 border border-pink-200 rounded-2xl p-3 text-sm text-slate-800 focus:ring-2 focus:ring-pink-300 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-bold text-slate-600 mb-1">C'est un(e)</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGender('F')}
                  className={`py-3 rounded-2xl text-xs font-bold border transition-all cursor-pointer ${
                    gender === 'F'
                      ? 'bg-pink-100 border-pink-400 text-pink-700 shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-pink-50/50'
                  }`}
                >
                  👧 Une Fille
                </button>
                <button
                  type="button"
                  onClick={() => setGender('M')}
                  className={`py-3 rounded-2xl text-xs font-bold border transition-all cursor-pointer ${
                    gender === 'M'
                      ? 'bg-sky-100 border-sky-400 text-sky-700 shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-sky-50/50'
                  }`}
                >
                  👦 Un Garçon
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase font-bold text-slate-600 mb-1">Âge</label>
                <input
                  type="number"
                  min={1}
                  max={15}
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full bg-pink-50/50 border border-pink-200 rounded-2xl p-3 text-sm text-slate-800 focus:ring-2 focus:ring-pink-300 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-bold text-slate-600 mb-1">Ville</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Ex: Paris"
                  className="w-full bg-pink-50/50 border border-pink-200 rounded-2xl p-3 text-sm text-slate-800 focus:ring-2 focus:ring-pink-300 outline-none transition"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setStep(2)}
            className="w-full py-4 bg-linear-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 text-sm uppercase tracking-wider cursor-pointer mt-2"
          >
            La dent tombée ➔
          </button>
        </div>
      )}

      {/* ÉTAPE 2 : La Dent */}
      {step === 2 && (
        <div className="space-y-5 text-center">
          <div className="inline-block p-3 bg-purple-100 rounded-full text-2xl shadow-inner">🦷🔍</div>
          <h2 className="text-2xl font-extrabold text-purple-700">Où était cachée la dent ?</h2>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Aidez la Petite Souris à enregistrer précisément la dent de lait récoltée.
          </p>

          <div className="space-y-4 text-left pt-2">
            <div>
              <label className="block text-xs uppercase font-bold text-slate-600 mb-1">Type de dent</label>
              <div className="grid grid-cols-2 gap-2">
                {["Incisive", "Canine", "Molaire", "Première dent !"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setToothType(item)}
                    className={`p-3 rounded-2xl border text-center text-xs font-bold transition-all cursor-pointer ${
                      toothType === item
                        ? "bg-purple-100 border-purple-400 text-purple-800 shadow-sm"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-purple-50"
                    }`}
                  >
                    🦷 {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-bold text-slate-600 mb-1">Emplacement</label>
              <div className="grid grid-cols-2 gap-2">
                {["Haut - Devant", "Bas - Devant", "Haut - Côté", "Bas - Côté"].map((pos) => (
                  <button
                    key={pos}
                    type="button"
                    onClick={() => setToothPosition(pos)}
                    className={`p-3 rounded-2xl border text-center text-xs font-bold transition-all cursor-pointer ${
                      toothPosition === pos
                        ? "bg-purple-100 border-purple-400 text-purple-800 shadow-sm"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-purple-50"
                    }`}
                  >
                    📍 {pos}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setStep(3)}
            className="w-full py-4 bg-linear-to-r from-purple-400 to-indigo-400 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 text-sm uppercase tracking-wider cursor-pointer mt-2"
          >
            La pièce déposée ➔
          </button>
        </div>
      )}

      {/* ÉTAPE 3 : Le cadeau */}
      {step === 3 && (
        <div className="space-y-5 text-center">
          <div className="inline-block p-3 bg-amber-100 rounded-full text-2xl shadow-inner">🪙🎁</div>
          <h2 className="text-2xl font-extrabold text-amber-600">Le trésor glissé sous l'oreiller</h2>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Qu'est-ce que la Petite Souris a laissé en échange ?
          </p>

          <div className="space-y-2.5 text-left pt-2">
            {["Pièce de 2 €", "Billet de 5 €", "Un petit cadeau magique", "Un livre de contes"].map((gift) => (
              <button
                key={gift}
                type="button"
                onClick={() => setGiftType(gift)}
                className={`w-full p-3.5 rounded-2xl border text-left text-xs font-bold transition-all cursor-pointer ${
                  giftType === gift
                    ? "bg-amber-100 border-amber-400 text-amber-800 shadow-sm"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-amber-50"
                }`}
              >
                ✨ {gift}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleFinish}
            className="w-full py-4 bg-linear-to-r from-pink-400 via-purple-400 to-amber-400 hover:opacity-90 text-white font-extrabold rounded-2xl shadow-xl transition transform hover:scale-[1.01] text-sm uppercase tracking-wider cursor-pointer mt-2"
          >
            🌸 Créer mon Kit Magique 🌸
          </button>
        </div>
      )}

    </div>
  );
};