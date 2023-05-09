import React from 'react';
import { useSelector } from 'react-redux';
import styles from './tabs.module.css';
import { Tab } from './tab';

export const Tabs = () => {
  const currentTab = useSelector(state => state.cart.currentTab);

  return (
    <div className={`${styles.tabs}`}>
       <Tab text="Товары в корзине" value="items" active={currentTab === 'items'} />
      <Tab text="Отложенные товары" value="postponed" active={currentTab === 'postponed'} />
    </div>
  );
};