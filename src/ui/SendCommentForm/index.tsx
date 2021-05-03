/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { Button, Input } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '../../types/types';

const SendCommentForm: FC<PropsType> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { TextArea } = Input;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextArea {...register('exampleRequired')} />
      <Button htmlType="submit">submit</Button>
    </form>
  );
};
export default SendCommentForm;
type PropsType = {
  onSubmit: SubmitHandler<FormValues> ;
};
type Inputs = { exampleRequired: string };
