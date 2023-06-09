import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './promo-button.module.css';
import closeIcon from '../../images/close.svg';

import { CANCEL_PROMO } from '../../services/actions/cart';


export const PromoButton = ({ children, extraClass }) => {
  const dispatch = useDispatch();

  const cancelPromo = () => {
    dispatch({
      type: CANCEL_PROMO
    });
  };

  return (
    <button type="button" className={`${styles.button} ${extraClass}`} onClick={cancelPromo}>
      {children}
      <img className={styles.close} src={closeIcon} alt="кнопка закрытия" />
    </button>
  );
};