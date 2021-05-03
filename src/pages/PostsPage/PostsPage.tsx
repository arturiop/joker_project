import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { getIsFetching, getTotalItems } from '../../store/actions/posts/posts-selector';
import { PostData } from '../../types/types';
import PaginationCustom from '../../ui/Pagination';
import PostsList from '../../components/PostLIst';

const PostsPage: FC<PropsType> = memo(({ state, onPageChanged, currentPage }) => {
  const totalItems = useSelector(getTotalItems);
  const isFetching = useSelector(getIsFetching);

  return (
    <div>
      <PostsList state={state} />
      <PaginationCustom
        current={currentPage}
        disabled={isFetching}
        onChange={onPageChanged}
        total={totalItems}
      />
    </div>

  );
});

export default PostsPage;

PostsPage.displayName = 'PostsPage';
type PropsType = {
  state: PostData[],
  currentPage: number,
  onPageChanged: (number: number) => void
};
