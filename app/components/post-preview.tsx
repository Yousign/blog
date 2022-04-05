import { Link } from '@remix-run/react';
import React from 'react';
import { Post } from '~/models/post.server';
import { DateFormatter } from './date-formatter';

export const PostPreview: React.VFC<Post> = ({ title, coverImage, date, authors, slug }) => {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Link to={`/posts/${slug}`}>
        <img
          aria-label={title}
          title={title}
          src={coverImage}
          width={480}
          height={288}
          className="block group w-full transition duration-300 ease-in-out transform group-hover:scale-105 group-hover:-rotate-1"
        />
        <div className="px-8 py-4 ">
          {date && (
            <div className="mb-2 text-sm opacity-40 transition duration-300 ease-in-out group-hover:opacity-80">
              <DateFormatter dateString={date} />
            </div>
          )}
          <h3
            className="text-2xl leading-tight font-extrabold mb-2 text-purple-light group-hover:text-purple-medium transition duration-300 ease-in-out"
            style={{ height: 100 }}
          >
            {title}
          </h3>
          {/* <div className="mt-auto">
            {authors.map((author, index) => (
              <div key={index} className="text-sm opacity-50">
                <strong>{author?.fullname}</strong> - {author?.position}
              </div>
            ))}
          </div> */}
        </div>
      </Link>
    </article>
  );
};
