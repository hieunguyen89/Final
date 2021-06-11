import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import NewsLetter from "../newsLetter.js/index";
import CartProvider from "../context";
import GlobalStyle from "../../globalStyles";

const Layout = ({ children }) => (
  <>
    <CartProvider>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <NewsLetter />
      <Footer />
    </CartProvider>
  </>
);
export default Layout;
