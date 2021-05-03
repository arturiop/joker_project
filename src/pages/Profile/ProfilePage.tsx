import React, {
  FC, memo, useEffect, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { requestUserComments, requestUserPosts } from '../../store/actions/profile/profile';
import { UserData } from '../../types/types';
import Comments from '../../ui/Comment';
import { getUserComments, getUserPosts } from '../../store/actions/profile/profile-selector';
import ProfileDescription from '../../components/Profile';
import PostsList from '../../components/PostLIst';

const ProfilePage: FC<PropsType> = memo(({ profile, profileId }) => {
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
      <ProfileDescription profile={profile} />
      <PostsList state={userPosts} />
      <Button onClick={changePage}>Show more post</Button>
      <Comments commentsData={userComments} visibleLink />
      <Button onClick={changePage}>Show more comments</Button>
    </div>
  );
});

export default ProfilePage;
ProfilePage.displayName = 'ProfilePage';

type PropsType = { profile: UserData, profileId: string };
