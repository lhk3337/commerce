import React from "react";
import * as S from "Style/Footer";

import facebook from "assets/img/facebook.png";
import twitter from "assets/img/twitter.png";
import instagram from "assets/img/instagram.png";
import whatsapp from "assets/img/whatsapp.png";
const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterLeft>
        <S.FooterLeftMenu>
          <S.MenuTitle>About Us</S.MenuTitle>
          <S.FList>
            <S.ListItem>Company</S.ListItem>
            <S.ListItem>Contact</S.ListItem>
            <S.ListItem>Careers</S.ListItem>
            <S.ListItem>Affiliates</S.ListItem>
            <S.ListItem>Stores</S.ListItem>
          </S.FList>
        </S.FooterLeftMenu>
        <S.FooterLeftMenu>
          <S.MenuTitle>Useful Links</S.MenuTitle>
          <S.FList>
            <S.ListItem>Support</S.ListItem>
            <S.ListItem>Refund</S.ListItem>
            <S.ListItem>FAQ</S.ListItem>
            <S.ListItem>Feedback</S.ListItem>
            <S.ListItem>Stories</S.ListItem>
          </S.FList>
        </S.FooterLeftMenu>
        <S.FooterLeftMenu>
          <S.MenuTitle>Products</S.MenuTitle>
          <S.FList>
            <S.ListItem>Air Force</S.ListItem>
            <S.ListItem>Air Jordan</S.ListItem>
            <S.ListItem>Blazer</S.ListItem>
            <S.ListItem>Crater</S.ListItem>
            <S.ListItem>Hippie</S.ListItem>
          </S.FList>
        </S.FooterLeftMenu>
      </S.FooterLeft>
      <S.FooterRight>
        <S.FooterRightMenu>
          <S.MenuTitle>Subscribe to our newsletter</S.MenuTitle>
          <S.Mail>
            <S.MailInput type="text" placeholder="your@email.com" />
            <S.MailBtn>Join!</S.MailBtn>
          </S.Mail>
        </S.FooterRightMenu>
        <S.FooterRightMenu>
          <S.MenuTitle>Follow Us</S.MenuTitle>
          <S.Icons>
            <S.Icon src={facebook} />
            <S.Icon src={twitter} />
            <S.Icon src={instagram} />
            <S.Icon src={whatsapp} />
          </S.Icons>
        </S.FooterRightMenu>
        <S.FooterRightMenu>
          <S.Copy>Holims All rights reserved. 2022.</S.Copy>
        </S.FooterRightMenu>
      </S.FooterRight>
    </S.FooterContainer>
  );
};
export default Footer;
