function Cart(props) {
  const { quantity = 0 } = props;
  return (
    <div className='cart blue darken-2 white-text'>
      <i className='material-icons'>shopping_cart</i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
      {/* <i className='material-icons'>local_grocery_store</i> */}
    </div>
  );
}

export { Cart };
