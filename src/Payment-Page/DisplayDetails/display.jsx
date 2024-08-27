import React, { useEffect, useState } from "react";
import styles from "./displayPayment.module.css";
import { useSelector } from "react-redux";
//This code is a mess ill fix is later

export default function Display() {
  const cartItems = useSelector((state) => state.cartItems.value);
  const [totalPrice, setTotalAmount] = useState(0);

  useEffect(() => {
    if (cartItems.length <= 0) {
      setTotalAmount(0);
    } else {
      const total = cartItems.reduce(
        (acc, item) => acc + parseInt(item.price),
        0
      );
      setTotalAmount(total);
    }
  }, [cartItems]);

  return (
    <div className={styles.wrappermain}>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div className={styles.wrapper}>
            <div key={index} className={styles.wrapperin}>
              <img src="" alt="img" className={styles.productImage} />
              <div className={styles.textWrapper005}>
                <span className={styles.text0034} id="textid12">
                  {item.name}
                </span>
                {/* <span className={styles.text0034} id="textid13">
                  {item.condition}
                </span> */}
              </div>
            </div>
            <div className={styles.pricetag13}>
              <span id="pricetagtext">{item.price} Rs</span>
            </div>
          </div>
        ))
      ) : (
        <p>Empty</p>
      )}

      <div className={styles.couponinsert}>
        <form className={styles.discountform}>
          <input
            type="text"
            placeholder="Enter coupon code"
            className={styles["discount-input"]}
          />
          <button type="submit" className={styles["discount-btn"]}>
            Apply
          </button>
        </form>
      </div>

      <div className={styles.pricedetails}>
        <span>
          Subtotal <span>{totalPrice} Rs</span>
        </span>
        <span>
          Shipping <span>250 Rs</span>
        </span>
        <span>
          <b>Total</b> <span>{totalPrice} Rs</span>
        </span>
      </div>
    </div>
  );
}
