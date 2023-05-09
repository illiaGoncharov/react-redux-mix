import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import styles from './tab.module.css';
import { TAB_SWITCH } from '../../services/actions/cart';

export const Tab = ({ text, active, onClick: handleClick, value }) => {
  const dispatch = useDispatch();

  // const onClick = useCallback(() => {
  //   if (typeof handleClick === 'function') {
  //     handleClick(value);
  //     dispatch({
  //       type: TAB_SWITCH
  //     });
  //   }
  // }, [handleClick, value, dispatch]);
  const switchTab = useCallback(() => {
    if (typeof handleClick === 'function') {
      handleClick(value);
    }
    dispatch({
      type: TAB_SWITCH
    });
  }, [dispatch, handleClick, value]);

  const className = `${styles.tab} ${active ? styles.tab_type_current : ''}`;
  return (
    <div className={`${className}`} onClick={switchTab}>
      {text}
    </div>
  );
};