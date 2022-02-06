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

export interface FeatureType {
  features: FeatureItem[];
}
