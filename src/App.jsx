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

export default function App() {
  return (
    <>
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
