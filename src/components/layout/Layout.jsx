import React from "react";
import Products from "../products/Products";
import { Avatar, Badge } from "antd";
import "./Layout.css";

import { FaCaretDown } from "react-icons/fa";
import AddProducts from "../products/addProduct/AddProducts";

const Layout = () => {
  // const { Title } = Typography;

  return (
    <>
      <div className="container">
        {/* app bar */}
        <div className="header">
          {/* User menu */}
          <div className="itemContainer">
            <h3 className="admin">ADMIN</h3>
            <FaCaretDown className="vector" />
          </div>
          {/* Avatar */}
          <div className="itemContainer">
            <Badge
              dot
              size={4}
              style={{ backgroundColor: "#3DF265", borderColor: "#3DF265" }}
              // className="dot"
            >
              <Avatar
                shape="circle"
                size={58}
                style={{ backgroundColor: "#001EB9" }}
                // className="avatar"
              />
            </Badge>
          </div>
        </div>
        <div className="title">
          <h2 className="productsTitle">PRODUCTS</h2>
        </div>

        {/* Search section */}
        <div>Search</div>

        <div className="content">
          {/* <Products /> */}
          <AddProducts />
        </div>
      </div>
    </>
  );
};

export default Layout;
