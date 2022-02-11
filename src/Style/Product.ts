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

export const BuyBtn = styled.button`
  float: right;
  padding: 10px 20px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const Payment = styled.div`
  width: 550px;
  height: 530px;
  background-color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 13px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 13px 2px rgba(0, 0, 0, 0.3);
`;

export const PayTitle = styled.h1`
  font-size: 20px;
  color: lightgray;
`;

export const PayInput = styled.input`
  padding: 10px;
  margin: 10px 0px;
  border: none;
  border-bottom: 1px solid gray;
  &::placeholder {
    color: rgb(163, 163, 163);
  }
`;

export const CardIcons = styled.div`
  display: flex;
`;

export const CardIcon = styled.img`
  margin-right: 10px;
  width: 40px;
`;
export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PayInputSm = styled(PayInput)`
  width: 30%;
`;
export const PayButton = styled.button`
  position: absolute;
  height: 40px;
  bottom: -40px;
  width: 100%;
  left: 0;
  -webkit-box-shadow: 0px 0px 13px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 13px 2px rgba(0, 0, 0, 0.3);
  background-color: #369e62;
  color: white;
  border: none;
  cursor: pointer;
`;

export const Close = styled.span`
  width: 20px;
  height: 20px;
  position: absolute;
  background-color: gray;
  color: white;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 2px;
`;
