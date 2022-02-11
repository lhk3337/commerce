import React, { useRef } from "react";
import Header from "Components/Header";
import Footer from "Components/Footer";
import Slider from "Components/Slider";
import Feature from "Components/Feature";
import NewSeason from "Components/NewSeason";
import Gallery from "Components/Gallery";

import GlobalStyle from "Style/GlobalStyle";
import products from "assets/data/products";
import features from "assets/data/features";
import Product from "Components/Product";
function App() {
  const downRef = useRef<HTMLDivElement>(null);
  const scrollDown = () => {
    return downRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Slider products={products} scrollDown={scrollDown} />
      <Feature features={features} />
      <Product ref={downRef} />
      <Gallery />
      <NewSeason />
      <Footer />
    </>
  );
}

export default App;
