import React from "react";
import { useState } from "react";
import "./CartItem.css";

function CartItem(props) {
  const [count, setCount] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const handleAddItem = () => {
    props.updateQty(props.id, props.qty + 1);
    setCount(count + props.price);
    setItemCount(itemCount + 1);
  };

  const handleRemoveItem = () => {
    if (props.qty > 0) {
      props.updateQty(props.id, props.qty - 1);
      setCount(count - props.price);
      setItemCount(itemCount - 1);
    } else {
      alert("No more to remove.");
    }
  };

  return (
    <div className="CartItem">
      <h3>{props.name}</h3>
      <p>Qty: {props.qty}</p>
      <button onClick={handleAddItem}>+</button>
      <button onClick={handleRemoveItem} disabled={props.qty <= 1}>
        -
      </button>
      <h3 id="count">${(props.qty * props.price).toFixed(2)}</h3>
      <br />
    </div>
  );
}

export default CartItem;
