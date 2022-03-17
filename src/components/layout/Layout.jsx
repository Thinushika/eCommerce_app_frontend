import { Box } from "@mui/material";
import React from "react";
import AddProducts from "../products/addProduct/AddProducts";
import Products from "../products/Products";
import ContentLayout from "./contentLayout/ContentLayout";
import HeaderAppBar from "./header/HeaderAppBar";

const Layout = () => {
  return (
    <>
      <Box
        sx={{
          m: 0,
          position: "relative",
          width: "1440px",
          height: "1024px",
          bgcolor: "#FFFFFF",
        }}
      >
        <HeaderAppBar />
        {/* <ContentLayout /> */}
        {/* <Products /> */}
        <AddProducts />
      </Box>
    </>
  );
};

export default Layout;
