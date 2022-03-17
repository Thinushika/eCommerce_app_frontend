import Product from "./product/Product";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

const Products = () => {
  const products = useSelector((state) => state.products);

  console.log(products);

  return (
    <>
      !products.length ? <CircularProgress />: (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      ></Grid>
      );
    </>
  );
};

export default Products;
