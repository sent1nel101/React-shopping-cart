import React from "react";
import { useState } from "react";
import "./CartItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'

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
      <button onClick={handleAddItem}><FontAwesomeIcon style={{color: 'green'}} icon={faPlus} /></button>
      <button onClick={handleRemoveItem} disabled={props.qty <= 1}><FontAwesomeIcon style={{color: 'red'}} icon={faMinus} /></button>
      <p id="count">${(props.qty * props.price).toFixed(2)}</p>
      <br />
    </div>
  );
}

export default CartItem;
