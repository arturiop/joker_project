import React, { memo } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Content } from 'antd/lib/layout/layout';
import NotFound from '../../ui/NotFound';
import styles from './index.module.css';
import withSuspense from '../../hoc/withSuspense';
import { PathKeys as CNST } from '../../constants/constants-keys';

const HomePage = React.lazy(() => import('../../pages/HomePage/HomePage'));
const UsersPageContainer = React.lazy(() => import('../../containers/UsersPageContainer'));
const PostsPageContainer = React.lazy(() => import('../../containers/PostsPageContainer'));
const PublicationContainer = React.lazy(() => import('../../containers/PublicationContainer'));
const ProfileContainer = React.lazy(() => import('../../containers/ProfileContainer'));

const HomePageSuspended = withSuspense(HomePage);
const UsersPageSuspended = withSuspense(UsersPageContainer);
const PostsPageSuspended = withSuspense(PostsPageContainer);
const PublicationSuspended = withSuspense(PublicationContainer);
const ProfileSuspended = withSuspense(ProfileContainer);
const params = '/:id?';

const ContentComponent: React.FC = memo(() => (
  <Content className={styles.container}>
    <Switch>

      <Route exact path="/" render={() => <Redirect to="/home" />} />

      <Route path={CNST.HOME} render={() => <HomePageSuspended />} />
      <Route path={CNST.POSTS} render={() => <PostsPageSuspended />} />
      <Route path={CNST.USERS} render={() => <UsersPageSuspended />} />

      <Route path={CNST.PUBLICATION + params} render={() => <PublicationSuspended />} />
      <Route path={CNST.PROFILE + params} render={() => <ProfileSuspended />} />

      <Route path="*" render={() => <NotFound />} />

    </Switch>
  </Content>
));

ContentComponent.displayName = 'ContentComponent';

export default ContentComponent;
