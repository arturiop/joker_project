import { Footer } from 'antd/lib/layout/layout';
import React, { FC, memo } from 'react';

const FooterComponent: FC = memo(() => (
  <Footer style={{ backgroundColor: 'red' }}>
    the Footer
  </Footer>
));

FooterComponent.displayName = 'FooterComponent';

export default FooterComponent;
