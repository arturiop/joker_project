import React, { FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setProfile, actionProfile } from '../store/actions/profile/profile';
import { getProfile } from '../store/actions/profile/profile-selector';
import { UserData } from '../types/types';
import Loading from '../ui/Loading';
import ProfilePage from '../pages/Profile/ProfilePage';

const ProfileContainer: FC = memo(() => {
  const profile = useSelector(getProfile) as UserData;

  const dispatch = useDispatch();
  const { profileId } = useParams<ParamsType>();

  useEffect(() => {
    dispatch(setProfile(Number(profileId)));
    return () => {
      dispatch(actionProfile.clearProfile());
    };
  }, [profileId]);

  return (
    <div>
      {profile ? <ProfilePage profile={profile} profileId={profileId} /> : <Loading />}
    </div>
  );
});

export default ProfileContainer;
ProfileContainer.displayName = 'ProfileContainer';
type ParamsType = { profileId: string };
