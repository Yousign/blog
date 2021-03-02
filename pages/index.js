import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts, getAuthorByPath } from '../lib/api';
import Head from 'next/head';

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Yousign&apos;s Engineering & Product Blog</title>
        </Head>
        <Intro />
        <Container>
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
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'authors',
    'coverImage',
    'excerpt',
  ]).map((post) => ({ ...post, authors: post.authors.map((path) => getAuthorByPath(path)) }));

  return {
    props: { allPosts },
  };
}
