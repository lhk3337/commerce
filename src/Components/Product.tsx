import React, { useEffect, useState } from "react";
import * as S from "Style/Product";
import { useSelector, connect } from "react-redux";
import { navMenuType, Icolor } from "types";
import visa from "assets/img/visa.png";
import master from "assets/img/master.png";

const Product = ({ title, price, colors }: any) => {
  const [imgUrl, setImgUrl] = useState(0);

  const [boolColor1, setBoolColor1] = useState(true);
  const [boolColor2, setBoolColor2] = useState(true);
  const [boolColor3, setBoolColor3] = useState(true);

  const [modal, setModal] = useState(false);

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

  const openClickModal = () => {
    setModal(true);
  };

  const closeClickModal = () => {
    setModal(false);
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
        <S.BuyBtn onClick={openClickModal}>BUY NOW!</S.BuyBtn>
      </S.ProductDetails>
      {modal ? (
        <S.Payment>
          <S.PayTitle>Personal Information</S.PayTitle>
          <label>Name and Surname</label>
          <S.PayInput type="text" placeholder="John Doe" />
          <label>Phone Number</label>
          <S.PayInput type="text" placeholder="+1 234 5678" />
          <label>Address</label>
          <S.PayInput type="text" placeholder="Elton St 21 22-145" />
          <S.PayTitle>Card Information</S.PayTitle>
          <S.CardIcons>
            <S.CardIcon src={visa} />
            <S.CardIcon src={master} />
          </S.CardIcons>
          <S.PayInput type="password" placeholder="Card Number" />
          <S.CardInfo>
            <S.PayInputSm type="text" placeholder="mmm" />
            <S.PayInputSm type="text" placeholder="yyyy" />
            <S.PayInputSm type="text" placeholder="cvv" />
          </S.CardInfo>
          <S.PayButton>Checkout!</S.PayButton>
          <S.Close onClick={closeClickModal}>X</S.Close>
        </S.Payment>
      ) : null}
    </S.Container>
  );
};

export default connect((state: navMenuType) => {
  return { title: state.navMenu.title, price: state.navMenu.price, colors: state.navMenu.colors };
}, null)(Product);
