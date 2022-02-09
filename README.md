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

## Redux-react

[redux 설정](https://github.com/lhk3337/commerce/wiki/redux%EC%84%A4%EC%A0%95)

## 참조

[ts styled-components type 설정](https://velog.io/@hwang-eunji/styled-component-typescript)

[Lama Dev Youtube](https://www.youtube.com/watch?v=b3Gqq_k-g24&t=414s)
