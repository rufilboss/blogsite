import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import Parser from 'rss-parser';

const root = process.cwd();
const snapshotPath = path.join(root, 'src/data/articles.generated.json');
const parser = new Parser();

const sources = [
  { platform: 'Dev.to', url: 'https://dev.to/feed/rufilboss', host: 'dev.to' },
  { platform: 'freeCodeCamp', url: 'https://www.freecodecamp.org/news/author/rufilboss/rss/', host: 'www.freecodecamp.org' },
  { platform: 'Reclear', url: 'https://reclear.io/rss.xml', host: 'reclear.io', author: 'ilyas rufai' },
];

const categoryFor = (title) => {
  const text = title.toLowerCase();
  if (text.includes('kubernetes')) return 'Kubernetes';
  if (text.includes('terraform')) return 'Terraform';
  if (text.includes('github actions') || text.includes('ci/cd')) return 'CI/CD';
  if (text.includes('aws') || text.includes('lambda') || text.includes('cloudtrail')) return 'AWS';
  if (text.includes('security') || text.includes('secret') || text.includes('iam')) return 'Security';
  return 'DevSecOps';
};

const displayDate = (publishedAt) =>
  new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'UTC',
  }).format(new Date(publishedAt)) + ' UTC';

const readSnapshot = async () => {
  try {
    return JSON.parse(await readFile(snapshotPath, 'utf8'));
  } catch {
    return [];
  }
};

const fetchSource = async (source) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(source.url, {
      headers: { 'user-agent': 'blog.rufilboss.me article refresh' },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const feed = await parser.parseString(await response.text());
    return feed.items
      .filter((item) => !source.author || (item.creator || item.author || '').toLowerCase().includes(source.author))
      .map((item) => {
        const publishedAt = new Date(item.isoDate || item.pubDate).toISOString();
        return {
          title: item.title?.trim(),
          url: item.link?.trim(),
          platform: source.platform,
          category: categoryFor(item.title || ''),
          date: displayDate(publishedAt),
          publishedAt,
        };
      })
      .filter((article) => {
        try {
          return article.title && article.url && new URL(article.url).hostname === source.host;
        } catch {
          return false;
        }
      });
  } finally {
    clearTimeout(timeout);
  }
};

const previousArticles = await readSnapshot();
const refreshedArticles = [];

for (const source of sources) {
  try {
    const articles = await fetchSource(source);
    refreshedArticles.push(...articles);
    console.log(`Fetched ${articles.length} ${source.platform} articles.`);
  } catch (error) {
    const cached = previousArticles.filter((article) => article.platform === source.platform);
    refreshedArticles.push(...cached);
    console.warn(`Could not fetch ${source.platform}; kept ${cached.length} cached articles.`, error.message);
  }
}

const uniqueArticles = [...new Map(refreshedArticles.map((article) => [article.url, article])).values()]
  .sort((firstArticle, secondArticle) => Date.parse(secondArticle.publishedAt) - Date.parse(firstArticle.publishedAt));

await mkdir(path.dirname(snapshotPath), { recursive: true });
await writeFile(snapshotPath, `${JSON.stringify(uniqueArticles, null, 2)}\n`);
console.log(`Saved ${uniqueArticles.length} articles to ${path.relative(root, snapshotPath)}.`);