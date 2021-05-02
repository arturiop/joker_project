import { Button } from 'antd';
import React, { FC, memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PostData } from '../../types/types';
import styles from './PostsList.module.css';

const Post: FC<PropsType> = memo(({ item }) => {
  const created = item.created_at.substring(0, 10);
  const updated = item.updated_at.substring(0, 16);
  const [isShow, setIsShow] = useState(false);

  const switchShow = () => {
    if (isShow) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  };

  return (
    <div className={styles.item__wrap}>
      Post
      <div className={styles.item__title}>
        {`title: ${item.title}`}
        <Button type="text" onClick={() => switchShow()}>...</Button>
      </div>
      {isShow && <div>{`descriptions: ${item.body}`}</div>}
      {isShow ? (
        <div>
          {`updated: ${updated}`}
        </div>
      )
        : (
          <div>
            {`created: ${created}`}
          </div>
        ) }
      <NavLink to={`/publication/${item.id}`}>
        <p>go to publication</p>
      </NavLink>
      <div>-----------------------------</div>
    </div>
  );
});

export default Post;
Post.displayName = 'Post';

type PropsType = { item: PostData };
