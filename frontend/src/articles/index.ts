import { article as dentDeLait } from './quand-tombe-premiere-dent-lait';
import type { ArticleData } from '../types/article';

export const articles: ArticleData[] = [
  dentDeLait,
  // Tu pourras ajouter tes futurs articles ici
];

export const getArticleBySlug = (slug: string): ArticleData | undefined => {
  return articles.find((art) => art.slug === slug);
};