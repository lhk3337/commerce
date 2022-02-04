import React from "react";
import Header from "Components/Header";
import Footer from "Components/Footer";
import Slider from "Components/Slider";
import GlobalStyle from "Style/GlobalStyle";
import { products } from "assets/data/products";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Slider products={products} />
      <Footer />
    </>
  );
}

export default App;
