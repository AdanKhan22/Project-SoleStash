import React from "react";
import Header from "./Header/header.jsx";
import NewArrival from "./New Arrival/newArrival.jsx";
import CartSlide from "./CartSlide/cartslide.jsx";
import SpecialOffer from "./Special-Offer/specialoffer.jsx";
import Featured from "./Featured-Section/featuredsection.jsx";
import Blog from "./Blog/blog.jsx";
import NewsLetter from "./NewsLetter/newsletter.jsx";
import Footer from "./Footer/footer.jsx";

export default function App() {
  return (
    <>
      <Header></Header>
      <NewArrival></NewArrival>
      <CartSlide></CartSlide>
      <SpecialOffer></SpecialOffer>
      <Featured></Featured>
      <Blog></Blog>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
}
