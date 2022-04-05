import React from 'react';
import { Post } from '~/models/post.server';
import { PostPreview } from './post-preview';

export const MoreStories: React.VFC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <section className="py-4 md:py-15 px-6 md:px-0 container mx-auto">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-13 xl:gap-15">
        {posts.map((post) => (
          <li key={post.slug}>
            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              authors={post.authors}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
