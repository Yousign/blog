import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { HeroPost } from '~/components/hero-post';
import { MoreStories } from '~/components/more-stories';
import { Banner } from '~/components/banner';
import { getAllPosts } from '~/models/post.server';

type LoaderData = {
  // this is a handy way to say: "posts is whatever type getPosts resolves to"
  posts: Awaited<ReturnType<typeof getAllPosts>>;
};

export const loader = async () => {
  const posts = await getAllPosts([
    'title',
    'date',
    'slug',
    'authors',
    'coverImage',
    'excerpt',
    'tags',
  ]);

  return json<LoaderData>({
    posts,
  });
};

export default function Index() {
  const { posts } = useLoaderData() as LoaderData;
  const heroPost = posts[0];
  const morePosts = posts.slice(1);
  return (
    <>
      <Banner />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          authors={heroPost.authors}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}

      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </>
  );
}
