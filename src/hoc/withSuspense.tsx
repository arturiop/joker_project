/* eslint-disable react/display-name */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Loading from '../ui/Loading';

function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
  return (props: WCP): JSX.Element => (
    <React.Suspense fallback={<Loading />}>
      <WrappedComponent {...props} />
    </React.Suspense>
  );
}
export default withSuspense;
