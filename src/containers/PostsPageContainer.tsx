import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Qs from 'qs';
import { useHistory } from 'react-router';
import { requestPosts } from '../store/actions/posts/posts';
import { getCurrentPage, getPosts } from '../store/actions/posts/posts-selector';
import Loading from '../ui/Loading';
import PostsList from '../pages/PostsPage/PostsPage';

const PostsPageContainer: FC = () => {
  const posts = useSelector(getPosts);
  const currentPage = useSelector(getCurrentPage);

  const dispatch = useDispatch();
  const history = useHistory();

  const onPageChanged = (number: number) => {
    dispatch(requestPosts(number));
  };

  useEffect(() => {
    const parsed = Qs.parse(history.location.search.substr(1));
    const actualPage = parsed.page ? Number(parsed.page) : currentPage;

    dispatch(requestPosts(actualPage));
  }, []);

  useEffect(() => {
    const query: QueryParamsType = {};
    if (currentPage !== 1) query.page = String(currentPage);
    history.push({
      pathname: '/posts',
      search: Qs.stringify(query),
    });
  }, [currentPage, history]);

  return (
    <>
      {posts ? (
        <PostsList
          state={posts}
          onPageChanged={onPageChanged}
          currentPage={currentPage}
        />
      )
        : <Loading /> }
    </>
  );
};

type QueryParamsType = { page?: string };
export default PostsPageContainer;
PostsPageContainer.displayName = 'PostsPageContainer';
