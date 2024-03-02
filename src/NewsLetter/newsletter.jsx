import React from "react";
import "./newsletter.css";

export default function newsletter() {
  return (
    <>
      <section className="section newsletter" id="newsletter">
        <div className="newsletter__container container">
          <div className="title">
            <h1 className="primary__title">Newsletter</h1>
          </div>
          <div className="newsletter__center">
            <div className="newsletter__box">
              <h2>Newsletter</h2>
              <p>
                Subscribe to our newsletter and get 20% off your first purchase
              </p>
            </div>
            <div className="newsletter__box">
              <form action="#">
                <input type="email" placeholder="Your email" />
                <button>SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
