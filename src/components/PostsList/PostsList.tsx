import React, { FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Qs from 'qs';
import { useHistory } from 'react-router';
import { requestPosts } from '../../store/actions/posts/posts';

import {
  getCurrentPage, getIsFetching, getPosts, getTotalItems,
} from '../../store/actions/posts/posts-selector';
import PaginationCustom from '../../ui/Pagination';
import Loading from '../../ui/Loading';
import PostsListN from './PostsList-not-container';

const PostsList: FC = memo(() => {
  const posts = useSelector(getPosts);
  const totalItems = useSelector(getTotalItems);
  const isFetching = useSelector(getIsFetching);
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

  if (posts.length === 0) {
    return <Loading />;
  }
  return (
    <div>
      <PostsListN state={posts} />
      <PaginationCustom
        current={currentPage}
        disabled={isFetching}
        onChange={onPageChanged}
        total={totalItems}
      />
    </div>

  );
});

export default PostsList;
PostsList.displayName = 'PostsList';
type QueryParamsType = { page?: string };
