import { Footer } from 'antd/lib/layout/layout';
import React, { FC, memo } from 'react';
// import style from './index.module.css';

const FooterComponent: FC = memo(() => (
  <Footer style={{ backgroundColor: 'red' }}>
    the Footer
  </Footer>
));

FooterComponent.displayName = 'FooterComponent';

export default FooterComponent;
