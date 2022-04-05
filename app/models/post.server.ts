import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_data/posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export interface Post {
  slug?: string;
  content?: string;
  authors?: string[];
  published?: boolean;
  tags?: string[];
  title?: string;
  excerpt?: string;
  coverImage?: string;
  date?: string;
}

type Field = keyof Post;

export function getPostBySlug(slug: string, fields: Field[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Post = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (field === 'authors') {
      items[field] = data[field].map((authorPath: string) => getAuthorByPath(authorPath));
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: Field[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, ['published', ...fields]))
    // exclude non published post
    .filter((post) => post.published);
  // sort posts by date in descending order
  //.sort((post1, post2) => (post1?.date && post2.date && post1.date > post2.date ? '-1' : '1'));
  return posts;
}

export function getAuthorByPath(fullPath: string) {
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);

  return data;
}
