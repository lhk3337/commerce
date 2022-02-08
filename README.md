# Typescript와 React로 웹페이지 만들기

- 참조 강의에서는 HTML + CSS + Vanilla Javascript로 구성 됨
- TypeScript + styled component + React + Redux를 이용하여 구현해보기로 함

## To Do

- [ ] 각 데이터 별로 타입 지정
- [x] redux를 이용하여 Header 메뉴 클릭 시 이벤트 클릭하면 그 데이터를 Slider Component로 상태 정보 넘겨주기

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

## Redux-react 사용

### 사용한 이유

- Header Component의 nav 메뉴 버튼을 클릭하면 슬라이더 컴포넌트에서 항목에 맞는 슬라이더 화면 보여주기
- Header Component와 Slider Component의 관계는 부모관계가 아닌 형제 관계이므로 react props를 쓰기가 어려움
- 1:1로 Component 연결

### store와 reducer 설정

`store.ts`

```ts
import { createStore } from "redux";

const BTN1 = "BTN1";
const BTN2 = "BTN2";
const BTN3 = "BTN3";
const BTN4 = "BTN4";
const BTN5 = "BTN5";

const reducer = (state: any, action: any) => {
  // reducer
  if (state === undefined) {
    return 0;
  }
  switch (
    action.type //action
  ) {
    case BTN1:
      return 0;
    case BTN2:
      return -100;
    case BTN3:
      return -200;
    case BTN4:
      return -300;
    case BTN5:
      return -400;
    default:
      return state;
  }
};

const store = createStore(reducer); // create Store

export default store;
```

### Provider 설정

`index.tsx`

```tsx
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store"; //import store
ReactDOM.render(
  <React.StrictMode>
    // Provider 선언하기
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

### useSelector와 useDispatch 적용

`Header.tsx`

```tsx
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch(); // useDispatch 선언
  const onClickBtn1 = () => {
    dispatch({ type: "BTN1" }); //dispatch 설정
  };
  const onClickBtn2 = () => {
    dispatch({ type: "BTN2" }); //dispatch 설정
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
  // ...
      <S.MenuItem onClick={onClickBtn1}>AIR FORCE</S.MenuItem> //버튼 클릭시 dispatch 실행
      <S.MenuItem onClick={onClickBtn2}>JORDAN</S.MenuItem>
      <S.MenuItem onClick={onClickBtn3}>BLAZER</S.MenuItem>
      <S.MenuItem onClick={onClickBtn4}>CRATER</S.MenuItem>
      <S.MenuItem onClick={onClickBtn5}>HIPPIE</S.MenuItem>
  // ...
  );
};
```

`Slider.tsx`

```tsx
import { useSelector } from "react-redux";
import { ProductType, ProductItem } from "types";
const Slider = ({ products }: ProductType) => {
  const number = useSelector((state: any) => state); // useSelector 선언, redux에서 변경된 상태값을 반환
  return (
    <S.Slider>
      <S.SliderWrapper widthSize={number}>
      // style component props로 넘김
    // ...
    </S.Slider>
  )
}

```

`Slider.ts`

```ts
export const SliderWrapper = styled.div<{ widthSize: any }>`
  display: flex;
  width: 500vw;
  transition: all 1.5s ease-in-out;
  transform: translateX(0vw);
  transform: translateX(${(props) => props.widthSize}vw);
`;
```

useSelector값을 style Component props의 widthSize로 가져옴

## 참조

[ts styled-components type 설정](https://velog.io/@hwang-eunji/styled-component-typescript)

[Lama Dev Youtube](https://www.youtube.com/watch?v=b3Gqq_k-g24&t=414s)
