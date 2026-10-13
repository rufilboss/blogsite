import type { APIRoute } from 'astro';
import { publishedArticles } from '../data/articles';

export const GET: APIRoute = async () => {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Ilyas Rufai</title>
    <link>https://blog.rufilboss.me</link>
    <description>Published articles from Ilyas Rufai on platform engineering, operations, and secure delivery.</description>
    ${publishedArticles
      .map(
        (article) => `
      <item>
        <title><![CDATA[${article.title}]]></title>
        <link>${article.url}</link>
        <description><![CDATA[${article.platform} article by Ilyas Rufai.]]></description>
        <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
      </item>`,
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
