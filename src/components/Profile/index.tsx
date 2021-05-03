import React, { FC, memo } from 'react';
import { UserData } from '../../types/types';

const ProfileDescription: FC<PropsType> = memo(({ profile }) => (
  <div>
    <div>Profile:</div>
    <div>{profile.name}</div>
    <div>{profile.email}</div>
    <div>{profile.gender}</div>
    <div>{profile.created_at}</div>
  </div>
));

export default ProfileDescription;

ProfileDescription.displayName = 'ProfileDescription';

type PropsType = { profile: UserData };
