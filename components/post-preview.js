import Image from 'next/image';
import Link from 'next/link';
import DateFormatter from './date-formatter';

export default function PostPreview({ title, coverImage, date, authors, slug }) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a aria-label={title} className="block group">
          <Image
            slug={slug}
            title={title}
            src={coverImage}
            width={480}
            height={288}
            className="w-full transition duration-300 ease-in-out transform group-hover:scale-105 group-hover:-rotate-1"
          />
          <div className="px-8 py-4 ">
            <div className="mb-2 text-sm opacity-40 transition duration-300 ease-in-out group-hover:opacity-80">
              <DateFormatter dateString={date} />
            </div>
            <h3
              className="text-2xl leading-tight font-extrabold mb-2 text-purple-light group-hover:text-purple-medium transition duration-300 ease-in-out"
              style={{ height: 100 }}
            >
              {title}
            </h3>
            <div className="mt-auto">
              {authors.map((author, index) => (
                <div key={index} className="text-sm opacity-50">
                  <strong>{author?.fullname}</strong> - {author?.position}
                </div>
              ))}
            </div>
          </div>
        </a>
      </Link>
    </article>
  );
}
