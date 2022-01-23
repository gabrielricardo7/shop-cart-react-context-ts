import { iProductProps } from "../../Types";
import { Button } from "../Button";
import { Figure } from "./styles";

export const ProductCard = ({ product, type }: iProductProps) => {
  return (
    <>
      <Figure>
        <img src={product.image} alt={product.title} />
        <figcaption>
          <p>{product.title}</p>
          <mark>R$&nbsp;{product.price.toFixed(2)}</mark>
        </figcaption>
        <Button product={product} type={type} />
      </Figure>
    </>
  );
};
