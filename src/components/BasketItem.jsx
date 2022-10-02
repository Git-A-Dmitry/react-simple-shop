function BasketItem(props) {
  const { mainId, displayName, granted, price, quantity } = props;

  return (
    <li className='collection-item'>
      {displayName} x {quantity} = {price.finalPrice}
      <span class='secondary-content'>
        <i class='material-icons basket-delete'>close</i>
      </span>
    </li>
  );
}

export { BasketItem };
