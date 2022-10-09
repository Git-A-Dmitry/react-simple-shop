import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';
import { Pagination } from './Pagination';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [goodsPerPage] = useState(12);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.mainId === item.mainId);

    if (itemIndex < 0) {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.displayName);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el.mainId !== itemId);
    setOrder(newOrder);
  };

  const increaseQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const decreaseQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const closeAlert = () => {
    setAlertName('');
  };

  useEffect(function getGoods() {
    fetch(API_URL, { headers: { Authorization: API_KEY } })
      .then((response) => response.json())
      .then((data) => data.shop && setGoods(data.shop), setLoading(false));
  }, []);

  const indexOfLastItem = currentPage * goodsPerPage;
  const indexOfFirstItem = indexOfLastItem - goodsPerPage;
  const currentGoods = goods.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextPage = () => setCurrentPage(currentPage + 1);

  return (
    <main className='container content'>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? <Preloader /> : <GoodsList goods={currentGoods} addToBasket={addToBasket} />}

      {isBasketShow && (
        <BasketList //
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      )}

      {alertName && <Alert displayName={alertName} closeAlert={closeAlert} />}

      <Pagination //
        goodsPerPage={goodsPerPage}
        totalGoods={goods.length}
        paginate={paginate}
        prevPage={prevPage}
        nextPage={nextPage}
        currentPage={currentPage}
      />
    </main>
  );
}

export { Shop };
