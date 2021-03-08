import DateFormatter from '../components/date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';

export default function PostPreview({ title, coverImage, date, authors, slug }) {
  return (
    <div>
      <div className="mb-2 h" style={{ height: 240 }}>
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          className="rounded-md w-full"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="mb-2 text-sm">
        <DateFormatter dateString={date} />
      </div>
      <h3 className="text-2xl font-bold leading-snug mb-2">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      {authors.map((author, index) => (
        <div key={index} className="text-sm opacity-50">
          <strong>{author?.fullname}</strong> - {author?.position}
        </div>
      ))}
    </div>
  );
}
