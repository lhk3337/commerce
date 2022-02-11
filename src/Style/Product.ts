import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: whitesmoke;
  position: relative;
  clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
`;

export const ProductImg = styled.img`
  width: 50%;
`;

export const ProductDetails = styled.div`
  position: absolute;
  top: 10%;
  right: 0;
  width: 45%;
  padding: 50px;
`;

export const ProductTitle = styled.h1`
  font-size: 75px;
  font-weight: 900;
`;

export const ProductPrice = styled.h2``;

export const ProductDesc = styled.p`
  font-style: 24px;
  color: gray;
`;
export const Colors = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Color = styled.div<{ colors: string }>`
  width: 32px;
  height: 32px;
  border-radius: 5px;
  background-color: ${(props) => props.colors};
  margin-right: 10px;
  cursor: pointer;
`;

export const Size = styled.div<{ sizeColor: boolean }>`
  padding: 5px 20px;
  border: 1px solid black;
  color: ${(props) => (props.sizeColor ? "black" : "white")};
  background-color: ${(props) => (props.sizeColor ? "white" : "black")};
  margin-right: 10px;
  cursor: pointer;
  font-size: 20px;
`;

export const Sizes = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
