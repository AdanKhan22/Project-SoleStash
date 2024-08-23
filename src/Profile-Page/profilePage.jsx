import React from "react";
import "./profilePage.css";
import { useAuth } from "../../Firebase/Context/authContext";
import { doSignOut } from "../../Firebase/auth";

export default function profilePage() {
  const { userLoggedIn } = useAuth();

  return (
    <>
      {userLoggedIn ? (
        <>
          <>
            <div className="profile-container">
              <div className="profile-sidebar">
                <div className="user-info">
                  <img
                    src="profile-pic.jpg"
                    alt="User Profile Picture"
                    className="profile-pic"
                  />
                  <h2 className="user-name">Ali</h2>
                  <p className="user-email">Ali@example.com</p>
                </div>
                <nav className="profile-nav">
                  <ul>
                    <li>
                      <a href="#dashboard" className="active">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#orders">Order History</a>
                    </li>
                    <li>
                      <a href="#track-order">Track Order</a>
                    </li>
                    <li>
                      <a href="#settings">Profile Settings</a>
                    </li>
                    <li>
                      <a href="#address">Manage Addresses</a>
                    </li>
                    <li>
                      <a
                        href="#logout"
                        onClick={() => {
                          doSignOut().then(() => {
                            navigate("/login");
                          });
                        }}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="profile-content">
                <section id="dashboard" className="dashboard-section">
                  <h2>Dashboard</h2>
                  <p>
                    Welcome back, Ali! Here's a quick overview of your recent
                    activity.
                  </p>
                  {/* Dashboard Content Here */}
                </section>
                <section id="orders" className="orders-section">
                  <h2>Order History</h2>
                  <table className="order-table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#12345</td>
                        <td>2024-08-01</td>
                        <td>Delivered</td>
                        <td>$150.00</td>
                        <td>
                          <a href="#view-order" className="btn">
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>#12344</td>
                        <td>2024-07-20</td>
                        <td>In Transit</td>
                        <td>$220.00</td>
                        <td>
                          <a href="#view-order" className="btn-profile-sec">
                            Track
                          </a>
                        </td>
                      </tr>
                      {/* More Orders */}
                    </tbody>
                  </table>
                </section>
                <section id="track-order" className="track-order-section">
                  <h2>Track Order</h2>
                  <form action="" method="post" className="track-order-form">
                    <label htmlFor="order-id">Enter Order ID:</label>
                    <input
                      type="text"
                      id="order-id"
                      name="order-id"
                      placeholder="e.g., 12345"
                      required=""
                    />
                    <button type="submit" className="btn track-btn">
                      Track Order
                    </button>
                  </form>
                  {/* Order Tracking Details Here */}
                </section>
                <section id="settings" className="settings-section">
                  <h2>Profile Settings</h2>
                  <form action="" method="post" className="settings-form">
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue="Ali"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        defaultValue="Ali@example.com"
                        required=""
                      />
                    </div>
                    <button type="submit" className="btn save-btn">
                      Save Changes
                    </button>
                  </form>
                </section>
                <section id="address" className="address-section">
                  <h2>Manage Addresses</h2>
                  <div className="address-list">
                    <div className="address-card">
                      <p>Ali Doe</p>
                      <p>123 Main St</p>
                      <p>Lahore, NY 10001</p>
                      <p>Pakistan</p>
                      <a href="#edit-address" className="btn">
                        Edit
                      </a>
                    </div>
                    <div className="address-card">
                      <p>Ali Doe</p>
                      <p>123 Main St</p>
                      <p>Lahore, NY 10001</p>
                      <p>Pakistan</p>
                      <a href="#edit-address" className="btn">
                        Edit
                      </a>
                    </div>
                    {/* More Addresses */}
                  </div>
                </section>
              </div>
            </div>
          </>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <h1>Register New Account</h1>
        </>
      )}
    </>
  );
}
