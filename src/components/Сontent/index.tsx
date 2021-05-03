import React, { memo } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Content } from 'antd/lib/layout/layout';
import ErrorMessage from '../../ui/ErrorMessage';
import Loading from '../../ui/Loading';
import NotFound from '../../ui/NotFound';
import styles from './index.module.css';

const HomePage = React.lazy(() => import('../../pages/HomePage/HomePage'));
const UsersPageContainer = React.lazy(() => import('../../containers/UsersPageContainer'));
const PostsPageContainer = React.lazy(() => import('../../containers/PostsPageContainer'));
const PublicationContainer = React.lazy(() => import('../../containers/PublicationContainer'));
const ProfileContainer = React.lazy(() => import('../../containers/ProfileContainer'));

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
            <PostsPageContainer />
          </React.Suspense>
        )}
      />

      <Route
        path="/users"
        render={() => (
          <React.Suspense fallback={<Loading />}>
            <UsersPageContainer />
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
