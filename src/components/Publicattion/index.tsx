import React, { FC, memo } from 'react';
import { PostData } from '../../types/types';

const Publication: FC<PropsType> = memo(({ publication }) => (
  <div>
    <h1>Post</h1>
    <h2>{publication.title}</h2>
    <div>{publication.body}</div>
    <div>{publication.updated_at}</div>
  </div>
));

export default Publication;

Publication.displayName = 'Publication';
type PropsType = { publication: PostData };
