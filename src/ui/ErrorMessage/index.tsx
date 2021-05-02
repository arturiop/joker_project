import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../types/types';
import styles from './index.module.css';

const ErrorMessage: FC = () => {
  const messages = useSelector((state: AppState) => state.error.message);

  // const success = () => {
  // message.success('This is a success message');
  // };
  // const openNotificationWithIcon = () => {
  //   notification.error({
  //     message: 'Notification Title',
  //     description: 'This is thent of the notification.',
  //   });
  // };

  if (!messages) {
    return null;
  }
  return (
    <div className={styles.message}>
      {messages}
    </div>
  );
};

export default ErrorMessage;
