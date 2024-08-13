import React, { useState } from "react";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { cartOpen } from "../../State/Cart/cart.slice";

export default function cart() {
  const isCartOpen = useSelector((state) => state.cartOpen.value);
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(cartOpen());
    console.log(isCartOpen);
  };

  return (
    <>
      <div className={isCartOpen ? "basket" : "basket-hide"}>
        <div className="nav-cart">
          <h2 className="nav-cart-title">My Cart</h2>
          <span className="nav-cart-noofitems">0 items</span>
          <button className="nav-cart-close-btn" onClick={closeCart}>
            Close
          </button>
          <button className="nav-cart-clearCart-btn">Clear</button>
        </div>

        <div className="cart-item">
          <img src="" alt="Product Image" className="cart-item-image" />
          <div className="cart-item-details">
            <h3 className="cart-item-name">Product Name</h3>
            <p className="cart-item-size">Size: M</p>
            <p className="cart-item-price">$19.99</p>
          </div>
        </div>

        <div className="cart-footer">
          <div>
            <span>Subtotal Amount</span>
            <h2>912$</h2>
          </div>
          <button className="cart-footer-checkout-btn"></button>
        </div>
      </div>
    </>
  );
}
