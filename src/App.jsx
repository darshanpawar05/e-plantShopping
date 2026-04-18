import React, { useState } from "react";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="background-image">
      {!showProducts ? (
        <div>
          <h1>Welcome to Paradise Nursery</h1>
          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <div>
          <h2>Product List</h2>
          <p>Plants will be displayed here.</p>
        </div>
      )}
    </div>
  );
}

export default App;