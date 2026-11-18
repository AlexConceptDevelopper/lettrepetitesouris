// src/pages/articles/hygiene-dentaire-enfants-brossage.tsx
import { Link } from 'react-router-dom';
import type { ArticleData } from '../types/article';

export const article: ArticleData = {
  slug: 'hygiene-dentaire-enfants-brossage',
  title: 'Comment donner aux tout-petits l’envie de se brosser les dents en s’amusant ?',
  description: 'Le brossage des dents est une corvée quotidienne ? Découvrez notre guide de fond complet : astuces ludiques, rituels magiques et conseils d’experts pour les parents.',
  date: '2026-11-18',
  readTime: '7 min',
  category: 'Conseils Parents',
  image: '/images/hygieneBrossage.jpg',
  keywords: ['brossage de dents enfant ludique', 'donner envie brosser dents', 'hygiene dentaire tout petit', 'peur brosser les dents', 'carie dent de lait'],
  content: (
    <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed font-sans">
      
      {/* Image d'illustration principale */}
      <div className="overflow-hidden rounded-2xl border border-amber-400/20 shadow-lg my-4">
        <img 
          src="/images/hygieneBrossage.jpg" 
          alt="Un enfant qui se brosse les dents en s'amusant devant un miroir magique" 
          className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
        />
      </div>

      <p className="font-semibold text-slate-100 text-lg pt-2">
        C'est le rituel du soir redouté par de nombreux parents : l'interminable bataille pour faire passer la brosse à dents sur chaque petite dent de lait. Pourtant, instaurer de bonnes habitudes dès le plus jeune âge est le meilleur moyen de protéger leur sourire... et de préparer l'arrivée de la Petite Souris dans les meilleures conditions !
      </p>

      {/* SOMMAIRE (Indispensable pour l'expérience utilisateur et les extraits enrichis Google) */}
      <div className="bg-slate-900/80 border border-amber-400/30 p-6 rounded-2xl my-6">
        <h2 className="text-amber-300 font-bold text-base mb-3 uppercase tracking-wider">Sommaire de l'article</h2>
        <ul className="space-y-2 text-xs md:text-sm text-slate-300">
          <li><a href="#pourquoi-brossage" className="hover:text-amber-200 underline">1. Pourquoi le brossage des dents est un combat quotidien chez les tout-petits ?</a></li>
          <li><a href="#astuces-ludiques" className="hover:text-amber-200 underline">2. Transformer la brosse à dents en baguette magique : nos meilleures astuces</a></li>
          <li><a href="#lien-petite-souris" className="hover:text-amber-200 underline">3. Le secret ultime : lier le brossage au passage de la Petite Souris</a></li>
          <li><a href="#faq" className="hover:text-amber-200 underline">4. Foire Aux Questions (FAQ) des parents</a></li>
        </ul>
      </div>

      {/* SECTION 1 */}
      <h2 id="pourquoi-brossage" className="text-xl md:text-2xl font-bold text-amber-300 pt-6 border-b border-slate-800 pb-2">
        1. Pourquoi le brossage des dents est un combat quotidien chez les tout-petits ?
      </h2>
      <p>
        Vers l'âge de 2 ou 3 ans, l'enfant entre dans une phase d'affirmation de soi où chaque transition (le bain, le coucher, le brossage) peut devenir un terrain de négociation. Demander à un tout-petit de rester immobile pour frotter des zones inaccessibles avec un objet étranger dans la bouche va à l'encontre de son besoin de contrôle et de mouvement.
      </p>
      <p>
        De plus, les caries sur les dents de lait (ou "caries du biberon") peuvent survenir très tôt si l'hygiène n'est pas rigoureuse. Le défi des parents n'est donc pas seulement d'imposer une règle, mais de rendre ce moment désirable.
      </p>

      {/* PREMIER APPEL À L'ACHAT (Mi-parcours) */}
      <div className="my-8 p-6 bg-linear-to-r from-pink-950/60 via-slate-900 to-amber-950/60 border border-amber-400/30 rounded-3xl text-center space-y-3 shadow-xl">
        <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">Astuce magique 🪄</span>
        <h3 className="text-base font-black text-white">
          Félicitez ses efforts de brossage avec un certificat officiel !
        </h3>
        <p className="text-xs text-slate-300 max-w-md mx-auto">
          La Petite Souris remarque toujours les dents bien entretenues. Créez un kit personnalisé pour valoriser votre enfant.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-linear-to-r from-amber-400 via-pink-500 to-purple-600 text-slate-950 font-black rounded-xl text-xs uppercase shadow-md hover:opacity-95 transition tracking-wider"
        >
          Créer mon kit magique PDF (1,99 €) 🦷
        </Link>
      </div>

      {/* SECTION 2 */}
      <h2 id="astuces-ludiques" className="text-xl md:text-2xl font-bold text-amber-300 pt-6 border-b border-slate-800 pb-2">
        2. Transformer la brosse à dents en baguette magique : nos meilleures astuces
      </h2>
      <p>
        Pour désamorcer les crises, changeons d'approche. Voici des méthodes testées et approuvées par des milliers de parents :
      </p>
      <ul className="list-disc pl-6 space-y-2 text-slate-300">
        <li><strong>Le jeu des "monstres du sucre" :</strong> Expliquez à votre enfant que de petits monstres invisibles se cachent entre ses dents après le dîner et qu'il faut les chasser avec une brosse magique.</li>
        <li><strong>Le brossage en miroir :</strong> Laissez l'enfant se brosser vos dents ou brossez les siennes pendant qu'il s'occupe de sa propre peluche. L'imitation fait des miracles.</li>
        <li><strong>La chanson de 2 minutes :</strong> Utilisez un compte à rebours visuel ou une chanson rigolote dont la durée exacte correspond au temps de brossage recommandé.</li>
      </ul>

      {/* SECTION 3 */}
      <h2 id="lien-petite-souris" className="text-xl md:text-2xl font-bold text-amber-300 pt-6 border-b border-slate-800 pb-2">
        3. Le secret ultime : lier le brossage au passage de la Petite Souris
      </h2>
      <p>
        C'est là que la magie opère. Les enfants veulent tous que la Petite Souris leur rende visite. En lui expliquant que la gardienne des dents de lait inspecte minutieusement la propreté de chaque dent laissée sous l'oreiller, le brossage du soir prend soudainement une dimension stratégique majeure !
      </p>
      <p>
        Vous pouvez vous appuyer sur nos supports visuels et nos <Link to="/gratuit" className="text-amber-300 underline hover:text-amber-200">outils et imprimables gratuits</Link> pour matérialiser cet indice de propreté. Si vous souhaitez en savoir plus sur les alternatives aux pièces de monnaie, lisez notre article sur <Link to="/blog/que-mettre-sous-oreiller-a-part-argent" className="text-amber-300 underline hover:text-amber-200">ce que l'on peut glisser d'autre sous l'oreiller</Link>.
      </p>

      {/* SECTION FAQ (Indispensable pour le référencement Google & longue traîne) */}
      <h2 id="faq" className="text-xl md:text-2xl font-bold text-amber-300 pt-8 border-b border-slate-800 pb-2">
        4. Foire Aux Questions (FAQ) sur l'hygiène dentaire des tout-petits
      </h2>
      
      <div className="space-y-4 pt-2">
        <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
          <h3 className="font-bold text-amber-200 text-sm md:text-base mb-1">À quel âge faut-il commencer le brossage des dents ?</h3>
          <p className="text-xs md:text-sm text-slate-300">
            Dès l'apparition de la première dent de lait (vers 6 mois). Utilisez une brosse à dents souple adaptée à son âge avec une infime quantité de dentifrice fluoré (adapté aux nourrissons).
          </p>
        </div>

        <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
          <h3 className="font-bold text-amber-200 text-sm md:text-base mb-1">Combien de fois par jour faut-il se brosser les dents ?</h3>
          <p className="text-xs md:text-sm text-slate-300">
            Idéalement deux fois par jour (matin et soir). Le brossage du soir avant le coucher est le plus important, car la production de salive diminue pendant la nuit, favorisant le développement des bactéries.
          </p>
        </div>

        <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
          <h3 className="font-bold text-amber-200 text-sm md:text-base mb-1">Mon enfant refuse catégoriquement d'ouvrir la bouche, que faire ?</h3>
          <p className="text-xs md:text-sm text-slate-300">
            Ne rentrez pas dans un rapport de force en fin de soirée. Dédramatisez, transformez l'essai en jeu de chat et de souris, ou utilisez la carotte magique de la lettre de la Petite Souris pour le motiver en douceur.
          </p>
        </div>
      </div>

      {/* BLOC DE CONVERSION FINAL */}
      <div className="mt-12 p-8 bg-linear-to-r from-pink-950/60 via-slate-900 to-amber-950/60 border border-amber-400/30 rounded-3xl text-center space-y-4 shadow-2xl">
        <h3 className="text-lg font-black text-white">
          Prêt à transformer le prochain passage de la Petite Souris en moment magique ? ✨
        </h3>
        <p className="text-xs text-slate-300 max-w-md mx-auto">
          Offrez à votre enfant une lettre personnalisée sur-mesure, félicitant son courage et son hygiène irréprochable.
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