import React from "react";
import "./signup.css";
import Navbar from "../../Components/Navbar/navbar";
export default function login() {
  return (
    <>
      <Navbar />
      <div className="login-page-container">
        <div className="login-page-wrapper">
          <div className="section-img-login">
            <img src="" alt="This is an img" />
          </div>
          <div className="section-form-login">
            <h3>Registration Form</h3>
            <div>
              <input type="text" placeholder="First-Name" />
              <input type="text" placeholder="last-Name" />
            </div>
            <div>
              <input type="text" placeholder="Username" />
              <br />

              <input type="email" placeholder="Email" />
              <br />
              <input type="password" placeholder="Password" />
              <br />
              <input type="password" placeholder="Confirm Password" />
            </div>
            <div className="login-button-wrapper">
              <button type="submit">Register</button>
              <span>
                <b>OR</b>
              </span>
              <button type="submit">Continue With Google</button>
            </div>
            {/* Goes to signup page */}
            <h2>
              Already Have an Account? <a href="">Sign-In</a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
