import React from "react";
import { useState, useRef, useEffect } from "react";
import "./header.css";
import sprite from "../../assets/Icons/sprite.svg";

import { useSelector, useDispatch } from "react-redux";
import { cartOpen } from "../../State/Cart/cart.slice";

export default function header() {
  const dispatch = useDispatch();

  const menuRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [fixNav, setFixNav] = useState(false);

  //--------------------Handles the opening and closing of nav bar in mobile mode----------------//
  const handleNavToggle = () => {
    setFixNav(!fixNav);
    setIsActive(!isActive);
    document.body.classList.toggle("active");
  };

  const handleNavClose = () => {
    setIsActive(false);
    document.body.classList.remove("active");
  };
  //...................................................................................................

  const openCart = () => {
    dispatch(cartOpen());
  };

  return (
    <>
      <header id="header" className="header">
        {/* Navigation */}
        <div className={`navigation ${fixNav ? "fix__nav" : ""}`}>
          <div className="container">
            <nav className="nav__center">
              <div className="nav__header">
                <div className="nav__logo">
                  <h1>
                    SOLE<span> STASH</span>
                  </h1>
                </div>
                <div className="nav__hamburger" onClick={handleNavToggle}>
                  <span>
                    <svg>
                      <use xlinkHref={`${sprite}#icon-menu`} />
                    </svg>
                  </span>
                </div>
              </div>
              <div
                ref={menuRef}
                className="nav__menu"
                style={{ left: isActive ? "0px" : "-40rem" }}
              >
                <div className="menu__top">
                  <h1 className="nav__category">
                    SOLE<span> STASH</span>
                  </h1>
                  <div className="close__toggle" onClick={handleNavClose}>
                    <svg>
                      <use xlinkHref={`${sprite}#icon-cross`} />
                    </svg>
                  </div>
                </div>
                <ul className="nav__list">
                  <li className="nav__item">
                    <a href="#header" className="nav__link scroll-link">
                      Home
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="#featured" className="nav__link scroll-link">
                      Featured
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="#blog" className="nav__link scroll-link">
                      Blog
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="#newsletter" className="nav__link scroll-link">
                      Subscribe
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="#" className="nav__link">
                      Login
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="#" className="nav__link">
                      Register
                    </a>
                  </li>
                </ul>
                <ul className="nav__icons">
                  <a href="#" className="icon__item">
                    <svg>
                      <use xlinkHref={`${sprite}#icon-search`} />
                    </svg>
                  </a>
                  <a href="/signin" className="icon__item">
                    <svg>
                      <use xlinkHref={`${sprite}#icon-user`} />
                    </svg>
                  </a>
                  <a href="#" className="icon__item" onClick={openCart}>
                    <svg>
                      <use xlinkHref={`${sprite}#icon-shopping-basket`} />
                    </svg>
                    <span>2</span>
                  </a>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/* Hero */}
        <div className="hero">
          <div className="hero__content container">
            <h1>
              <span>
                Sole <span className="color">Mates</span> Wanted:
              </span>
              <span>Where Thrifted Shoes and Happy Feet Meet!</span>
            </h1>
            <a href="#" className="btn btn-hero">
              shop now
            </a>
          </div>
          <a href="#new__arrival" className="goto__next scroll-link">
            <span>
              <svg>
                <use xlinkHref={`${sprite}#icon-angle-down`} />
              </svg>
            </span>
          </a>
        </div>
      </header>
    </>
  );
}
