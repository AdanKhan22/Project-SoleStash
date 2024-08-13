import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="ecom-navbar">
      <div className="ecom-navbar-logo">
        <a href="/">
          <img alt="Logo" src="path/to/logo.png" />
        </a>
      </div>
      <ul className="ecom-navbar-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/featured-products">Featured</a>
        </li>
        <li>
          <a href="/recommended-products">Recommended</a>
        </li>
      </ul>
      <div className="ecom-navbar-search">
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
      </div>
      <div className="ecom-navbar-icons">
        <a href="/cart" className="ecom-navbar-cart">
          <img
            className="ecom-shopping-icon"
            style={{ fontSize: "2.4rem" }}
          ></img>
          <span className="ecom-cart-count">5</span>
        </a>
        <a href="/signin" className="ecom-navbar-signin">
          Sign In
        </a>
        <a href="/signup" className="ecom-navbar-signup">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
