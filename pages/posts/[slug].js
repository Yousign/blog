import { useRouter } from 'next/router';

import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import Layout from '../../components/layout';
import { getPostBySlug, getAllPosts, getAuthorByPath } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Metas from '../../components/metas';
import markdownToHtml from '../../lib/markdownToHtml';

export default function Post({ post, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Metas title={post.title} description={post.excerpt} imgSrc={post.coverImage}>
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-coy.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-funky.css"
          as="script"
        />
        <link href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`} rel="stylesheet" />
      </Metas>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="lg:w-2/3 mx-auto py-8">
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                authors={post.authors}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'authors',
    'content',
    'excerpt',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');
  const authors = post.authors.map((path) => getAuthorByPath(path));

  return {
    props: {
      post: {
        ...post,
        content,
        authors,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
