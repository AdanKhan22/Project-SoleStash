import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import PaymentPage from "./Payment-Page/index.jsx";
import ProductDec from "./Product-Description-Page/index.jsx";
import SignUp from "./User-Authetication-Page/SignUp/signup.jsx";
import SignIn from "./User-Authetication-Page/SignIn/signIn.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "../Redux/Store/store.js";

import { Provider } from "react-redux";
import { AuthProvider } from "../Firebase/Context/authContext/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/product",
    element: <ProductDec />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/products/:id",
    element: <ProductDec />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
