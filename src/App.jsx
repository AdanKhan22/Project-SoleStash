import {
  Header,
  NewArrival,
  SpecialOffer,
  // CartSlide,
  Blog,
  NewsLetter,
  Footer,
} from "./homepage/index.js";
import Cart from "./Components/Cart/cart.jsx";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <>
      <SpeedInsights />
      <Cart />
      <Header />
      <NewArrival></NewArrival>
      <SpecialOffer />
      {/* <CartSlide /> */}
      <Blog />
      <NewsLetter />
      <Footer />
    </>
  );
}
