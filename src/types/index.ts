export interface ProductItem {
  id: number;
  title: string;
  price: number;
  colors: { code: string; img: any }[];
}
export interface ProductType {
  products: ProductItem[];
}
