import React from "react";
import logo from "assets/img/sneakers.png";
import search from "assets/img/search.png";
import * as S from "Style/Header";
import { useDispatch, connect } from "react-redux";
import { actionCreators } from "redux/store";
import { IBtn } from "types";
const Header = ({ Btn1, Btn2, Btn3, Btn4, Btn5 }: IBtn) => {
  // const dispatch = useDispatch();
  // const onClickBtn1 = () => {
  //   dispatch(actionCreators.Btn1());
  // };
  // const onClickBtn2 = () => {
  //   dispatch(actionCreators.Btn2());
  // };
  // const onClickBtn3 = () => {
  //   dispatch(actionCreators.Btn3());
  // };
  // const onClickBtn4 = () => {
  //   dispatch(actionCreators.Btn4());
  // };
  // const onClickBtn5 = () => {
  //   dispatch(actionCreators.Btn5());
  // };

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
          <S.MenuItem onClick={Btn1}>AIR FORCE</S.MenuItem>
          <S.MenuItem onClick={Btn2}>JORDAN</S.MenuItem>
          <S.MenuItem onClick={Btn3}>BLAZER</S.MenuItem>
          <S.MenuItem onClick={Btn4}>CRATER</S.MenuItem>
          <S.MenuItem onClick={Btn5}>HIPPIE</S.MenuItem>
        </S.Menu>
      </S.NavBottom>
    </S.Nav>
  );
};

export default connect(null, actionCreators)(Header);
