import React, { useEffect, useState } from 'react';
import OneCartItem from '../components/OneCartItem';
import CartLayout from "../layout/CartLayout"

function CartPage() {
  const [items, setItems] = useState([]);
  const rawdata= JSON.parse(window.localStorage.getItem('rawdata'))

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('selecteditems'));
    if (items) {
      setItems(items);
    }
  }, []);

  return items.map((x) => {
    return (
      <>
        <CartLayout>
          <OneCartItem
            image={
              rawdata.filter((element) => element.id === x.selectedid)[0].img
            }
            name={
              rawdata.filter((element) => element.id === x.selectedid)[0].name
            }
            price={
              rawdata.filter((element) => element.id === x.selectedid)[0].price
            }
            size={x.size}
            color={x.color}
          />
        </CartLayout>
      </>
    );
  });
}

export default CartPage;
