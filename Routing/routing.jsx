import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../src/Components/Loading-Screen/loading.jsx";

const App = lazy(() => import("../src/App.jsx"));
const PaymentPage = lazy(() => import("../src/Payment-Page/index.jsx"));
const ProductDec = lazy(() =>
  import("../src/Product-Description-Page/index.jsx")
);
const SignUp = lazy(() =>
  import("../src/User-Authetication-Page/SignUp/signup.jsx")
);
const SignIn = lazy(() =>
  import("../src/User-Authetication-Page/SignIn/signIn.jsx")
);
const ProfilePage = lazy(() => import("../src/Profile-Page/profilePage.jsx"));
const Page404 = lazy(() => import("../src/404/page404.jsx"));

//To Create Loading Screens Later...
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    ),
  },
  {
    path: "/payment",
    element: (
      <Suspense fallback={<Loading />}>
        <PaymentPage />
      </Suspense>
    ),
  },
  {
    path: "/SignUp",
    element: (
      <Suspense fallback={<Loading />}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "/signin",
    element: (
      <Suspense fallback={<Loading />}>
        <SignIn />
      </Suspense>
    ),
  },
  {
    path: "/profile",
    element: (
      <Suspense fallback={<Loading />}>
        <ProfilePage />
      </Suspense>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductDec />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loading />}>
        <Page404 />
      </Suspense>
    ),
  },
]);

export default router;
