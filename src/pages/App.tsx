import React, { FC } from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
import FooterComponent from '../containers/page-contaiters/footer';
import HeaderComponent from '../containers/page-contaiters/header';
import ContentComponent from '../containers/page-contaiters/сontent';
import store from '../store';

const App: FC = () => (
  <Layout>
    <HeaderComponent />
    <ContentComponent />
    <FooterComponent />
  </Layout>
);

const MainApp: React.FC = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

export default MainApp;
