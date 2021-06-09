import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import NewsLetter from "../NewsLetter.js/index.js";
import CartProvider from "../context";
import GlobalStyle, { Container } from "../../globalStyles";
import SearchBarSection from "../searchbar/search";

const Layout = ({ children }) => (
  <>
    <CartProvider>
      <GlobalStyle />
      <Navbar />
      <SearchBarSection />
      <main>{children}</main>
      <NewsLetter />
      <Footer />
    </CartProvider>
  </>
);
export default Layout;
