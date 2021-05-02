import React, { FC, memo } from 'react';
import Post from './Post';
import { PostData } from '../../types/types';

const PostsListN: FC<PropsType> = memo(({ state }) => (
  <div>
    {state.map((item) => <Post item={item} key={item.id} />)}
  </div>
));

export default PostsListN;
PostsListN.displayName = 'PostsList';

type PropsType = { state: PostData[] };
