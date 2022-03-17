import React from "react";
import AddProducts from "../products/addProduct/AddProducts";
import Products from "../products/Products";
import ContentLayout from "./contentLayout/ContentLayout";
import HeaderAppBar from "./header/HeaderAppBar";

const Layout = () => {
  return (
    <>
      <HeaderAppBar />
      {/* <ContentLayout /> */}
      {/* <Products /> */}
      <AddProducts />
    </>
  );
};

export default Layout;
