import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { authorization } from '../../store/actions/auth/auth';

const CreateFormHD: FC<CreateFormHDPropsType> = ({ visible, onCancel, onCreate }) => {
  const { handleSubmit } = useForm<FormValues>();
  return (
    <Modal
      visible={visible}
      title="Auth for user"
      okText="Create"
      cancelText="No Thanks"
      onCancel={onCancel}
      onOk={() => console.log('ddd')}
    >
      <form onSubmit={handleSubmit(onCreate)}>
        <input
          placeholder="mail"
          name="mail"
        />
        <input type="submit" />
      </form>
    </Modal>
  );
};

export const AuthModal: FC = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const onCreate = (values: any) => {
    dispatch(authorization(values));
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="text"
        onClick={() => {
          setVisible(true);
        }}
      >
        Add Hot-Dog
      </Button>
      <CreateFormHD
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

type FormValues = { mail: string };

type CreateFormHDPropsType = {
  visible: boolean;
  onCreate: (values: any) => void;
  onCancel: () => void;
};

export default AuthModal;
