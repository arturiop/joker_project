/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { Button, Input } from 'antd';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '../../types/types';

const SendCommentForm: FC<PropsType> = ({ onSubmit }) => {
  const { handleSubmit, control } = useForm<Inputs>();
  const { TextArea } = Input;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="body"
        rules={{ required: true }}
        render={({ field }) => (<TextArea {...field} placeholder="write a comment" />)}
      />
      <Button htmlType="submit">submit</Button>
    </form>
  );
};
export default SendCommentForm;
type PropsType = {
  onSubmit: SubmitHandler<FormValues> ;
};
type Inputs = { body: string };
