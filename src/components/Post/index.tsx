import { Button } from 'antd';
import React, { FC, memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PathKeys as CNST } from '../../constants/constants-keys';
import { PostData } from '../../types/types';
import styles from './index.module.css';

const Post: FC<PropsType> = memo(({ item }) => {
  const created = item.created_at.substring(0, 10);
  const updated = item.updated_at.substring(0, 16);
  const [visible, setVisible] = useState(false);

  const switchVisible = () => setVisible(!visible);

  return (
    <div className={styles.item__wrap}>
      Post
      <div className={styles.item__title}>
        {`title: ${item.title}`}
        <Button type="text" onClick={switchVisible}>...</Button>
      </div>
      {visible && <div>{`descriptions: ${item.body}`}</div>}
      {visible ? (
        <div>
          {`updated: ${updated}`}
        </div>
      )
        : (
          <div>
            {`created: ${created}`}
          </div>
        ) }
      <NavLink to={`${CNST.PUBLICATION}/${item.id}`}>
        <p>go to publication</p>
      </NavLink>
      <div>-----------------------------</div>
    </div>
  );
});

export default Post;

Post.displayName = 'Post';
type PropsType = { item: PostData };
