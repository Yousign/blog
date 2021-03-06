import Metas from 'components/metas';
import MoreStories from 'components/more-stories';
import HeroPost from 'components/hero-post';
import Banner from 'components/banner';
import Layout from 'components/layout';
import { getAllPosts, getAuthorByPath } from 'lib/api';
import generateRssFeed from 'lib/rss';
import { BLOG_TITLE, BLOG_BASELINE, HOME_OG_IMAGE_URL } from 'lib/constants';

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <Layout>
      <Metas title={BLOG_TITLE} description={BLOG_BASELINE} imgSrc={HOME_OG_IMAGE_URL} />
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
    </Layout>
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
    'tag',
  ]).map((post) => ({ ...post, authors: post.authors.map((path) => getAuthorByPath(path)) }));

  await generateRssFeed();

  return {
    props: { allPosts },
  };
}
