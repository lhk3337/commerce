import React from "react";
import Header from "Components/Header";
import Footer from "Components/Footer";
import Slider from "Components/Slider";
import Feature from "Components/Feature";

import GlobalStyle from "Style/GlobalStyle";
import { products } from "assets/data/products";
import { features } from "assets/data/features";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Slider products={products} />
      <Feature features={features} />
      <Footer />
    </>
  );
}

export default App;
