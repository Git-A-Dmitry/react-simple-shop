function GoodsItem(props) {
  const { mainId, displayName, granted, price, addToBasket = Function.prototype } = props;

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={granted[0].images.background} alt='' />
      </div>

      <div className='card-content'>
        <span className='card-title' style={{ fontWeight: '600' }}>
          {displayName}
        </span>
        <span className='description'>{granted[0].description}</span>
        <p>{}</p>
      </div>

      <div className='card-action'>
        <button className='btn' onClick={() => addToBasket({ mainId, displayName, price })}>
          Buy
        </button>
        <span className='right' style={{ fontSize: '1.3rem' }}>
          {' '}
          <span className='card-price'>
            {String.fromCharCode(8364)} {price.finalPrice}
          </span>
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
