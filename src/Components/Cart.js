import CartItem from "./CartItem";
import { useState, useEffect } from "react";
import "./Cart.css";

const Cart = ({ items }) => {
  const initialState = JSON.parse(localStorage.getItem('items'))
  const [newItems, setNewItems] = useState(initialState || items);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(newItems));
  }, [newItems]);

  const updateQty = (id, newQty) => {
    const addedItems = newItems.map((item) => {
      if (item.id === id) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    setNewItems(addedItems);
  };
  const grandTotal = newItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <div className="Cart">
      <h1>React Shopping Cart</h1>
      <div className="cartItems">
        {newItems.map((item) => (
          <CartItem key={item.id} {...item} updateQty={updateQty} />
        ))}
      </div>
      <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
