/* eslint-disable react/jsx-props-no-spreading */
import { Button, Input } from 'antd';
import React, { FC, memo, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuth } from '../../store/actions/auth/auth-selector';
import { actionComments, sendComment, requestComments } from '../../store/actions/comments/comments';
import { getCommentsForPost } from '../../store/actions/comments/comments-selector';
import { PostData, SendCommentData } from '../../types/types';
import Comments from '../../ui/Comment';

const { TextArea } = Input;
type Inputs = {
  exampleRequired: string,
};
const Publication: FC<PropsType> = memo(({ publication, postId }) => {
  const currentUser = useSelector(getUserAuth);
  const commentsData = useSelector(getCommentsForPost);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestComments(Number(postId)));
    return () => {
      dispatch(actionComments.deleteComments());
    };
  }, []);

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    const data: SendCommentData = {
      user_id: currentUser.id,
      name: currentUser.name,
      email: currentUser.email,
      body: values.body,
    };

    dispatch(sendComment(publication.id, data));
  };

  return (
    <div>
      <div>
        <div>Post:</div>
        {publication.title}
        <Comments commentsData={commentsData} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextArea {...register('exampleRequired')} />
          <Button htmlType="submit">submit</Button>
        </form>
      </div>
    </div>
  );
});

export default Publication;

Publication.displayName = 'Publication';
type PropsType = { publication: PostData, postId: string };
type FormValues = { body: string };
