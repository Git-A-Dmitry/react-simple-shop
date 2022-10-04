function BasketItem(props) {
  const {
    mainId, //
    displayName,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    increaseQuantity,
    decreaseQuantity,
  } = props;

  return (
    <li className='collection-item'>
      {displayName}
      <i className='material-icons control' onClick={() => decreaseQuantity(mainId)}>
        remove
      </i>
      x {quantity}
      <i className='material-icons control' onClick={() => increaseQuantity(mainId)}>
        add
      </i>{' '}
      = {price.finalPrice * quantity}
      <span className='secondary-content' onClick={() => removeFromBasket(mainId)}>
        <i className='material-icons basket-delete grey lighten-2'>close</i>
      </span>
    </li>
  );
}

export { BasketItem };
