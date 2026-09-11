import { NextResponse } from 'next/server';
import { insightsData } from '@/data/insights';
import { siteConfig } from '@/config/site';

export async function GET() {
  const baseUrl = siteConfig.url;
  const publishedArticles = insightsData.filter((a) => a.status === 'published');

  const rssItems = publishedArticles
    .map((article) => {
      return `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${baseUrl}/insights/${article.slug}</link>
      <guid isPermaLink="true">${baseUrl}/insights/${article.slug}</guid>
      <description><![CDATA[${article.description}]]></description>
      <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
      <author><![CDATA[princesinghranaofficial@gmail.com (${article.author.name})]]></author>
      <category>${article.category}</category>
    </item>`;
    })
    .join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Prince Singh Rana — Insights &amp; Engineering Notes</title>
    <link>${baseUrl}/insights</link>
    <description>Practical thinking on SaaS architecture, AI product design, and full-stack engineering.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
