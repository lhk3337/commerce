// redux/store.ts
import { Btn1, Btn2, Btn3, Btn4, Btn5 } from "../redux/store";
export type NumberAction =
  | ReturnType<typeof Btn1>
  | ReturnType<typeof Btn2>
  | ReturnType<typeof Btn3>
  | ReturnType<typeof Btn4>
  | ReturnType<typeof Btn5>;

export type StateType = {
  number: number;
};

// Component/Slider.tsx
export interface ProductItem {
  id: number;
  title: string;
  price: number;
  bgcolor: string;
  colors: { code: string; img: any }[];
}
export interface ProductType {
  products: ProductItem[];
}

export interface FeatureItem {
  id: number;
  img: any;
  title: string;
  desc: string;
}

// Component/Feature.tsx
export interface FeatureType {
  features: FeatureItem[];
}

// Component/Header.tsx
export interface IBtn {
  Btn1: () => {
    type: string;
  };
  Btn2: () => {
    type: string;
  };
  Btn3: () => {
    type: string;
  };
  Btn4: () => {
    type: string;
  };
  Btn5: () => {
    type: string;
  };
}
