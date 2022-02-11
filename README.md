# Typescript와 React로 웹페이지 만들기

- 참조 강의에서는 HTML + CSS + Vanilla Javascript로 구성 됨
- TypeScript + styled component + React + Redux를 이용하여 구현해보기로 함

## To Do

- [x] 각 데이터 별로 타입 지정
- [x] redux를 이용하여 Header 메뉴 클릭 시 이벤트 클릭하면 그 데이터를 Slider Component로 상태 정보 넘겨주기
- [x] 버튼 클릭 시 스크롤 이동 (forwardRef)

<br />

## Slider Component의 버튼 클릭 시 Product Component의 위치로 스크롤 이동 구현

<br />

### 현재 구현 방식

`Slider.tsx`

```ts
const onBuyClick = () => {
  window.scrollTo({
    top: 1294,
    behavior: "smooth",
  });
};
```

### forwardRef로 구현 하기

`App.tsx`

```ts
import React, { useRef } from "react";
...
function App() {
  const downRef = useRef<HTMLDivElement>(null);
  const scrollDown = () => {
    return downRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  ...
  return(
    ...
    <Slider products={products} scrollDown={scrollDown} />
    ...
    <Product ref={downRef} /> // Product Component에 props로 ref 넘겨주기(Product Component 위치로 스크롤이 이동하려면 ref를 넘겨주어야 한다.)
    ...
  )
}
```

`Product.tsx`

```ts
import React, { useEffect, useState, forwardRef } from "react";
import { connect } from "react-redux";
...
const Product = forwardRef(({ title, price, colors }: any, ref: any) => { // forwardRef 이용해서 App.tsx에서 props로 ref받기
  ...

  return(
      <S.Container ref={ref}> // Product Container의 ref
          ...
      </S.Container>
  )
}

export default connect(
  (state: navMenuType) => {
    return { title: state.navMenu.title, price: state.navMenu.price, colors: state.navMenu.colors };
  },
  null,
  null,
  { forwardRef: true } // connect에서 forwardRef를 활성화
)(Product);
```

`Slider.tsx`

```ts
const Slider = ({ number, products, scrollDown }: any) => {
 ...
  return(
    ...
     <S.BuyBtn onClick={() => scrollDown()}>BUY NOW!</S.BuyBtn>
    ...
  )

}
export default connect((state: navMenuType, { products, scrollDown }: ProductType) => {
  return { number: state.navMenu.number, products, scrollDown }; // scrollDown은 App.tsx에서 설정한 위치로 스크롤 이동 함수
}, null)(Slider);

```

<br />

## 단일 props의 type을 지정할때 선언하기

```ts
export const sliderBg = styled.div<{ bgcolor: string }>`
  width: 750px;
  height: 750px;
  border-radius: 50%;
  background-color: ${(props) => props.bgcolor};
  position: absolute;
`;
```

## Redux-react

[redux 설정](https://github.com/lhk3337/commerce/wiki/redux%EC%84%A4%EC%A0%95)

## 참조

[ts styled-components type 설정](https://velog.io/@hwang-eunji/styled-component-typescript)

[Lama Dev Youtube](https://www.youtube.com/watch?v=b3Gqq_k-g24&t=414s)
