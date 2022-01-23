export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface iProductProps {
  product: Product;
  type?: string;
}
