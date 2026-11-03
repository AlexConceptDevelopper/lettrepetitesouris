import { Link } from 'react-router-dom';
import type { ArticleData } from '../types/article';

export const article: ArticleData = {
  slug: 'combien-donner-petite-souris-oreiller',
  title: 'Combien donner sous l’oreiller ? Le guide des tarifs de la Petite Souris',
  description: 'Quelle somme d’argent laisser sous l’oreiller lors de la perte d’une dent de lait ? Montants habituels, astuces et alternatives magiques.',
  date: '2026-10-20',
  readTime: '4 min',
  category: 'Conseils Parents',
  image: '/images/combienDonner.jpg',
  keywords: ['combien donner petite souris', 'tarif petite souris dent de lait', 'piece sous oreiller', 'montant dent de lait'],
  content: (
    <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed font-sans">
      
      <div className="overflow-hidden rounded-2xl border border-amber-400/20 shadow-lg my-4">
        <img 
          src="/images/combienDonner.jpg" 
          alt="Une pièce de monnaie et une enveloppe magique de la Petite Souris sous l'oreiller" 
          className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-500"
        />
      </div>

      <p className="font-semibold text-slate-100 text-lg pt-2">
        C'est la grande question existentielle qui se pose à chaque 4h du matin dans la chambre des parents : <em className="text-amber-200">« Dis chéri, on lui met combien sous l'oreiller ? »</em>. Entre l'inflation de la Petite Souris et les traditions de chacun, voici un petit tour d'horizon des usages.
      </p>

      <h2 className="text-xl font-bold text-amber-300 pt-2 border-b border-slate-800 pb-2">
        1. Les tarifs constatés en pratique
      </h2>
      <p>
        Les montants varient généralement selon l'âge de l'enfant (souvent repérable grâce au <Link to="/blog/ordre-chute-dents-de-lait-calendrier" className="text-amber-300 underline hover:text-amber-200">calendrier de l'ordre de chute des dents</Link>), le rang de la dent et les habitudes de la famille :
      </p>

      <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
        <li><strong>Pour la toute première dent :</strong> C'est souvent l'occasion d'être plus généreux, avec une pièce de <strong>2 € ou un petit billet de 5 €</strong> magique. Pour savoir quand situer cet événement, consultez notre article sur <Link to="/blog/quand-tombe-premiere-dent-lait" className="text-amber-300 underline hover:text-amber-200">l'âge de la première dent de lait</Link>.</li>
        <li><strong>Pour les dents suivantes :</strong> Le tarif standard tourne généralement autour de <strong>1 € ou 2 €</strong> par dent.</li>
        <li><strong>La "Dent du Milieu" ou des grands :</strong> Vers 9-10 ans, pour les dernières molaires, certains parents glissent parfois un billet de 5 €.</li>
      </ul>

      <div className="bg-slate-900/90 border-l-4 border-pink-400 p-4 rounded-r-2xl my-4 text-xs md:text-sm">
        💡 <strong>Le saviez-vous ?</strong> Ce n'est pas forcément la valeur de la pièce qui compte pour l'enfant, mais bien <strong>la surprise et la preuve magique</strong> que la Petite Souris est passée dans sa chambre sans le réveiller !
      </div>

      <h2 className="text-xl font-bold text-amber-300 pt-2 border-b border-slate-800 pb-2">
        2. Et si on n'a pas de monnaie ou qu'on cherche autre chose ?
      </h2>
      <p>
        Panique à 23h : impossible de mettre la main sur une pièce de monnaie ! Pas de panique, vous pouvez vous tourner vers des <Link to="/blog/que-mettre-sous-oreiller-a-part-argent" className="text-amber-300 underline hover:text-amber-200">alternatives originales à l'argent sous l'oreiller</Link>. Vous pouvez par exemple compenser en misant à fond sur l'imaginaire : une jolie lettre personnalisée signée de sa main ou un certificat officiel. Et si jamais un matin la souris a le malheur d'oublier son passage, découvrez nos conseils pour savoir <Link to="/blog/petite-souris-a-oublie-passer-que-faire" className="text-amber-300 underline hover:text-amber-200">que faire si la Petite Souris a oublié de passer</Link>.
      </p>

      <h2 className="text-xl font-bold text-amber-300 pt-2 border-b border-slate-800 pb-2">
        3. Associer l'argent à un mot personnalisé
      </h2>
      <p>
        Laisser uniquement une pièce peut parfois paraître un peu impersonnel. En l'accompagnant d'un petit mot féerique qui félicite l'enfant pour son brossage de dents, vous transformez un simple échange monétaire en un souvenir impérissable (n'hésitez pas à jeter un œil à nos <Link to="/gratuit" className="text-amber-300 underline hover:text-amber-200">ressources gratuites à imprimer</Link>).
      </p>

      <div className="my-8 p-6 bg-linear-to-r from-pink-950/60 via-slate-900 to-amber-950/60 border border-amber-400/30 rounded-3xl text-center space-y-4 shadow-2xl">
        <h3 className="text-lg font-black text-white">
          Accompagnez la pièce d'une véritable Lettre de la Petite Souris ✨
        </h3>
        <p className="text-xs text-slate-300 max-w-md mx-auto">
          Pour seulement 1,99 €, créez un kit magique personnalisé au prénom de votre enfant : certificat officiel, lettre sur-mesure et enveloppe à plier.
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