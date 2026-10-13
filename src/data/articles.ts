import articleSnapshot from './articles.generated.json';

export type PublishedArticle = {
  title: string;
  url: string;
  platform: 'Hashnode' | 'Dev.to' | 'freeCodeCamp' | 'Reclear';
  category: string;
  date: string;
  publishedAt: string;
};

export const author = {
  name: 'Ilyas Rufai',
  siteUrl: 'https://blog.rufilboss.me/',
  hashnodeUrl: 'https://blog.rufilboss.me/',
  devToUrl: 'https://dev.to/rufilboss',
  freeCodeCampUrl: 'https://www.freecodecamp.org/news/author/rufilboss/',
  reclearUrl: 'https://reclear.io/blog/writers/rufilboss',
};

const articleCatalog = articleSnapshot as PublishedArticle[];

export const publishedArticles = [...articleCatalog].sort(
  (firstArticle, secondArticle) =>
    Date.parse(secondArticle.publishedAt) - Date.parse(firstArticle.publishedAt),
);
