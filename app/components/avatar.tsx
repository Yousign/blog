import * as React from 'react';

interface AvatarProps {
  fullname: string;
  avatar: string;
  position: string;
}

export const Avatar: React.VFC<AvatarProps> = ({ fullname, avatar, position }) => {
  return (
    <div className="flex items-center">
      <span className="avatar">
        {avatar && <img src={avatar} alt={fullname} width="400" height="400" />}
      </span>
      <div>
        <div className="font-bold">{fullname}</div>
        <div>{position}</div>
      </div>
    </div>
  );
};
