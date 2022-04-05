import * as React from 'react';
import { Link } from '@remix-run/react';
// import { Avatar } from './avatar';
import { DateFormatter } from './date-formatter';
import { CoverImage } from './cover-image';
import { Post } from '~/models/post.server';

export const HeroPost: React.VFC<Post> = ({ title, coverImage, date, authors, slug }) => {
  return (
    <section className="hero-post md:container md:mx-auto mb-8">
      <div className="h-full grid grid-cols-1 md:grid-cols-12 bg-purple-light text-white md:rounded-md overflow-hidden">
        <div className="md:col-span-7">
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>
        <div className="md:col-span-5 p-4 lg:px-14 lg:py-10 flex flex-col">
          {date && (
            <div className="mb-4">
              <DateFormatter dateString={date} />
            </div>
          )}
          <h3 className="font-bold text-3xl lg:text-4xl xl:text-5xl mb-4">
            {slug && (
              <Link to={`posts/${slug}`} className="hover:underline">
                {title}
              </Link>
            )}
          </h3>

          {/* <div className="mt-auto">
            {authors.map((author, index) => (
              <Avatar key={index} {...author} />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};
