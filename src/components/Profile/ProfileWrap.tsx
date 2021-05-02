import React, { FC, memo } from 'react';
import { UserData } from '../../types/types';

const ProfileWrap: FC<PropsType> = memo(({ profile }) => (
  <div>
    <div>Profile:</div>
    <div>{profile.name}</div>
    <div>{profile.email}</div>
    <div>{profile.gender}</div>
    <div>{profile.created_at}</div>
  </div>
));

export default ProfileWrap;

ProfileWrap.displayName = 'ProfileWrap';

type PropsType = { profile: UserData };
