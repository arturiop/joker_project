import React, { FC } from 'react';
import { Modal } from 'antd';
import photo from '../../../assets/images/hateAnswer.jpg';

const ModalCustom: FC<MyModalType> = ({ isOpen, setIsOpen }) => (
  <Modal
    title="Incorrect unswer"
    visible={isOpen}
    onOk={() => setIsOpen(false)}
    cancelButtonProps={{ disabled: true }}
  >
    <img style={{ width: '100%' }} src={photo} alt="" />

  </Modal>
);

export default ModalCustom;

type MyModalType = {
  isOpen: boolean,
  setIsOpen: (toggle:boolean) => void,
};
