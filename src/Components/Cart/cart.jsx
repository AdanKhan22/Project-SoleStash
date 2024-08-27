import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./cart.css";

//<--======Redux Imports=========-->//

import { useSelector, useDispatch } from "react-redux";
import { cartOpen } from "../../State/Cart/cart.slice";
import { removeFromCart } from "../../State/Cart/cartItems.slice";

//<--====Components=========-->//
import Button from "../Buttons/button";

export default function cart() {
  const isCartOpen = useSelector((state) => state.cartOpen.value);
  const cartItems = useSelector((state) => state.cartItems.value);
  const dispatch = useDispatch();

  const [displayCartItems, setDisplayCartItems] = useState(0);
  const [isEmptyCartClicked, setisEmptyCartClicked] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  /*For now i am using useEffect for displaying cartItems but i might change this later*/
  useEffect(() => {
    if (cartItems.length <= 0) {
      setDisplayCartItems(0);
      setTotalAmount(0);
    } else {
      setDisplayCartItems(cartItems.length);
      const total = cartItems.reduce(
        (acc, item) => acc + parseInt(item.price),
        0
      );
      setTotalAmount(total);
    }
  }, [cartItems]);

  const closeCart = () => {
    dispatch(cartOpen());
  };

  const clearCart = () => {
    dispatch(removeFromCart());
    setisEmptyCartClicked(true);
  };

  return (
    <>
      <div className={`basket ${isCartOpen ? "basket-open" : "basket-hide"}`}>
        <div className="nav-cart">
          <h2 className="nav-cart-title">My Cart</h2>
          <span className="nav-cart-noofitems">{displayCartItems} items</span>
          <div>
            <Button
              className="nav-cart-close-btn"
              onClick={closeCart}
              text="Close"
            ></Button>

            <Button
              className="nav-cart-clearCart-btn"
              onClick={clearCart}
              text="Clear"
            ></Button>
          </div>
        </div>

        {/* Render cart items */}
        {cartItems.length > 0 && !isEmptyCartClicked ? (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-size">Size: {item.size}</p>
                <p className="cart-item-price">{item.price} Rs</p>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}

        <div className="cart-footer">
          <div>
            <span>Subtotal Amount</span>
            <h2>{totalAmount}$</h2>
          </div>
          <div>
            <Link to="../payment">
              <Button
                text="Checkout"
                className="cart-footer-checkout-btn"
                onClick={closeCart}
              ></Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
