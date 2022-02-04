import React from "react";
import * as S from "Style/Slider";
import { ProductType, ProductItem } from "types";
const Slider = ({ products }: ProductType) => {
  console.log(products);
  return (
    <S.Slider>
      <S.SliderWrapper>
        {products.map((product: ProductItem) => {
          return (
            <S.SliderItem key={product.id}>
              <S.Img src={product.colors[0].img} alt="" />
              <div></div>
              <h1></h1>
              <S.Price>{product.price}</S.Price>
              <a></a>
            </S.SliderItem>
          );
        })}
      </S.SliderWrapper>
    </S.Slider>
  );
};

export default Slider;
