import React from "react";
import logo from "assets/img/sneakers.png";
import search from "assets/img/search.png";
import * as S from "Style/Header";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const onClickBtn1 = () => {
    dispatch({ type: "BTN1" });
  };
  const onClickBtn2 = () => {
    dispatch({ type: "BTN2" });
  };
  const onClickBtn3 = () => {
    dispatch({ type: "BTN3" });
  };
  const onClickBtn4 = () => {
    dispatch({ type: "BTN4" });
  };
  const onClickBtn5 = () => {
    dispatch({ type: "BTN5" });
  };

  return (
    <S.Nav>
      <S.NavTop>
        <S.LogoBox>
          <img src={logo} alt="" />
        </S.LogoBox>
        <S.SearchContainer>
          <S.SearchInput type="text" placeholder="Search..." />
          <S.SearchImg src={search} />
        </S.SearchContainer>
        <S.TextItem>
          <S.Text>Limited Offer!</S.Text>
        </S.TextItem>
      </S.NavTop>
      <S.NavBottom>
        <S.Menu>
          <S.MenuItem onClick={onClickBtn1}>AIR FORCE</S.MenuItem>
          <S.MenuItem onClick={onClickBtn2}>JORDAN</S.MenuItem>
          <S.MenuItem onClick={onClickBtn3}>BLAZER</S.MenuItem>
          <S.MenuItem onClick={onClickBtn4}>CRATER</S.MenuItem>
          <S.MenuItem onClick={onClickBtn5}>HIPPIE</S.MenuItem>
        </S.Menu>
      </S.NavBottom>
    </S.Nav>
  );
};

export default Header;
