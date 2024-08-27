import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

//<--===========Redux Imports ==========--->
import { useDispatch } from "react-redux";
import { cartOpen } from "../../State/Cart/cart.slice";

//<--=========== Icons (temporary) ==========--->
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import sprite from "../../assets/Icons/sprite.svg";

//<--====Components=========-->//
import Cart from "../Cart/cart";

export default function CustomNavbar() {
  const [menuActive, setMenuActive] = useState(false);
  const menuRef = useRef(null);
  const dispatch = useDispatch();

  const handleNavToggle = () => {
    setMenuActive(!menuActive);
  };

  const openCart = () => {
    handleNavToggle();
    dispatch(cartOpen());
  };

  return (
    <>
      <Cart></Cart>
      <div
        className={`custom-navbar-wrapper ${
          menuActive ? "overlay-active" : ""
        }`}
      >
        <nav className="fixed-top-bar">
          <div className="nav-container">
            <div className="logo-section">
              <h1>
                Sole <span> Stash </span>
              </h1>
            </div>
            <div
              className="menu-panel"
              ref={menuRef}
              style={{ left: menuActive ? "0" : "-40rem" }}
            >
              <div
                className="menu-top"
                style={{ opacity: menuActive ? "100" : "0" }}
              >
                <GiCancel className="close-btn" onClick={handleNavToggle} />
              </div>
              <div className="nav-items">
                <div className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </div>
                <div className="nav-item" onClick={openCart}>
                  <svg>
                    <use xlinkHref={`${sprite}#icon-shopping-basket`} />
                  </svg>
                </div>
                <div className="nav-item">
                  <Link to="/profile" className="nav-link">
                    <p>Profile</p>
                  </Link>
                </div>
              </div>
            </div>
            <GiHamburgerMenu className="menu-btn" onClick={handleNavToggle} />
          </div>
        </nav>
      </div>
    </>
  );
}
