import Image from 'next/image';

export default function Avatar({ fullname, avatar, position }) {
  return (
    <div className="flex items-center">
      <span className="avatar">
        {avatar && <Image src={avatar} alt={fullname} width="400" height="400" />}
      </span>
      <div>
        <div className="font-bold">{fullname}</div>
        <div>{position}</div>
      </div>
    </div>
  );
}
