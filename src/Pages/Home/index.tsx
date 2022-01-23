import { useCart } from "../../Providers/Cart";
import { useProducts } from "../../Providers/Products";
import { ProductCard } from "../../Components/ProductCard";

export const Home = () => {
  const { products } = useProducts();
  const { cart } = useCart();

  return (
    <>
      <h2>Produtos</h2>
      <ul>
        {products &&
          products.map((product, index) => (
            <li key={index}>
              <ProductCard product={product} type="product" />
            </li>
          ))}
      </ul>
      <h2>Carrinho</h2>
      <ul>
        {cart && cart.length === 0
          ? "Vazio"
          : cart.map((product, index) => (
              <li key={index}>
                <ProductCard product={product} type="cart" />
              </li>
            ))}
      </ul>
    </>
  );
};
