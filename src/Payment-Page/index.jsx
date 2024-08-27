import React from "react";
import PaymentPage from "./Page";
import Display from "./DisplayDetails/display";
import CustomNavbar from "../Components/Navbar/navbar";

export default function index() {
  return (
    <>
      <CustomNavbar></CustomNavbar>
      <PaymentPage></PaymentPage>
    </>
  );
}
