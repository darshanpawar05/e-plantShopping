import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const plants = [
    { id: 1, name: "Aloe Vera", price: 10 },
    { id: 2, name: "Snake Plant", price: 15 },
    { id: 3, name: "Rose", price: 12 },
    { id: 4, name: "Tulip", price: 14 },
    { id: 5, name: "Cactus", price: 8 },
    { id: 6, name: "Bonsai", price: 25 },
  ];

  // ADD TO CART
  const addToCart = (plant) => {
    const exists = cart.find((item) => item.id === plant.id);
    if (!exists) {
      setCart([...cart, { ...plant, qty: 1 }]);
    }
  };

  // INCREASE
  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // DECREASE
  const decrease = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // DELETE
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // TOTAL PRICE
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div>
      <h1>🌿 Paradise Nursery</h1>

      <h2>Plants</h2>
      {plants.map((p) => {
        const added = cart.find((item) => item.id === p.id);

        return (
          <div key={p.id}>
            <h3>{p.name}</h3>
            <p>${p.price}</p>

            <button
              onClick={() => addToCart(p)}
              disabled={added}
            >
              {added ? "Added" : "Add to Cart"}
            </button>
          </div>
        );
      })}

      <h2>🛒 Cart ({cart.length})</h2>

      <p>Total: ${total}</p>

      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - ${item.price} x {item.qty}
          </p>

          <button onClick={() => decrease(item.id)}>-</button>
          <button onClick={() => increase(item.id)}>+</button>

          <button onClick={() => removeItem(item.id)}>
            Delete
          </button>
        </div>
      ))}

      <br />

      <button>Checkout (Coming Soon)</button>
    </div>
  );
}

export default App;