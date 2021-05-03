import React, { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { CommentData } from '../../types/types';

const Comments: FC<PropsType> = memo(({ commentsData, visibleLink }) => {
  if (!commentsData.length) {
    return <div>Not comments</div>;
  }
  return (
    <div>
      {commentsData.map((item) => (
        <div key={item.id}>
          <div>Comment</div>
          <div>{`${item.name}: ${item.body}`}</div>

          {visibleLink ? (
            <NavLink to={`/publication/${item.post_id}`}>
              <p>go to publication</p>
            </NavLink>
          ) : null}

        </div>
      ))}
    </div>
  );
});

Comments.displayName = 'Comments';

export default Comments;

type PropsType = {
  commentsData: CommentData[],
  visibleLink?: boolean
};
