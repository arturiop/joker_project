import React, { FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { actionPublication, setPublication } from '../../store/actions/publication/publication';
import { getPublication } from '../../store/actions/publication/publication-selector';
import { PostData } from '../../types/types';
import Loading from '../../ui/Loading';
import Publication from './Publication';

const PublicationContainer: FC = memo(() => {
  const publication = useSelector(getPublication) as PostData;
  const dispatch = useDispatch();

  const { postId } = useParams<ParamsType>();

  useEffect(() => {
    dispatch(setPublication(Number(postId)));
    return () => {
      dispatch(actionPublication.deletePublication());
    };
  }, [postId]);

  return (
    <div>
      {publication ? <Publication postId={postId} publication={publication} /> : <Loading />}
    </div>
  );
});

export default PublicationContainer;

PublicationContainer.displayName = 'PublicationContainer';

type ParamsType = { postId: string };
