import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "./CartSlice";

function CartItem() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // TOTAL CART AMOUNT
  const calculateTotalAmount = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // INCREMENT
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  // DECREMENT
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  // REMOVE ITEM
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>

          <p>
            Quantity:
            <button onClick={() => handleDecrement(item)}>-</button>
            {item.quantity}
            <button onClick={() => handleIncrement(item)}>+</button>
          </p>

          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => handleRemove(item.id)}>
            Delete
          </button>
        </div>
      ))}

      <h2>Total Amount: ${calculateTotalAmount()}</h2>

      <button onClick={() => alert("Checkout coming soon!")}>
        Checkout
      </button>
    </div>
  );
}

export default CartItem;