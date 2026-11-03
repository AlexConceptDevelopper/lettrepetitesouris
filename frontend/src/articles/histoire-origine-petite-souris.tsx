import { Link } from 'react-router-dom';
import type { ArticleData } from '../types/article';

export const article: ArticleData = {
  slug: 'histoire-et-origine-tradition-petite-souris',
  title: 'Quelle est l’histoire de la Petite Souris ? D’où vient cette tradition ?',
  description: 'Plongez dans les origines fascinantes du conte de la Petite Souris et découvrez comment ce rituel magique s’est invité sous les oreillers du monde entier.',
  date: '2026-11-03',
  readTime: '5 min',
  category: 'Conseils Parents',
  image: '/images/histoireSouris.jpg',
  keywords: ['origine petite souris dent de lait', 'histoire de la petite souris conte', 'd\'où vient la tradition de la petite souris'],
  content: (
    <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed font-sans">
      
      {/* IMAGE D'ILLUSTRATION AVEC ALT OPTIMISÉ */}
      <div className="overflow-hidden rounded-2xl border border-amber-400/20 shadow-lg my-4">
        <img 
          src="/images/histoireSouris.jpg" 
          alt="Illustration ancienne d'un conte de fées avec une petite souris magique veillant sur un enfant" 
          className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
        />
      </div>

      <p className="font-semibold text-slate-100 text-lg pt-2">
        Chaque nuit, des millions d'enfants glissent leur petite dent sous l'oreiller en espérant croiser le chemin de la mystérieuse <em className="text-amber-200">Petite Souris</em>. Mais saviez-vous que cette tradition féerique plonge ses racines dans un conte français du XVIIe siècle ?
      </p>

      <h2 className="text-xl font-bold text-amber-300 pt-2 border-b border-slate-800 pb-2">
        1. Le conte fondateur de Madame d'Aulnoy (1697)
      </h2>
      <p>
        Contrairement à ce que l'on pourrait penser, la Petite Souris ne date pas d'hier. Son histoire officielle est née sous la plume de la baronne d'Aulnoy dans son conte merveilleux intitulé <em>« La Bonne Petite Souris »</em>. 
      </p>
      <p>
        Dans cette histoire, une reine est emprisonnée par un méchant roi. Une fée se métamorphose en une petite souris rusée pour se glisser sous l'oreiller du monarque, lui faire mordre la joue et le punir, libérant ainsi la reine. La souris agile réussissait à se faufiler partout grâce à sa petite taille.
      </p>

      <h2 className="text-xl font-bold text-amber-300 pt-2 border-b border-slate-800 pb-2">
        2. De la ruse de conte de fées au rituel moderne
      </h2>
      <p>
        Au fil des siècles, le conte s'est transformé pour fusionner avec d'anciennes traditions européennes (où l'on enfouissait les dents de lait dans la terre pour s'assurer que les dents d'adulte poussent bien). La souris symbolisait à la fois la discrétion, la rapidité et la vitalité — des qualités que l'on souhaitait transmettre aux nouvelles dents de l'enfant. 
      </p>
      <p>
        Pour en savoir plus sur les aspects pratiques et les montants que l'on glisse traditionnellement en contrepartie, n'hésitez pas à parcourir notre guide sur <Link to="/blog/combien-donner-petite-souris-oreiller" className="text-amber-300 underline hover:text-amber-200">les tarifs habituels de la Petite Souris</Link>.
      </p>

      <div className="bg-slate-900/90 border-l-4 border-pink-400 p-4 rounded-r-2xl my-4 text-xs md:text-sm">
        🌍 <strong>Le saviez-vous ?</strong> Dans les pays anglo-saxons, c’est la <em>Tooth Fairy</em> (la Fée des Dents) qui rend visite aux enfants, tandis qu'en Espagne et en Amérique latine, c'est un petit rat nommé <em>Ratoncito Pérez</em> !
      </div>

      <h2 className="text-xl font-bold text-amber-300 pt-2 border-b border-slate-800 pb-2">
        3. Faire vivre la légende aujourd'hui
      </h2>
      <p>
        Aujourd'hui, perpétuer cette magnifique légende demande un brin d'organisation pour les parents. Entre la récupération de la dent au milieu de la nuit et le dépôt de la surprise, l'utilisation de <Link to="/" className="text-pink-300 underline hover:text-pink-200">kits prêts-à-imprimer</Link> permet de donner corps à ce conte séculaire de la plus belle des manières.
      </p>

      {/* CALL TO ACTION DANS L'ARTICLE OPTIMISÉ SEO */}
      <div className="my-8 p-6 bg-linear-to-r from-pink-950/60 via-slate-900 to-amber-950/60 border border-amber-400/30 rounded-3xl text-center space-y-4 shadow-2xl">
        <h3 className="text-lg font-black text-white">
          Faites entrer la magie du conte dans votre foyer ✨
        </h3>
        <p className="text-xs text-slate-300 max-w-md mx-auto">
          Offrez à votre enfant un certificat officiel et une lettre authentique signée de la patte de la Petite Souris.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3.5 bg-linear-to-r from-amber-400 via-pink-500 to-purple-600 text-slate-950 font-black rounded-xl text-xs uppercase shadow-md hover:opacity-95 transition tracking-wider"
        >
          Créer un kit magique personnalisé 🦷
        </Link>
      </div>
    </div>
  ),
};