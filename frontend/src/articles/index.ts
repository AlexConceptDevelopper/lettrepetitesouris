import { article as dentDeLait } from './quand-tombe-premiere-dent-lait';
import { article as combienDonner } from './combien-donner-petite-souris-oreiller';
import type { ArticleData } from '../types/article';

export const articles: ArticleData[] = [
  dentDeLait,
  combienDonner
];

export const getArticleBySlug = (slug: string): ArticleData | undefined => {
  return articles.find((art) => art.slug === slug);
};