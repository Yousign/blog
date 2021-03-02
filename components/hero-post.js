import Avatar from '../components/avatar';
import DateFormatter from '../components/date-formatter';
import CoverImage from '../components/cover-image';
import Link from 'next/link';

export default function HeroPost({ title, coverImage, date, excerpt, authors, slug }) {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 bg-grey-light rounded-md overflow-hidden">
        <div className="lg:col-span-7 h-full" style={{ minHeight: 500 }}>
          <CoverImage title={title} src={coverImage} slug={slug} layout="fill" objectFit="cover" />
        </div>
        <div className="lg:col-span-5 px-14 py-20 flex flex-col justify-center">
          <div className="mb-4">
            <DateFormatter dateString={date} />
          </div>
          <h3 className="font-bold text-4xl mb-4">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>

          <p className="text-lg leading-relaxed mb-6">{excerpt}</p>
          {authors.map((author, index) => (
            <Avatar key={index} {...author} />
          ))}
        </div>
      </div>
    </section>
  );
}
