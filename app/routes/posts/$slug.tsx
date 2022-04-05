import { marked } from 'marked';
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getPostBySlug, Post } from '~/models/post.server';
import { PostHeader } from '~/components/post-header';

type LoaderData = { post: Post; html: string };

export const loader: LoaderFunction = async ({ params }) => {
  const post = getPostBySlug(params?.slug || '', [
    'title',
    'date',
    'slug',
    'authors',
    'content',
    'excerpt',
    'coverImage',
  ]);
  const html = marked(post?.content || '');
  return json<LoaderData>({ post, html });
};

export default function PostSlug() {
  const { post, html } = useLoaderData() as LoaderData;
  return (
    <main className="lg:w-2/3 mx-auto py-8">
      <article>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          authors={post.authors}
        />
        <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  );
}
