import React, { FC, memo } from 'react';
import styles from './index.module.css';

const Loading: FC = memo(() => (
  <div className={styles.wrap}>
    <div className={styles.lds_ripple}>
      <div />
      <div />
    </div>
  </div>
));

Loading.displayName = 'Loading';

export default Loading;
