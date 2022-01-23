import { ReactNode } from "react";
import { CartProvider } from "./Cart";
import { ProductsProvider } from "./Products";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <ProductsProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsProvider>
  );
};

export default Providers;
