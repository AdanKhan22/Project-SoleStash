import React from "react";
import "./newArrival.css";
import Products from "./products.jsx";
import { inventoryProducts } from "../../ListedProducts";

export default function newArrival() {
  return (
    <>
      <main className="newArrival-Sec">
        <div className="primary__title">
          <h1>New Arrival</h1>
        </div>
        <ul className="arrivals_container">
          {inventoryProducts.map((product, index) => (
            <Products
              key={index}
              Id={product.Id}
              title={product.name}
              image={product.image}
              price={product.price}
              condition={product.condition}
              inInventory={product.inInventory}
            />
          ))}
        </ul>
      </main>
    </>
  );
}
