import React from "react";
import * as S from "Style/Slider";
import { useSelector } from "react-redux";
import { ProductType, ProductItem } from "types";
const Slider = ({ products }: ProductType) => {
  const number = useSelector((state: any) => state);
  return (
    <S.Slider>
      <S.SliderWrapper widthSize={number}>
        {products.map((product: ProductItem) => {
          return (
            <S.SliderItem key={product.id}>
              <S.Img src={product.colors[0].img} alt="" />
              <S.sliderBg bgcolor={product.bgcolor} />
              <S.Title>
                {product.title.toUpperCase()} <br /> NEW <br />
                SEASON
              </S.Title>
              <S.Price color={product.bgcolor}>${product.price}</S.Price>
              <S.BuyLink>
                <S.BuyBtn>BUY NOW!</S.BuyBtn>
              </S.BuyLink>
            </S.SliderItem>
          );
        })}
      </S.SliderWrapper>
    </S.Slider>
  );
};

export default Slider;
