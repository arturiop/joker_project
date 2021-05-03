import React, { FC } from 'react';
import { PostData } from '../../types/types';
import Post from '../Post';

const PostsList: FC<PropstType> = ({ state }) => {
  const postList = state.map((item) => <Post item={item} key={item.id} />);

  return (
    <>
      {postList}
    </>
  );
};

export default PostsList;
type PropstType = { state: PostData[] };
