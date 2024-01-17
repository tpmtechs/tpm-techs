/* eslint-disable @next/next/no-img-element */
import type { FC } from 'react';
import './index.css';

interface IProfile {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

interface IMemberCard {
  profile: IProfile;
}

const MemberCard: FC<IMemberCard> = ({ profile }) => {
  return (
    <div className="member-card bg-mabel">
      <img alt="avatar" className='rounded-xl w-full h-80 object-cover' src={profile.imageUrl} />
      <div className="info">
        <div className="name">{profile.name}</div>
        <div className="role">{profile.role}</div>
        <div className="description">{profile.description}</div>
      </div>
    </div>
  );
};

export default MemberCard;
