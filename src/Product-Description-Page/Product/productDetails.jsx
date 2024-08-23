import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/navbar.jsx";
import { inventoryProducts } from "../../ListedProducts/index.js";
import "./productDetails.css";

import { useDispatch } from "react-redux";
import { addToCart } from "../../State/Cart/cartItems.slice.js";

export default function ProductDetails() {
  const [lastSegment, setLastSegment] = useState("");
  const [currentItem, setCurrentItem] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const url = window.location.href;
    const urlSegments = url.split("/");
    const segment = urlSegments[urlSegments.length - 1];
    setLastSegment(segment);

    const product = inventoryProducts.find((item) => item.Id == segment);

    if (product) {
      setCurrentItem({
        name: product.name,
        price: product.price,
        description: product.description,
        size: product.size,
        condition: product.condition,
      });
      console.log(currentItem.name);
    }
  }, [lastSegment]);

  const fnaddToCart = () => {
    const product = inventoryProducts.find((item) => item.Id == lastSegment);

    if (product) {
      dispatch(
        addToCart({
          id: product.Id,
          name: product.name,
          price: product.price,
        })
      );
    }
  };

  return (
    <>
      <div>
        <div className="Product-details-body">
          <section className="product-container">
            {/* left side */}
            <div className="img-card">
              <img src="img/image-1.png" alt="" id="featured-image" />
              {/* small img */}
              <div className="small-Card">
                <img src="img/image-1.png" alt="" className="small-Img" />
                <img src="img/small-img-2.png" alt="" className="small-Img" />
                <img src="img/small-img-3.png" alt="" className="small-Img" />
                <img src="img/image-1.png" alt="" className="small-Img" />
              </div>
            </div>
            {/* Right side */}
            <div className="product-info">
              <h3>{currentItem ? currentItem.name : "Loading.."}</h3>
              <h5>
                Price: {currentItem.price} Rs <del>#discounted price here</del>
              </h5>
              <p>{currentItem.description}</p>
              <div className="sizes">
                <p>
                  Size: <strong>{currentItem.size}</strong>{" "}
                </p>
                Condition: <strong>{currentItem.condition}</strong>{" "}
              </div>
              <div className="quantity">
                <input type="number" defaultValue={1} min={1} />
                {/* Disable the button after item has been added */}
                <button onClick={fnaddToCart}>Add to Cart</button>
              </div>
              <div>
                <p>Delivery:</p>
                <p>
                  Free standard shipping on orders over $35 before tax, plus
                  free returns.
                </p>
                <div className="delivery">
                  <p>TYPE</p> <p>HOW LONG</p> <p>HOW MUCH</p>
                </div>
                <hr />
                <div className="delivery">
                  <p>Standard delivery</p>
                  <p>1-4 business days</p>
                  <p>$4.50</p>
                </div>
                <hr />
                <div className="delivery">
                  <p>Express delivery</p>
                  <p>1 business day</p>
                  <p>$10.00</p>
                </div>
                <hr />
                <div className="delivery">
                  <p>Pick up in store</p>
                  <p>1-3 business days</p>
                  <p>Free</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
