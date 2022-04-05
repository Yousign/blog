import React from 'react';
import { Post } from '~/models/post.server';
import { Avatar } from './avatar';
import { DateFormatter } from './date-formatter';
import { PostTitle } from './post-title';

export const PostHeader: React.VFC<Post> = ({ title, coverImage, date, authors }) => {
  return (
    <header className="my-6 md:my-12">
      <PostTitle>{title}</PostTitle>
      <div className="flex justify-between items-center my-10">
        {/* {authors.map((author, index) => (
          <Avatar key={index} {...author} />
        ))} */}
        {date && <DateFormatter dateString={date} />}
      </div>
      <img
        title={title}
        src={coverImage}
        className="rounded-md w-full"
        width={800}
        height={480}
        alt=""
      />
    </header>
  );
};
