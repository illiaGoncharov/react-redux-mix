import { useSelector } from 'react-redux';
import styles from './total-price.module.css';

export const TotalPrice = ({ extraClass }) => {
  const discount = useSelector(state => state.cart.promoDiscount);
  const totalPrice = useSelector(state =>
    state.cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  // console.log(cartItems, totalPrice, discount);
  return (
    <div className={`${styles.container} ${extraClass}`}>
      <p className={styles.text}>Итого:</p>
      <p className={styles.cost}>{totalPrice - discount} руб.</p>
    </div>
  );
};