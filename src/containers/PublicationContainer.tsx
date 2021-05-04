import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { actionPublication, setPublication } from '../store/actions/publication/publication';
import { getPublication } from '../store/actions/publication/publication-selector';
import { PostData } from '../types/types';
import Loading from '../ui/Loading';
import PublicationPage from '../pages/Publication/PublicationPage';
import useSetClearData from '../hooks/useSetClearData';

const PublicationContainer: FC = memo(() => {
  const publication = useSelector(getPublication) as PostData;
  const postId = useSetClearData(setPublication, actionPublication.clearPublication);
  return (
    <div>
      {publication ? <PublicationPage postId={postId} publication={publication} /> : <Loading />}
    </div>
  );
});

export default PublicationContainer;

PublicationContainer.displayName = 'PublicationContainer';
