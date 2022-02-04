import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export const NavTop = styled.div`
  padding: 20px 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LogoBox = styled.div``;

export const MenuContainer = styled.div``;

export const SearchContainer = styled.div`
  padding: 10px;
  display: flex;
  background-color: grey;
  border-radius: 10px;
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 80%;
  margin-right: 10px;
  color: white;
  &::-webkit-input-placeholder {
    color: lightgray;
  }
`;
export const SearchImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const TextItem = styled.div``;

export const Text = styled.span`
  color: white;
  font-family: "CookieRun-Regular";
  font-size: 20px;
  font-weight: 400;
  border-bottom: 2px solid green;
`;

export const NavBottom = styled.div`
  color: white;
  padding: 20px 10px 30px;
  width: 35%;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const MenuItem = styled.li`
  font-family: "KoPubDotumMedium";
  font-size: 16px;
  cursor: pointer;
`;
