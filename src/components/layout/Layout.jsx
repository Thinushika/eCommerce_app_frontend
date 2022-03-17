import React from "react";
import ContentLayout from "./contentLayout/ContentLayout";
import HeaderAppBar from "./header/HeaderAppBar";

const Layout = () => {
  return (
    <>
      <HeaderAppBar />
      <ContentLayout></ContentLayout>
    </>
  );
};

export default Layout;
