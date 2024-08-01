import {
  Header,
  NewArrival,
  SpecialOffer,
  CartSlide,
  Blog,
  NewsLetter,
  Footer,
} from "./homepage/index.js";

export default function App() {
  return (
    <>
      <Header />

      <NewArrival></NewArrival>
      <SpecialOffer />
      <CartSlide />
      <Blog />
      <NewsLetter />
      <Footer />
    </>
  );
}
