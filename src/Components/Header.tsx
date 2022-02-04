import React from "react";
import logo from "assets/img/sneakers.png";
import search from "assets/img/search.png";
import * as S from "Style/Header";

const Header = () => {
  const onClickBtn = () => {};
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
          <S.MenuItem onClick={onClickBtn}>AIR FORCE</S.MenuItem>
          <S.MenuItem>JORDAN</S.MenuItem>
          <S.MenuItem>BLAZER</S.MenuItem>
          <S.MenuItem>CRATER</S.MenuItem>
          <S.MenuItem>HIPPIE</S.MenuItem>
        </S.Menu>
      </S.NavBottom>
    </S.Nav>
  );
};

export default Header;
