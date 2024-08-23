import App from "../src/App.jsx";
import PaymentPage from "../src/Payment-Page/index.jsx";
import ProductDec from "../src/Product-Description-Page/index.jsx";
import SignUp from "../src/User-Authetication-Page/SignUp/signup.jsx";
import SignIn from "../src/User-Authetication-Page/SignIn/signIn.jsx";
import ProfilePage from "../src/Profile-Page/profilePage.jsx";
import Page404 from "../src/404/page404.jsx";

import { createBrowserRouter } from "react-router-dom";
import { defaultSerializeQueryArgs } from "@reduxjs/toolkit/query";

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
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
  {
    path: "/products/:id",
    element: <ProductDec />,
  },
]);

export default router;
