import { article as dentDeLait } from './quand-tombe-premiere-dent-lait';
import { article as combienDonner } from './combien-donner-petite-souris-oreiller';
import { article as peurDent } from './peur-dent-qui-bouge-enfant';
import { article as histoireSouris } from './histoire-origine-petite-souris';
import { article as alternativesArgent } from './alternatives-argent-sous-oreiller';
import { article as oubliSouris } from './petite-souris-a-oublie-passer';
import { article as ordreDents } from './ordre-chute-dents-de-lait';
import { article as hygieneDentaire } from './hygiene-dentaire-enfants-brossage';
import { article as petitesSourisVsFeedesDents } from './petite-souris-vs-fee-des-dents-traditions-monde';
import type { ArticleData } from '../types/article';

export const articles: ArticleData[] = [
  dentDeLait,
  combienDonner,
  peurDent,
  histoireSouris,
  alternativesArgent,
  oubliSouris,
  ordreDents,
  hygieneDentaire,
  petitesSourisVsFeedesDents,
];

export const getArticleBySlug = (slug: string): ArticleData | undefined => {
  return articles.find((art) => art.slug === slug);
};