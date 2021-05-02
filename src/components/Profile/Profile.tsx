import React, {
  FC, memo, useEffect, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { requestUserComments, requestUserPosts } from '../../store/actions/profile/profile';
import { UserData } from '../../types/types';
import Comments from '../../ui/Comment';
import PostsListN from '../PostsList/PostsList-not-container';
import ProfileWrap from './ProfileWrap';
import { getUserComments, getUserPosts } from '../../store/actions/profile/profile-selector';

const Profile: FC<PropsType> = memo(({ profile, profileId }) => {
  const userPosts = useSelector(getUserPosts);
  const userComments = useSelector(getUserComments);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const changePage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(requestUserComments(profile.email));
    dispatch(requestUserPosts(page, Number(profileId)));
  }, [profile, page]);

  return (
    <div>
      <ProfileWrap profile={profile} />
      <PostsListN state={userPosts} />
      <Button onClick={changePage}>Show more post</Button>
      <Comments commentsData={userComments} visibleLink />
      <Button onClick={changePage}>Show more comments</Button>
    </div>
  );
});

export default Profile;
Profile.displayName = 'Profile';

type PropsType = { profile: UserData, profileId: string };
