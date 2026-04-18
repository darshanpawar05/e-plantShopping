import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const plants = [
    { id: 1, name: "Aloe Vera", price: 10, category: "Indoor", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Snake Plant", price: 15, category: "Indoor", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Peace Lily", price: 20, category: "Indoor", image: "https://via.placeholder.com/100" },

    { id: 4, name: "Rose", price: 12, category: "Outdoor", image: "https://via.placeholder.com/100" },
    { id: 5, name: "Tulip", price: 14, category: "Outdoor", image: "https://via.placeholder.com/100" },
    { id: 6, name: "Sunflower", price: 18, category: "Outdoor", image: "https://via.placeholder.com/100" }
  ];

  const categories = ["Indoor", "Outdoor"];

  return (
    <div>
      <h1>Plant Shop</h1>

      {/* Navbar */}
      <nav>
        <h2>Paradise Nursery</h2>
      </nav>

      {categories.map(category => (
        <div key={category}>
          <h2>{category} Plants</h2>

          {plants
            .filter(p => p.category === category)
            .map(p => {
              const alreadyAdded = cart.find(item => item.id === p.id);

              return (
                <div key={p.id}>
                  <img src={p.image} alt={p.name} />
                  <h3>{p.name}</h3>
                  <p>${p.price}</p>

                  <button
                    onClick={() => dispatch(addItem(p))}
                    disabled={alreadyAdded}
                  >
                    {alreadyAdded ? "Added" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
}

export default ProductList;