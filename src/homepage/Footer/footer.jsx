/*Lots of links might be removed due to the shortage 
   of time of implementing every feature*/

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
                Defense City , Islamabad
              </div>
              <div>
                <span>
                  <svg>
                    <use xlinkHref="./images/sprite.svg#icon-envelop" />
                  </svg>
                </span>
                adanjavedkhan67@gmail.com
              </div>
              <div>
                <span>
                  <svg>
                    <use xlinkHref="./images/sprite.svg#icon-phone" />
                  </svg>
                </span>
                00000-00000-00000
              </div>
              <div>
                <span>
                  <svg>
                    <use xlinkHref="./images/sprite.svg#icon-paperplane" />
                  </svg>
                </span>
                Pakistan
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
