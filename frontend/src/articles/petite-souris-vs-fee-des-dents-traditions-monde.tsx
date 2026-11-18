// src/pages/articles/petite-souris-vs-fee-des-dents-traditions-monde.tsx
import { Link } from 'react-router-dom';
import type { ArticleData } from '../types/article';

export const article: ArticleData = {
  slug: 'petite-souris-vs-fee-des-dents-traditions-monde',
  title: 'Petite Souris ou Fée des Dents : comment ça se passe dans les autres pays ?',
  description: 'Découvrez les différences fascinantes entre notre Petite Souris française et la Tooth Fairy anglo-saxonne, ainsi que les traditions de perte des dents à travers le globe.',
  date: '2026-11-18',
  readTime: '6 min',
  category: 'Traditions & Magie',
  image: '/images/tourDuMondeDents.jpg',
  keywords: ['petite souris vs fee des dents', 'tooth fairy traditions monde', 'dent de lait pays etrangers', 'ratoncito perez'],
  content: (
    <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed font-sans">
      
      {/* Image d'illustration principale */}
      <div className="overflow-hidden rounded-2xl border border-amber-400/20 shadow-lg my-4">
        <img 
          src="/images/tourDuMondeDents.jpg" 
          alt="Illustration magique représentant la Petite Souris et la Fée des Dents voyageant à travers le monde" 
          className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
        />
      </div>

      <p className="font-semibold text-slate-100 text-lg pt-2">
        Quand une première dent de lait commence à vaciller, le réflexe chez nous est immédiat : on prépare l'oreiller pour accueillir la fameuse Petite Souris. Mais saviez-vous que selon l'endroit où l'on se trouve sur la planète, c'est un personnage totalement différent qui vient récupérer ce précieux petit trésor ? 
      </p>

      {/* SOMMAIRE */}
      <div className="bg-slate-900/80 border border-amber-400/30 p-6 rounded-2xl my-6">
        <h2 className="text-amber-300 font-bold text-base mb-3 uppercase tracking-wider">Sommaire de l'article</h2>
        <ul className="space-y-2 text-xs md:text-sm text-slate-300">
          <li><a href="#souris-vs-fee" className="hover:text-amber-200 underline">1. Le grand duel : La Petite Souris française contre la Tooth Fairy anglo-saxonne</a></li>
          <li><a href="#cousin-espagnol" className="hover:text-amber-200 underline">2. Le cousin hispanique : Ratoncito Pérez</a></li>
          <li><a href="#autres-traditions" className="hover:text-amber-200 underline">3. Quand on ne donne rien à personne : les traditions insolites dans le monde</a></li>
          <li><a href="#faq" className="hover:text-amber-200 underline">4. Foire Aux Questions (FAQ) internationale</a></li>
        </ul>
      </div>

      {/* SECTION 1 */}
      <h2 id="souris-vs-fee" className="text-xl md:text-2xl font-bold text-amber-300 pt-6 border-b border-slate-800 pb-2">
        1. Le grand duel : La Petite Souris française contre la Tooth Fairy anglo-saxonne
      </h2>
      <p>
        C'est la frontière culturelle la plus marquée en Occident. D'un côté, les pays francophones (France, Belgique, Suisse) et une grande partie de l'Europe du Sud ont jeté leur dévolu sur une rongeur nocturne : <strong>la Petite Souris</strong>.
      </p>
      <p>
        De l'autre côté de la Manche et de l'Atlantique, au Royaume-Uni, aux États-Unis, au Canada ou en Australie, c'est la <em>Tooth Fairy</em> (la Fée des Dents) qui règne en maître. Une petite fée gracieuse et ailée vient virevolter au-dessus du lit des enfants endormis pour échanger la dent contre une pièce.
      </p>
      <p>
        Pourquoi ce choix d'un animal chez nous ? Il est historiquement lié au folklore européen où l'on prêtait aux rongeurs une force et une robustesse dentaire exceptionnelle, que l'enfant espérait s'approprier.
      </p>

      {/* APPEL À L'ACHAT (Mi-parcours) */}
      <div className="my-8 p-6 bg-linear-to-r from-pink-950/60 via-slate-900 to-amber-950/60 border border-amber-400/30 rounded-3xl text-center space-y-3 shadow-xl">
        <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">Magie sur-mesure 🪄</span>
        <h3 className="text-base font-black text-white">
          Peu importe qui passe, offrez une vraie lettre officielle !
        </h3>
        <p className="text-xs text-slate-300 max-w-md mx-auto">
          Félicitez votre enfant avec un certificat magique personnalisé et signé de la main de la gardienne des dents de lait.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-linear-to-r from-amber-400 via-pink-500 to-purple-600 text-slate-950 font-black rounded-xl text-xs uppercase shadow-md hover:opacity-95 transition tracking-wider"
        >
          Créer mon kit magique PDF (1,99 €) 🦷
        </Link>
      </div>

      {/* SECTION 2 */}
      <h2 id="cousin-espagnol" className="text-xl md:text-2xl font-bold text-amber-300 pt-6 border-b border-slate-800 pb-2">
        2. Le cousin hispanique : Ratoncito Pérez
      </h2>
      <p>
        En Espagne, en Amérique latine et dans d'autres cultures hispanophones, la souris est également à l'honneur, mais elle a un nom bien à elle : <strong>El Ratón Pérez</strong> (ou Ratoncito Pérez). 
      </p>
      <p>
        Né à la fin du XIXe siècle sous la plume d'un auteur espagnol pour un petit prince, il est devenu une véritable institution. Il a même sa propre maison-musée officielle à Madrid ! Contrairement à notre Petite Souris française qui agit parfois dans l'ombre, Ratoncito Pérez est une véritable star nationale adorée des écoliers espagnols.
      </p>

      {/* SECTION 3 */}
      <h2 id="autres-traditions" className="text-xl md:text-2xl font-bold text-amber-300 pt-6 border-b border-slate-800 pb-2">
        3. Quand on ne donne rien à personne : les traditions insolites dans le monde
      </h2>
      <p>
        Dans certaines régions du globe, on ne glisse pas de pièce sous l'oreiller et on ne confie pas sa dent à un personnage magique. Le rituel prend une forme complètement différente :
      </p>
      <ul className="list-disc pl-6 space-y-2 text-slate-300">
        <li><strong>Au Japon et en Corée du Sud :</strong> Si l'enfant perd une dent du bas, il la jette vers le toit de la maison. Si c'est une dent du haut, il la jette vers le sol (ou sous le plancher). Le but ? S'assurer que la nouvelle dent permanente poussera bien droite dans la bonne direction.</li>
        <li><strong>Dans les pays du Moyen-Orient :</strong> Il est fréquent de lancer la dent de lait en direction du soleil en formulant un vœu ou en demandant au soleil de l'échanger contre une dent plus forte et lumineuse.</li>
      </ul>
      <p>
        Envie d'explorer d'autres alternatives originales au-delà des traditions géographiques ? Jetez un œil à notre article sur <Link to="/blog/que-mettre-sous-oreiller-a-part-argent" className="text-amber-300 underline hover:text-amber-200">ce que l'on peut glisser d'autre sous l'oreiller</Link>.
      </p>

      {/* SECTION FAQ */}
      <h2 id="faq" className="text-xl md:text-2xl font-bold text-amber-300 pt-8 border-b border-slate-800 pb-2">
        4. Foire Aux Questions (FAQ) internationale
      </h2>
      
      <div className="space-y-4 pt-2">
        <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
          <h3 className="font-bold text-amber-200 text-sm md:text-base mb-1">Est-ce que la Fée des Dents existe aussi en France ?</h3>
          <p className="text-xs md:text-sm text-slate-300">
            La culture populaire française reste très attachée à la Petite Souris. Toutefois, sous l'influence des films et des séries anglophones, les enfants français connaissent très bien la Tooth Fairy, même si c'est bien notre rongeur national qui dépose les surprises sous l'oreiller.
          </p>
        </div>

        <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
          <h3 className="font-bold text-amber-200 text-sm md:text-base mb-1">Depuis quand la Petite Souris existe-t-elle en France ?</h3>
          <p className="text-xs md:text-sm text-slate-300">
            Ses origines littéraires remontent à un conte de fées français du XVIIe siècle écrit par Madame d'Aulnoy, intitulé "La Bonne Petite Souris". Pour en savoir plus, consultez notre article dédié sur <Link to="/blog/histoire-et-origine-tradition-petite-souris" className="text-amber-200 underline">l'histoire et l'origine de la tradition</Link>.
          </p>
        </div>

        <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
          <h3 className="font-bold text-amber-200 text-sm md:text-base mb-1">Que font les enfants qui déménagent à l'étranger ?</h3>
          <p className="text-xs md:text-sm text-slate-300">
            C'est souvent l'occasion d'expliquer que la magie s'adapte aux frontières : la Petite Souris voyage dans le monde entier, mais elle prend parfois l'apparence d'une fée selon les coutumes locales !
          </p>
        </div>
      </div>

      {/* BLOC DE CONVERSION FINAL */}
      <div className="mt-12 p-8 bg-linear-to-r from-pink-950/60 via-slate-900 to-amber-950/60 border border-amber-400/30 rounded-3xl text-center space-y-4 shadow-2xl">
        <h3 className="text-lg font-black text-white">
          Faites voyager la magie jusque sous l'oreiller de votre enfant ✨
        </h3>
        <p className="text-xs text-slate-300 max-w-md mx-auto">
          Commandez votre kit personnalisé et créez un souvenir inoubliable pour immortaliser la perte de ses dents de lait.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-linear-to-r from-amber-400 via-pink-500 to-purple-600 text-slate-950 font-black rounded-xl text-xs uppercase shadow-md hover:opacity-95 transition tracking-wider"
        >
          Créer mon kit magique PDF (1,99 €) 🦷
        </Link>
      </div>

    </div>
  ),
};