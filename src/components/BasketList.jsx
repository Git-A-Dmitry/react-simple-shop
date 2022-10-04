import { BasketItem } from './BasketItem';

function BasketList(props) {
  const {
    order = [], //
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    increaseQuantity,
    decreaseQuantity,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.finalPrice * el.quantity;
  }, 0);

  return (
    <ul className='collection basket-list'>
      <li className='collection-item grey lighten-2 active'>
        <span className='basket-title'>YOUR BASKET</span>
      </li>

      {order.length ? order.map((item) => <BasketItem key={item.mainId} removeFromBasket={removeFromBasket} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} {...item} />) : <li className='collection-item'>Your basket is empty</li>}

      <li className='collection-item grey lighten-2 active'>
        <span className='black-text'>Total sum: {totalPrice} euro</span>
        <button className='secondary-content btn btn-small blue darken-1-text'>ORDER</button>
      </li>
      <i className='material-icons basket-close' onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export { BasketList };
