import React, { FC } from 'react';
import { Modal } from 'antd';
import photo from '../../assets/images/hateAnswer.jpg';

const ModalCustom: FC<MyModalType> = ({ visible, setVisible }) => {
  const switchVisible = () => setVisible(!visible);
  return (
    <Modal
      title="Incorrect unswer"
      visible={visible}
      onOk={switchVisible}
      cancelButtonProps={{ disabled: true }}
    >
      <img style={{ width: '100%' }} src={photo} alt="" />

    </Modal>
  );
};

export default ModalCustom;

type MyModalType = {
  visible: boolean,
  setVisible: (toggle:boolean) => void,
};
