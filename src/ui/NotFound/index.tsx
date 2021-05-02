import { Button } from 'antd';
import React, { FC, memo } from 'react';
import styles from './index.module.css';

const NotFound: FC = memo(() => (
  <div className={styles.wrap}>
    <div className={styles.h1}>404</div>
    <h2>OOPS, SOORRY WE CAN`T FIND THAT PAGE!</h2>
    <h3 className={styles.h3}>Either something went wrong or the page doesn`t exist anymore</h3>
    <div>
      <Button type="primary">HOME PAGE</Button>
    </div>
  </div>
));
NotFound.displayName = 'NotFound';

export default NotFound;
