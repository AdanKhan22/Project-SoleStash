import React from "react";
import "./newArrival.css";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

export default function products({
  Id,
  title,
  image,
  price,
  size,
  condition,
  inInventory,
}) {
  return (
    <>
      <section className="section new__arrival" id="new__arrival">
        {/* <span>Insert tag Line</span> */}

        <div className="product">
          <div className="img__container">
            <LazyLoad
              height={200}
              offset={100}
              placeholder={<div>Loading...</div>}
            >
              <img src={image} alt="This is a picture of shoes" />
            </LazyLoad>
          </div>
          <div className="product__bottom">
            <h3>{title}</h3>

            <div className="rating">
              <span id="__price">RS {price}</span>
              <span id="__size">Size {size}</span>
            </div>
            <span>Condtion {condition}</span>
            <div className="btn-addToCart">
              <Link to={`/products/${Id}`}>Add To Cart</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
