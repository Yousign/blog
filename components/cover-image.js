import Link from 'next/link';
import Image from 'next/image';

export default function CoverImage({ title, src, slug, ...rest }) {
  const image = <Image src={src} alt={`Cover Image for ${title}`} {...rest} />;
  return (
    <div className="h-full w-full relative">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title} className="h-full block">
            {image}
          </a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
