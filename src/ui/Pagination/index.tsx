import { Pagination } from 'antd';
import React, { FC, memo } from 'react';
import styles from './index.module.css';

const PaginationCustom: FC<PaginationType> = memo(({
  current,
  total,
  onChange,
}) => (
  <div className={styles.wrap}>
    <Pagination
      showSizeChanger={false}
      defaultPageSize={20}
      current={current}
      total={total}
      onChange={onChange}
    />
  </div>
));

export default PaginationCustom;

PaginationCustom.displayName = 'PaginationCustom';

type PaginationType = {
  disabled: boolean
  current: number
  total: number
  onChange: (page: number) => void
};
