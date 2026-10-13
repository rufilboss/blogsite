import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('writing')).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Alec Mercer</title>
    <link>https://example.com</link>
    <description>Field notes from platform engineering, operations, and secure delivery.</description>
    ${posts
      .map(
        (post) => `
      <item>
        <title><![CDATA[${post.data.title}]]></title>
        <link>https://example.com/writing/${post.slug}</link>
        <description><![CDATA[${post.data.description}]]></description>
        <pubDate>${new Date(post.data.pubDate).toUTCString()}</pubDate>
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
