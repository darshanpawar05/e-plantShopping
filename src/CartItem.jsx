function CartItem({ item }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <button>Increase</button>
      <button>Decrease</button>
      <button>Remove</button>
    </div>
  );
}

export default CartItem;