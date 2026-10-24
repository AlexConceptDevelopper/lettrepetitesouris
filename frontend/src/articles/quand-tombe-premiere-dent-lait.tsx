import { Link } from 'react-router-dom';
import type { ArticleData } from '../types/article';

export const article: ArticleData = {
  slug: 'quand-tombe-premiere-dent-lait',
  title: 'À quel âge tombe la première dent de lait ? Le guide complet des parents',
  description: 'Calendrier habituel de la perte des dents de lait : âge, ordre de chute des dents et conseils pour préparer la lettre de la Petite Souris.',
  date: '2026-10-15',
  readTime: '4 min',
  category: 'Conseils Parents',
  image: '/images/premiere-dent.jpg',
  keywords: ['dent de lait', 'premiere dent', 'petite souris', 'âge dent de lait', 'lettre petite souris a imprimer'],
  content: (
    <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed font-sans">
      
      {/* IMAGE D'ILLUSTRATION AVEC ALT OPTIMISÉ */}
      <div className="overflow-hidden rounded-2xl border border-amber-400/20 shadow-lg my-4">
        <img 
          src="/images/premiere-dent.jpg" 
          alt="Enfant qui montre sa première dent de lait tombée et attend la Petite Souris" 
          className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
        />
      </div>

      <p className="font-semibold text-slate-100 text-lg pt-2">
        La perte de la toute première dent de lait est un événement majeur dans la vie d'un enfant (et pour ses parents !). C'est le signal que votre petit grandit, mais c'est aussi le début d'une grande aventure féerique avec la venue de la Petite Souris.
      </p>

      <h2 className="text-xl font-bold text-amber-300 pt-2 border-b border-slate-800 pb-2">
        1. L'âge moyen de la première dent bougeuse
      </h2>
      <p>
        En général, la première dent de lait tombe aux alentours de <strong>5 à 6 ans</strong>. Cependant, il n'y a pas de règle stricte : chez certains enfants, cela arrive dès 4 ans, tandis que chez d'autres, cela se produit plutôt vers 7 ans. 
      </p>

      <div className="bg-slate-900/90 border-l-4 border-pink-400 p-4 rounded-r-2xl my-4 text-xs md:text-sm">
        💡 <strong>Bon à savoir :</strong> En règle générale, les dents tombent dans le même ordre qu'elles sont apparues. Ce sont donc presque toujours les <strong>incisives centrales du bas</strong> qui bougent en premier !
      </div>

      <h2 className="text-xl font-bold text-amber-300 pt-2 border-b border-slate-800 pb-2">
        2. Que faire quand la dent commence à bouger ?
      </h2>
      <p>
        Le plus important est de laisser faire la nature. Encouragez votre enfant à faire bouger doucement sa dent avec sa langue ou ses doigts (mains bien lavées !), mais n'essayez jamais de la forcer.
      </p>

      <h2 className="text-xl font-bold text-amber-300 pt-2 border-b border-slate-800 pb-2">
        3. Préparer la venue magique de la Petite Souris
      </h2>
      <p>
        Une fois la dent tombée, la magie prend le relais ! Pour féliciter votre enfant pour son courage, la tradition veut que la dent soit glissée sous l'oreiller avant de s'endormir pour laisser place à une petite pièce et à une <strong>lettre personnalisée de la Petite Souris</strong>.
      </p>

      {/* CALL TO ACTION DANS L'ARTICLE OPTIMISÉ SEO */}
      <div className="my-8 p-6 bg-linear-to-r from-pink-950/60 via-slate-900 to-amber-950/60 border border-amber-400/30 rounded-3xl text-center space-y-4 shadow-2xl">
        <h3 className="text-lg font-black text-white">
          Téléchargez votre Lettre de la Petite Souris à Imprimer en PDF ✨
        </h3>
        <p className="text-xs text-slate-300 max-w-md mx-auto">
          Générez en 1 minute le kit complet : certificat officiel de dent de lait, lettre magique adressée prénom par prénom et l'enveloppe à plier.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3.5 bg-linear-to-r from-amber-400 via-pink-500 to-purple-600 text-slate-950 font-black rounded-xl text-xs uppercase shadow-md hover:opacity-95 transition tracking-wider"
        >
          Créer mon Kit Lettre Petite Souris PDF (1,99 €) 🦷
        </Link>
      </div>
    </div>
  ),
};