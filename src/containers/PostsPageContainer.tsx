import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestPosts } from '../store/actions/posts/posts';
import { getCurrentPage, getPosts } from '../store/actions/posts/posts-selector';
import Loading from '../ui/Loading';
import PostsList from '../pages/PostsPage/PostsPage';
import useRequestData from '../hooks/useRequestData';
import useСorrectionURL from '../hooks/useСorrectionURL';

const PostsPageContainer: FC = () => {
  const posts = useSelector(getPosts);
  const currentPage = useSelector(getCurrentPage);

  const dispatch = useDispatch();

  const onPageChanged = (number: number) => {
    dispatch(requestPosts(number));
  };

  useRequestData(requestPosts, currentPage);
  useСorrectionURL('/posts', currentPage);

  return (
    <>
      {!posts.length ? <Loading />
        : (
          <PostsList
            state={posts}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
          />
        ) }
    </>
  );
};

export default PostsPageContainer;
PostsPageContainer.displayName = 'PostsPageContainer';
