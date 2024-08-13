import React from "react";
import Navbar from "../../Components/Navbar/navbar.jsx";
import "./productDetails.css";

export default function productDetails() {
  return (
    <div>
      <Navbar></Navbar>
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
            <h3>Product Name Goes Here</h3>
            <h5>
              Price: Price goes here <del>#discounted price here</del>
            </h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              accusantium, aspernatur provident beatae corporis veniam atque
              facilis, consequuntur assumenda, vitae dignissimos iste
              exercitationem dolor eveniet alias eos ullam nesciunt voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              accusamus natus dolorum. Quaerat nulla quod doloremque, officia
              quis provident amet adipisci unde esse iure delectus, maxime
              inventore optio fuga nisi?
            </p>
            <div className="sizes">
              <p>Size:</p>
              <select name="Size" id="size" className="size-option">
                <option value="xxl">XXL</option>
                <option value="xl">XL</option>
                <option value="medium">Medium</option>
                <option value="small">Small</option>
              </select>
            </div>
            <div className="quantity">
              <input type="number" defaultValue={1} min={1} />
              <button>Add to Cart</button>
            </div>
            <div>
              <p>Delivery:</p>
              <p>
                Free standard shipping on orders over $35 before tax, plus free
                returns.
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
  );
}
