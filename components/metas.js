import PropTypes from 'prop-types';
import Head from 'next/head';
export default function Metas({ title, description, imgSrc, url, children }) {
  return (
    <Head>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgSrc} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgSrc} />
      <meta name="twitter:card" content="summary_large_image" />
      <title>{title} | Yousign | Blog Engineering & Product</title>
      <meta name="description" content={description} />
      {children}
    </Head>
  );
}

Metas.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imgSrc: PropTypes.string,
};
