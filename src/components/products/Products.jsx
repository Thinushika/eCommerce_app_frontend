import Product from "./product/Product";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.products);

  console.log(products);

  return (
    <>
      <Product />
      <Product />
      <Product />
      <Product />
    </>
  );
};

export default Products;
