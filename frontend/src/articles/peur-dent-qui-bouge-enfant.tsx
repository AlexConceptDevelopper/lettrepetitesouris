import { Link } from 'react-router-dom';
import type { ArticleData } from '../types/article';

export const article: ArticleData = {
  slug: 'comment-aider-enfant-peur-dent-qui-bouge',
  title: 'Comment aider un enfant qui a peur d’arracher sa dent qui bouge ?',
  description: 'Votre enfant stresse à l’idée de perdre sa dent de lait ? Découvrez nos astuces douces et psychologiques pour transformer cette appréhension en un moment magique.',
  date: '2026-11-03',
  readTime: '4 min',
  category: 'Conseils Parents',
  image: '/images/peurDent.jpg',
  keywords: ['peur dent qui bouge enfant', 'arracher dent de lait panique', 'comment enlever dent de lait sans douleur'],
  content: (
    <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed font-sans">
      
      <div className="overflow-hidden rounded-2xl border border-amber-400/20 shadow-lg my-4">
        <img 
          src="/images/peurDent.jpg" 
          alt="Un enfant rassuré par ses parents au moment de perdre sa première dent de lait" 
          className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
        />
      </div>

      <p className="font-semibold text-slate-100 text-lg pt-2">
        C'est un grand classique dans la vie d'un enfant : la toute première dent qui se met à osciller. Si certains accueillent l'événement avec un enthousiasme débordant, d'autres développent une véritable <em className="text-amber-200">angoisse à l'idée de la douleur</em> ou du sang.
      </p>

      <h2 className="text-xl font-bold text-amber-300 pt-2 border-b border-slate-800 pb-2">
        1. Dédramatiser et changer de regard sur la douleur
      </h2>
      <p>
        Pour un enfant, une dent qui bouge est souvent perçue comme une perte de contrôle de son propre corps. Expliquez-lui que c’est un signe formidable : cela prouve qu'il grandit (vous pouvez jeter un œil à notre article sur <Link to="/blog/ordre-chute-dents-de-lait-calendrier" className="text-amber-300 underline hover:text-amber-200">l'ordre de chute des dents de lait</Link> pour lui montrer comment se déroule la suite) et que ses dents de "grands" s'impatientent de prendre la relève.
      </p>

      <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
        <li><strong>Évitez de brusquer :</strong> Sauf si la dent gêne considérablement pour manger, laissez l'enfant jouer avec sa langue. C'est lui qui doit idéalement amorcer le mouvement final.</li>
        <li><strong>Valoriser le courage :</strong> Expliquez que chaque dent perdue est un petit trophée de bravoure qui mérite la visite de la Petite Souris.</li>
      </ul>

      <div className="bg-slate-900/90 border-l-4 border-pink-400 p-4 rounded-r-2xl my-4 text-xs md:text-sm">
        💡 <strong>Astuce douce :</strong> Pour l'aider à oser faire le dernier petit tour de rotation, proposez-lui de mordre dans un aliment un peu ferme (comme une pomme ou du pain croustillant) plutôt que d'utiliser la méthode brusque du fil et de la porte !
      </div>

      <h2 className="text-xl font-bold text-amber-300 pt-2 border-b border-slate-800 pb-2">
        2. Rendre l'événement ludique grâce à la magie
      </h2>
      <p>
        Rien de tel que de projeter son imagination vers l'après. Lorsque l'enfant réalise que la perte de la dent déclenche l'arrivée d'une lettre personnalisée ou d'une surprise sous l'oreiller, la peur laisse instantanément place à l'excitation. Pour approfondir le sujet de l'âge des chutes, vous pouvez consulter notre <Link to="/blog/quand-tombe-premiere-dent-lait" className="text-amber-300 underline hover:text-amber-200">guide complet sur l'âge de la première dent de lait</Link>.
      </p>

      <h2 className="text-xl font-bold text-amber-300 pt-2 border-b border-slate-800 pb-2">
        3. Préparer le terrain avant le coucher
      </h2>
      <p>
        Si la dent tombe en fin de journée, c'est le moment idéal pour canaliser l'énergie de votre enfant. Proposez-lui de préparer son set de nuit, de ranger précieusement sa petite dent dans une belle <Link to="/gratuit" className="text-pink-300 underline hover:text-pink-200">enveloppe magique gratuite</Link> et d'attendre la venue de la Petite Souris l'esprit serein.
      </p>

      <div className="my-8 p-6 bg-linear-to-r from-pink-950/60 via-slate-900 to-amber-950/60 border border-amber-400/30 rounded-3xl text-center space-y-4 shadow-2xl">
        <h3 className="text-lg font-black text-white">
          Transformez sa peur en un merveilleux souvenir ✨
        </h3>
        <p className="text-xs text-slate-300 max-w-md mx-auto">
          Félicitez son courage avec une lettre personnalisée de la Petite Souris mentionnant son nom et sa bravoure.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3.5 bg-linear-to-r from-amber-400 via-pink-500 to-purple-600 text-slate-950 font-black rounded-xl text-xs uppercase shadow-md hover:opacity-95 transition tracking-wider"
        >
          Créer un kit de félicitations magique 🦷
        </Link>
      </div>
    </div>
  ),
};