import { useCart } from "../../Providers/Cart";
import { iProductProps } from "../../Types";
import { MyButton } from "./styles";

export const Button = ({ product, type }: iProductProps) => {
  const { addProduct, deleteProduct } = useCart();

  const btnColor = type === "cart" ? "orangered" : "yellowgreen";

  const handleClick = () => {
    if (type !== "cart") {
      addProduct(product);
    } else {
      deleteProduct(product);
    }
  };

  return (
    <MyButton color={btnColor} onClick={handleClick}>
      {type !== "cart" ? "Adicionar ao carrinho" : "Remover do carrinho"}
    </MyButton>
  );
};
