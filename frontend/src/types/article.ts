import React from 'react';

export interface ArticleData {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  keywords?: string[];
  content: React.ReactNode;
}