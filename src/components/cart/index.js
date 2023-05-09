import React from 'react';
import { useSelector } from 'react-redux';

import { Tabs } from './tabs';
import { ProductsContainer } from './products-container';
import { Postponed } from './postponed';

export const Cart = () => {
  const currentTab = useSelector(state => state.cart.currentTab);

  return (
    <section>
      <Tabs />
      {currentTab === "items" ? <ProductsContainer /> : <Postponed />}
    </section>
  );
};