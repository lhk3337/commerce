import React from "react";
import * as S from "Style/Slider";
import { useSelector, connect } from "react-redux";
import { ProductType, ProductItem, navMenuType } from "types";
const Slider = ({ number, products, scrollDown }: any) => {
  // const number = useSelector((state: StateType) => state.number);
  // const onBuyClick = () => {
  //   window.scrollTo({
  //     top: 1294,
  //     behavior: "smooth",
  //   });
  // };

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
                <S.BuyBtn onClick={() => scrollDown()}>BUY NOW!</S.BuyBtn>
              </S.BuyLink>
            </S.SliderItem>
          );
        })}
      </S.SliderWrapper>
    </S.Slider>
  );
};

// export default Slider;

export default connect((state: navMenuType, { products, scrollDown }: ProductType) => {
  return { number: state.navMenu.number, products, scrollDown };
}, null)(Slider);
