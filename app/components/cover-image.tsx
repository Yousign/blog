import * as React from 'react';
import { Link } from '@remix-run/react';

interface CoverImageProps {
  title?: string;
  src?: string;
  slug?: string;
}

export const CoverImage: React.VFC<CoverImageProps> = ({ title, src, slug, ...rest }) => {
  const image = src ? (
    <img src={src} width={768} height={468} alt={`Cover for ${title}`} {...rest} />
  ) : null;
  return (
    <div className="h-full w-full relative">
      {slug ? <Link to={`posts/${slug}`}>{image}</Link> : image}
    </div>
  );
};
