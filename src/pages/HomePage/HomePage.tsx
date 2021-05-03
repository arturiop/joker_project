import { Button } from 'antd';
import React, { FC, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionRating } from '../../store/actions/rating/rating';
import { AppState } from '../../types/types';
import ModalCustom from '../../ui/ModalCustom';
import styles from './HomePage.module.css';

const HomePage: FC = memo(() => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const rating = useSelector((state: AppState) => state.rating.rating);
  const allowToVote = useSelector((state: AppState) => state.rating.allowToVote);
  const handleClick = () => {
    dispatch(actionRating.raisRating(1));
  };
  const openModal = () => setVisible(true);

  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.content__greeting}>
          <h1>Welcome </h1>
          <div>to the home page of this beautiful site</div>
        </div>

        <div className={styles.content__rating}>
          <div>{`Website rating ${rating}`}</div>

          <ModalCustom visible={visible} setVisible={setVisible} />

          {allowToVote && (
          <div className={styles.votes}>
            <div className={styles.votes__title}>
              Do you like this site ?
            </div>

            <span className={styles.votes__button}>
              <Button type="primary" onClick={handleClick}>Greate</Button>
            </span>
            <span className={styles.votes__button}>
              <Button type="text" onClick={openModal}>Hate</Button>
            </span>
          </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default HomePage;

HomePage.displayName = 'HomePage';
