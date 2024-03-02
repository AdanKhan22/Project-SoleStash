import React from "react";
import "./footer.css";

export default function footer() {
  return (
    <>
      <footer id="footer" className="section footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer-top__box">
              <h3>EXTRAS</h3>
              <a href="#">Brands</a>
              <a href="#">Gift Certificates</a>
              <a href="#">Affiliate</a>
              <a href="#">Specials</a>
              <a href="#">Site Map</a>
            </div>
            <div className="footer-top__box">
              <h3>INFORMATION</h3>
              <a href="#">About Us</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms &amp; Conditions</a>
              <a href="#">Contact Us</a>
              <a href="#">Site Map</a>
            </div>
            <div className="footer-top__box">
              <h3>MY ACCOUNT</h3>
              <a href="#">My Account</a>
              <a href="#">Order History</a>
              <a href="#">Wish List</a>
              <a href="#">Newsletter</a>
              <a href="#">Returns</a>
            </div>
            <div className="footer-top__box">
              <h3>CONTACT US</h3>
              <div>
                <span>
                  <svg>
                    <use xlinkHref="./images/sprite.svg#icon-location" />
                  </svg>
                </span>
                43 Dream House, Dreammy street, 7131 Dreamville, USA
              </div>
              <div>
                <span>
                  <svg>
                    <use xlinkHref="./images/sprite.svg#icon-envelop" />
                  </svg>
                </span>
                basudevnayak31@gmail.com
              </div>
              <div>
                <span>
                  <svg>
                    <use xlinkHref="./images/sprite.svg#icon-phone" />
                  </svg>
                </span>
                7407-338-338
              </div>
              <div>
                <span>
                  <svg>
                    <use xlinkHref="./images/sprite.svg#icon-paperplane" />
                  </svg>
                </span>
                Dream City, KOLKATA
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
