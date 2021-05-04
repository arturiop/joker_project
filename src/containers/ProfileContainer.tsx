import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { setProfile, actionProfile } from '../store/actions/profile/profile';
import { getProfile } from '../store/actions/profile/profile-selector';
import { UserData } from '../types/types';
import Loading from '../ui/Loading';
import ProfilePage from '../pages/Profile/ProfilePage';
import useSetClearData from '../hooks/useSetClearData';

const ProfileContainer: FC = memo(() => {
  const profile = useSelector(getProfile) as UserData;
  const profileId = useSetClearData(setProfile, actionProfile.clearProfile);

  return (
    <div>
      {profile ? <ProfilePage profile={profile} profileId={profileId} /> : <Loading />}
    </div>
  );
});

export default ProfileContainer;
ProfileContainer.displayName = 'ProfileContainer';
