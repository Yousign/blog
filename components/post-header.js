import Avatar from '../components/avatar';
import DateFormatter from '../components/date-formatter';
import CoverImage from '../components/cover-image';
import PostTitle from '../components/post-title';

export default function PostHeader({ title, coverImage, date, authors }) {
  return (
    <header className="my-12">
      <PostTitle>{title}</PostTitle>
      <div className="flex justify-between items-center my-10">
        {authors.map((author, index) => (
          <Avatar key={index} {...author} />
        ))}
        <DateFormatter dateString={date} />
      </div>
      <div className="mb-8 md:mb-16" style={{ height: 500 }}>
        <CoverImage
          title={title}
          src={coverImage}
          className="rounded-md w-full"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </header>
  );
}
