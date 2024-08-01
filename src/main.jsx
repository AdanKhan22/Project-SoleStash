import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import PaymentPage from "./Payment-Page/index.jsx";
import ProductDec from "./Product-Description-Page/index.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    path: "/products/:id",
    element: <ProductDec />,
  },
  {
    path: "/products/:id",
    element: <ProductDec />,
  },
  {
    path: "/products/:id",
    element: <ProductDec />,
  },
  {
    path: "/products/:id",
    element: <ProductDec />,
  },
  {
    path: "/products/:id",
    element: <ProductDec />,
  },
  {
    path: "/products/:id",
    element: <ProductDec />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
