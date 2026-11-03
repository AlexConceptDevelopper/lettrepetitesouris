import { Link } from 'react-router-dom';
import type { ArticleData } from '../types/article';

export const article: ArticleData = {
  slug: 'ordre-chute-dents-de-lait-calendrier',
  title: 'L’ordre de chute des dents de lait : schéma et calendrier mois par mois',
  description: 'Quelles dents tombent en premier ? Retrouvez le calendrier détaillé et le schéma chronologique de la perte des 20 dents de lait chez l’enfant.',
  date: '2026-11-03',
  readTime: '5 min',
  category: 'Conseils Parents',
  image: '/images/ordreDents.jpg',
  keywords: ['ordre chute dents de lait', 'quelles dents tombent en premier calendrier', 'schema dents de lait age'],
  content: (
    <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed font-sans">
      
      {/* IMAGE D'ILLUSTRATION AVEC ALT OPTIMISÉ */}
      <div className="overflow-hidden rounded-2xl border border-amber-400/20 shadow-lg my-4">
        <img 
          src="/images/ordreDents.jpg" 
          alt="Schéma anatomique illustrant les différentes étapes de la chute des dents de lait chez l'enfant" 
          className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
        />
      </div>

      <p className="font-semibold text-slate-100 text-lg pt-2">
        La valse des dents de lait suit généralement une chorégraphie bien précise dans la bouche des enfants. Comprendre <em className="text-amber-200">l'ordre de chute</em> permet aux parents d'anticiper les prochaines visites de la Petite Souris et de repérer le bon développement de la mâchoire.
      </p>

      <h2 className="text-xl font-bold text-amber-300 pt-2 border-b border-slate-800 pb-2">
        1. Le grand départ : Les incisives centrales (6 - 7 ans)
      </h2>
      <p>
        Ce sont invariablement les pionnières ! Les deux incisives du bas tombent généralement en premier, suivies de très près par les deux incisives du haut. C'est le signal officiel du début de la grande aventure de la perte des dents. Pour situer ce premier cap par rapport aux autres, vous pouvez consulter notre article complet sur <Link to="/blog/a-quel-age-tombe-premiere-dent-de-lait" className="text-amber-300 underline hover:text-amber-200">l'âge de la première dent de lait</Link>.
      </p>

      <h2 className="text-xl font-bold text-amber-300 pt-2 border-b border-slate-800 pb-2">
        2. La suite du parcours : Incisives latérales et premières molaires (7 - 9 ans)
      </h2>
      <p>
        Viennent ensuite les incisives latérales (juste à côté des tout premiers repères). Entre 8 et 9 ans, ce sont généralement les premières molaires qui laissent leur place aux futures dents définitives.
      </p>

      <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
        <li><strong>Les canines :</strong> Tombent généralement entre 9 et 11 ans.</li>
        <li><strong>Les secondes molaires :</strong> Bouclent la marche vers l'âge de 10-12 ans.</li>
      </ul>

      <div className="bg-slate-900/90 border-l-4 border-pink-400 p-4 rounded-r-2xl my-4 text-xs md:text-sm">
        💡 <strong>À noter :</strong> Chaque enfant possède son propre rythme biologique. Un décalage de quelques mois (voire d'une petite année) est tout à fait normal et ne doit pas inquiéter les parents.
      </div>

      <h2 className="text-xl font-bold text-amber-300 pt-2 border-b border-slate-800 pb-2">
        3. Anticiper chaque passage avec magie
      </h2>
      <p>
        Que ce soit pour la toute première incisive ou pour la dernière molaire de fin de parcours, chaque perte de dent mérite d'être célébrée. Pensez à préparer vos <Link to="/" className="text-pink-300 underline hover:text-pink-200">enveloppes et certificats personnalisés</Link> à l'avance pour ne jamais vous retrouver pris au dépourvu au milieu de la nuit.
      </p>

      {/* CALL TO ACTION DANS L'ARTICLE OPTIMISÉ SEO */}
      <div className="my-8 p-6 bg-linear-to-r from-pink-950/60 via-slate-900 to-amber-950/60 border border-amber-400/30 rounded-3xl text-center space-y-4 shadow-2xl">
        <h3 className="text-lg font-black text-white">
          Chaque dent perdue est un événement magique unique ✨
        </h3>
        <p className="text-xs text-slate-300 max-w-md mx-auto">
          Accompagnez l'évolution de la dentition de votre enfant avec un kit complet de la Petite Souris sur-mesure.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3.5 bg-linear-to-r from-amber-400 via-pink-500 to-purple-600 text-slate-950 font-black rounded-xl text-xs uppercase shadow-md hover:opacity-95 transition tracking-wider"
        >
          Créer mon kit magique personnalisé (1,99 €) 🦷
        </Link>
      </div>
    </div>
  ),
};