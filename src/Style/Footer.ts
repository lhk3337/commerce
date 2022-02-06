import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
`;

export const FooterLeft = styled.div`
  flex: 2;
  padding: 50px;
  display: flex;
  justify-content: space-between;
`;

export const FooterLeftMenu = styled.div``;

export const MenuTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin: 12px 0px;
`;

export const FList = styled.ul`
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  color: gray;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
`;

// FooterRight

export const FooterRight = styled.div`
  flex: 1;
  padding: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterRightMenu = styled.div``;

export const Mail = styled.div``;

export const MailInput = styled.input`
  padding: 5px;
`;

export const MailBtn = styled.button`
  color: white;
  margin-left: 4px;
  background-color: black;
  padding: 5px;
`;

export const Icons = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

export const Copy = styled.span`
  font-weight: 300;
  font-size: 15px;
`;
