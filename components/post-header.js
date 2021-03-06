import Image from 'next/image';

import Avatar from './avatar';
import DateFormatter from './date-formatter';

import PostTitle from './post-title';

export default function PostHeader({ title, coverImage, date, authors }) {
  return (
    <header className="my-6 md:my-12">
      <PostTitle>{title}</PostTitle>
      <div className="flex justify-between items-center my-10">
        {authors.map((author, index) => (
          <Avatar key={index} {...author} />
        ))}
        <DateFormatter dateString={date} />
      </div>
      <Image
        title={title}
        src={coverImage}
        className="rounded-md w-full"
        width={800}
        height={480}
      />
    </header>
  );
}
