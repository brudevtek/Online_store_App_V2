import React, { useContext, useEffect, useState } from 'react';
import OneCartItem from '../components/OneCartItem';
import CartLayout from '../layout/CartLayout';
import { CartQtyContext } from '../App';

function ShoppingCart() {
  const [qtyCart, setQtyCart] = useContext(CartQtyContext);
  
  const [items, setItems] = useState([]);
  const rawdata = JSON.parse(window.localStorage.getItem('rawdata'));

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('selecteditems'));
    if (items) {
      setItems(items);
    }
  }, []);

   function handleRemove(id) {
     const newList = items.filter((item) => item.unique_id !== id);
     localStorage.setItem('selecteditems', JSON.stringify(newList));
     setItems(newList);
     setQtyCart(newList.length);
    console.log("hiii")
   }

 

  return items.map((x) => {
    return (
      <>
        <CartLayout>
          <OneCartItem
            key={x.selecteid}
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
            id={rawdata.filter((element) => element.id === x.selectedid)[0].id}
            removeitem={() =>handleRemove(x.unique_id)}
          />
        </CartLayout>
      </>
    );
  });
}

export default ShoppingCart;
