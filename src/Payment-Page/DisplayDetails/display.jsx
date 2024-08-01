import React from "react";
import styles from "./displayPayment.module.css";
import { product1 } from "../../ListedProducts"; // Replace with actual path
import { addedItems as importedcart } from "../../ListedProducts/addeditems";

export default function Display({ Id, title }) {
  return (
    <div className={styles.wrappermain}>
      {/* Product Box */}
      <div className={styles.wrapper}>
        <div className={styles.wrapperin}>
          <img src={product1} alt="img" className={styles.productImage} />
          <div className={styles.textWrapper005}>
            <span className={styles.text0034} id="textid12">
              {importedcart[1]}
            </span>
            <span className={styles.text0034} id="textid13">
              Condition
            </span>
          </div>
        </div>
        <div className={styles.pricetag13}>
          <span id="pricetagtext">$100</span>
        </div>
      </div>

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
          Subtotal <span>$100</span>
        </span>
        <span>
          Shipping <span>$100</span>
        </span>
        <span>
          <b>Total</b> <span>$100</span>
        </span>
      </div>
    </div>
  );
}
