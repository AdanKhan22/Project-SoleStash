import React, { useState } from "react";
import "./page.css";
import Display from "./DisplayDetails/display";

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    saveInfo: false,
    shippingMethod: "Standard",
    paymentMethod: "COD",
    billingSameAsShipping: true,
    billingAddress: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <section className="payment-page-body">
        <div className="payment-page-container">
          <Display />
          <div className="payment-form-container">
            <h1>Payment Page</h1>
            <form onSubmit={handleSubmit}>
              <section>
                <h2>Contact</h2>
                <label>
                  Email or mobile phone number:
                  <input
                    type="text"
                    name="emailOrPhone"
                    value={formData.emailOrPhone}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="emailNewsOffers"
                    checked={formData.emailNewsOffers}
                    onChange={handleChange}
                  />
                  Email me with news and offers
                </label>
              </section>

              <section>
                <h2>Delivery</h2>
                <p>Pakistan</p>
                <div className="input-row">
                  <div className="input-field">
                    <label>
                      First name:
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="input-field">
                    <label>
                      Last name:
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>
                <label>
                  Address:
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </label>
                <div className="input-row">
                  <div className="input-field">
                    <label>
                      City:
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="input-field">
                    <label>
                      Postal code:
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>
                <label>
                  Phone:
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleChange}
                  />
                  Save this information for next time
                </label>
              </section>

              <section>
                <h2>Shipping method</h2>
                <label>
                  <input
                    type="radio"
                    name="shippingMethod"
                    value="Standard"
                    checked={formData.shippingMethod === "Standard"}
                    onChange={handleChange}
                  />
                  Standard (Rs 250.00)
                </label>
              </section>

              <section>
                <h2>Payment</h2>
                <p>All transactions are secure and encrypted.</p>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="COD"
                    checked={formData.paymentMethod === "COD"}
                    onChange={handleChange}
                  />
                  Cash on Delivery (COD)
                  <p style={{ marginLeft: "20px", fontStyle: "italic" }}>
                    You will receive the parcel at your doorstep and will
                    proceed with payment at the time of delivery.
                  </p>
                </label>
              </section>

              <section>
                <h2>Billing address</h2>
                <label>
                  <input
                    type="radio"
                    name="billingSameAsShipping"
                    value="true"
                    checked={formData.billingSameAsShipping}
                    onChange={() =>
                      setFormData({ ...formData, billingSameAsShipping: true })
                    }
                  />
                  Same as shipping address
                </label>
                <label>
                  <input
                    type="radio"
                    name="billingSameAsShipping"
                    value="false"
                    checked={!formData.billingSameAsShipping}
                    onChange={() =>
                      setFormData({ ...formData, billingSameAsShipping: false })
                    }
                  />
                  Use a different billing address
                </label>
                {!formData.billingSameAsShipping && (
                  <label>
                    Billing address:
                    <input
                      type="text"
                      name="billingAddress"
                      value={formData.billingAddress}
                      onChange={handleChange}
                    />
                  </label>
                )}
              </section>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentPage;
