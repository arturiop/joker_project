import React, { FC, memo, useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { actionComments, requestComments, sendComment } from '../../store/actions/comments/comments';
import { getCommentsForPost } from '../../store/actions/comments/comments-selector';
import { FormValues, PostData, SendCommentData } from '../../types/types';
import Comments from '../../ui/Comment';
import SendCommentForm from '../../ui/SendCommentForm';
import DescriptionPublication from '../../components/Publicattion';

const PublicationPage: FC<PropsType> = memo(({ publication, postId }) => {
  const commentsData = useSelector(getCommentsForPost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestComments(Number(postId)));
    return () => {
      dispatch(actionComments.deleteComments());
    };
  }, []);

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    console.log(values);
    const data: SendCommentData = {
      user_id: 83,
      name: 'Artur',
      email: 'artur_artur@gmail.com',
      body: values.body,
    };
    dispatch(sendComment(publication.id, data));
  };

  return (
    <div>
      <DescriptionPublication publication={publication} />
      <Comments commentsData={commentsData} />
      <SendCommentForm onSubmit={onSubmit} />
    </div>
  );
});

export default PublicationPage;

PublicationPage.displayName = 'PublicationPage';
type PropsType = { publication: PostData, postId: string };
