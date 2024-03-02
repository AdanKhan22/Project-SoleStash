import React from "react";
import { jordons, vans, product1, product2 } from "../ListedProducts/index.js";
import "./newArrival.css";
import sprite from "../assets/Icons/sprite.svg";

export default function newArrival() {
  return (
    <>
      <main>
        {/* New Arrival */}
        <section className="section new__arrival" id="new__arrival">
          <div className="arrivals container">
            <div className="title">
              <h1 className="primary__title">New Arrival</h1>
            </div>
            <div className="arrival__center">
              <div className="product">
                <div className="img__container">
                  <img src={vans} alt="" />
                </div>
                <div className="product__bottom">
                  <div className="rating">
                    <span>
                      <svg>
                        <use xlinkHref={`${sprite}#icon-star-full`} />
                      </svg>
                    </span>
                    <span>
                      <svg>
                        <use xlinkHref={`${sprite}#icon-star-full`} />
                      </svg>
                    </span>
                    <span>
                      <svg>
                        <use xlinkHref={`${sprite}#icon-star-full`} />
                      </svg>
                    </span>
                    <span>
                      <svg>
                        <use xlinkHref={`${sprite}#icon-star-full`} />
                      </svg>
                    </span>
                    <span>
                      <svg>
                        <use xlinkHref="#icon-star-empty" />
                      </svg>
                    </span>
                  </div>
                  <h3>Vans Old Skool</h3>
                  <a href="#">Add To Cart</a>
                </div>
              </div>
              <div className="product">
                <div className="img__container">
                  <img src={jordons} alt="" />
                </div>
                <div className="product__bottom">
                  <div className="rating">
                    <span>
                      <svg>
                        <use xlinkHref={`${sprite}#icon-star-full`} />
                      </svg>
                    </span>
                    <span>
                      <svg>
                        <use xlinkHref={`${sprite}#icon-star-full`} />
                      </svg>
                    </span>
                    <span>
                      <svg>
                        <use xlinkHref={`${sprite}#icon-star-full`} />
                      </svg>
                    </span>
                    <span>
                      <svg>
                        <use xlinkHref={`${sprite}#icon-star-full`} />
                      </svg>
                    </span>
                    <span>
                      <svg>
                        <use xlinkHref="#icon-star-empty" />
                      </svg>
                    </span>
                  </div>
                  <h3>Jordons AirForce</h3>
                  <a href="#">Add To Cart</a>
                </div>
              </div>
              <div className="product">
                <div className="img__container">
                  <img src={product1} alt="" />
                </div>
                <div className="product__bottom">
                  <div className="rating">
                    <span>
                      <svg>
                        <use xlinkHref={`${sprite}#icon-star-full`} />
                      </svg>
                    </span>
                    <span>
                      <svg>
                        <use xlinkHref={`${sprite}#icon-star-full`} />
                      </svg>
                    </span>
                    <span>
                      <svg>
                        <use xlinkHref={`${sprite}#icon-star-full`} />
                      </svg>
                    </span>
                    <span>
                      <svg>
                        <use xlinkHref={`${sprite}#icon-star-full`} />
                      </svg>
                    </span>
                    <span>
                      <svg>
                        <use xlinkHref="#icon-star-empty" />
                      </svg>
                    </span>
                  </div>
                  <h3>Yeezys</h3>
                  <a href="#">Add To Cart</a>
                </div>
              </div>
              <div className="product">
                <div className="img__container">
                  <img src={product2} alt="" />
                </div>
                <div className="product__bottom">
                  <div className="rating">
                    <span>
                      <svg>
                        <use xlinkHref={`${sprite}#icon-star-full`} />
                      </svg>
                    </span>
                    <span>
                      <svg>
                        <use xlinkHref={`${sprite}#icon-star-full`} />
                      </svg>
                    </span>
                    <span>
                      <svg>
                        <use xlinkHref={`${sprite}#icon-star-full`} />
                      </svg>
                    </span>
                    <span>
                      <svg>
                        <use xlinkHref={`${sprite}#icon-star-full`} />
                      </svg>
                    </span>
                    <span>
                      <svg>
                        <use xlinkHref="#icon-star-empty" />
                      </svg>
                    </span>
                  </div>
                  <h3>Jordons AirForce Red</h3>
                  <a href="#">Add To Cart</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
