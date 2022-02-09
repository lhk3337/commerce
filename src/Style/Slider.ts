import styled from "styled-components";
export const Slider = styled.div`
  height: 800px;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  background: url("https://images.unsplash.com/photo-1604147495798-57beb5d6af73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80");
`;

export const SliderWrapper = styled.div<{ widthSize: number }>`
  display: flex;
  width: 500vw;
  transition: all 1.5s ease-in-out;
  transform: translateX(0vw);
  transform: translateX(${(props) => props.widthSize}vw);
`;

export const SliderItem = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const Img = styled.img`
  z-index: 1;
`;
export const sliderBg = styled.div<{ bgcolor: string }>`
  width: 750px;
  height: 750px;
  border-radius: 50%;
  background-color: ${(props) => props.bgcolor};
  position: absolute;
`;
export const Title = styled.h1`
  color: white;
  position: absolute;
  margin: 50px 0px;
  letter-spacing: -3px;
  line-height: 70px;
  top: 10%;
  right: 10%;
  font-size: 70px;
  font-weight: 900;
  text-align: center;
  z-index: 1;
`;

export const Price = styled.h2<{ color: string }>`
  position: absolute;
  top: 15%;
  left: 10%;
  font-size: 60px;
  font-weight: 300;
  text-align: center;
  color: white;
  border: 1px solid gray;
  z-index: 1;
  color: ${(props) => props.color};
`;
export const BuyLink = styled.a``;
export const BuyBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 10%;
  font-size: 30px;
  font-weight: 900;
  color: white;
  border: 1px solid gray;
  background-color: black;
  z-index: 1;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: white;
  }
`;
