const Feed = require('feed').Feed;
const fs = require('fs');
import { getAllPosts, getAuthorByPath } from './api';

async function generateRssFeed() {
  if (process.env.NODE_ENV === 'development') {
    return;
  }

  const baseUrl = process.env.BASE_URL;
  const date = new Date();

  const feed = new Feed({
    title: `Yousign blog engeneering & product`,
    description: 'Yousign par ceux qui le construisent',
    id: baseUrl,
    link: baseUrl,
    language: 'fr',
    image: `${baseUrl}/assets/og-image.png`,
    favicon: `${baseUrl}/favicon/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Yousign`,
    updated: date,
    generator: 'Next.js using Feed for Node.js',
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      json: `${baseUrl}/rss/feed.json`,
      atom: `${baseUrl}/rss/atom.xml`,
    },
  });

  const posts = getAllPosts(['title', 'date', 'slug', 'coverImage', 'excerpt', 'authors']);

  posts.forEach((post) => {
    const url = `${baseUrl}/posts/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      image: `${post.coverImage}`,
      description: post.excerpt,
      date: new Date(post.date),
      author: [{ name: getAuthorByPath(post.authors[0])['fullname'] }],
    });
  });

  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
  fs.writeFileSync('./public/rss/feed.json', feed.json1());
}

export default generateRssFeed;
