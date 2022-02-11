import React, { useEffect, useState } from "react";
import * as S from "Style/Product";
import { useSelector, connect } from "react-redux";
import { navMenuType, Icolor } from "types";

const Product = ({ title, price, colors }: any) => {
  const [imgUrl, setImgUrl] = useState(0);

  const [boolColor1, setBoolColor1] = useState(true);
  const [boolColor2, setBoolColor2] = useState(true);
  const [boolColor3, setBoolColor3] = useState(true);
  useEffect(() => {
    setImgUrl(0);
  }, [colors]);
  const onClickImg = (index: number) => {
    setImgUrl(index);
  };

  const onClickSizeBgBtn = (btnName: string) => {
    if (btnName === "size1") {
      setBoolColor1(false);
      setBoolColor2(true);
      setBoolColor3(true);
    } else if (btnName === "size2") {
      setBoolColor1(true);
      setBoolColor2(false);
      setBoolColor3(true);
    } else if (btnName === "size3") {
      setBoolColor1(true);
      setBoolColor2(true);
      setBoolColor3(false);
    }
  };

  return (
    <S.Container>
      <S.ProductImg src={colors[imgUrl].img} />
      <S.ProductDetails>
        <S.ProductTitle>{title}</S.ProductTitle>
        <S.ProductPrice>${price}</S.ProductPrice>
        <S.ProductDesc>
          Lorem ipsum dolor sit amet consectetur impal adipisicing elit. Alias assumenda dolorum doloremque sapiente
          aliquid aperiam.
        </S.ProductDesc>
        <S.Colors>
          {colors.map((color: Icolor, index: number) => {
            return <S.Color key={index} colors={color.code} onClick={() => onClickImg(index)} />;
          })}
        </S.Colors>
        <S.Sizes>
          <S.Size onClick={() => onClickSizeBgBtn("size1")} sizeColor={boolColor1}>
            42
          </S.Size>
          <S.Size onClick={() => onClickSizeBgBtn("size2")} sizeColor={boolColor2}>
            43
          </S.Size>
          <S.Size onClick={() => onClickSizeBgBtn("size3")} sizeColor={boolColor3}>
            44
          </S.Size>
        </S.Sizes>
      </S.ProductDetails>
    </S.Container>
  );
};

export default connect((state: navMenuType) => {
  return { title: state.navMenu.title, price: state.navMenu.price, colors: state.navMenu.colors };
}, null)(Product);
