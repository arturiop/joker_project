import React, { memo } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Content } from 'antd/lib/layout/layout';
import ErrorMessage from '../../../ui/ErrorMessage';
import Loading from '../../../ui/Loading';
import NotFound from '../../../ui/NotFound';
import styles from './index.module.css';

const HomePage = React.lazy(() => import('../../../components/HomePage/HomePage'));
const PostsList = React.lazy(() => import('../../../components/PostsList/PostsList'));
const UsersPage = React.lazy(() => import('../../../components/UsersPage/UsersPage'));
const PublicationContainer = React.lazy(() => import('../../../components/Publication/Publication-container'));
const ProfileContainer = React.lazy(() => import('../../../components/Profile/Profile-container'));

const ContentComponent: React.FC = memo(() => (
  <Content className={styles.container}>
    <ErrorMessage />
    <Switch>

      <Route
        exact
        path="/"
        render={() => <Redirect to="/home" />}
      />

      <Route
        path="/home"
        render={() => (
          <React.Suspense fallback={<Loading />}>
            <HomePage />
          </React.Suspense>
        )}
      />

      <Route
        path="/posts"
        render={() => (
          <React.Suspense fallback={<Loading />}>
            <PostsList />
          </React.Suspense>
        )}
      />

      <Route
        path="/users"
        render={() => (
          <React.Suspense fallback={<Loading />}>
            <UsersPage />
          </React.Suspense>
        )}
      />
      <Route
        path="/publication/:postId(\d+)?"
        render={() => (
          <React.Suspense fallback={<Loading />}>
            <PublicationContainer />
          </React.Suspense>
        )}
      />

      <Route
        path="/profile/:profileId(\d+)?"
        render={() => (
          <React.Suspense fallback={<Loading />}>
            <ProfileContainer />
          </React.Suspense>
        )}
      />

      <Route path="*" render={() => <NotFound />} />
    </Switch>
  </Content>
));

ContentComponent.displayName = 'ContentComponent';

export default ContentComponent;
