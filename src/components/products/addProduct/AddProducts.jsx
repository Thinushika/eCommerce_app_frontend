import React, { useState } from "react";
import { Input } from "antd";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createProducts } from "../../../actions/products";

const AddProducts = () => {
  const { TextArea } = Input;
  const [productData, setProductData] = useState({
    sku: "",
    name: "",
    qty: "",
    desc: "",
  });
  const dispatch = useDispatch();

  // add product button
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createProducts(productData));
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ marginTop: 100 }}>
        <h3>SKU</h3>
        <Input
          placeholder="sku"
          name="sku"
          value={productData.sku}
          onChange={(e) =>
            setProductData({ ...productData, sku: e.target.value })
          }
        />
        <br />
        <h3>Name</h3>
        <Input
          placeholder="name"
          name="name"
          value={productData.name}
          onChange={(e) =>
            setProductData({ ...productData, name: e.target.value })
          }
        />
        <br />
        <h3>QTY</h3>
        <Input
          placeholder="qty"
          name="qty"
          value={productData.qty}
          onChange={(e) =>
            setProductData({ ...productData, qty: e.target.value })
          }
        />
        <br />
        <h3>Description</h3>
        <TextArea
          rows={4}
          name="desc"
          value={productData.desc}
          onChange={(e) =>
            setProductData({ ...productData, desc: e.target.value })
          }
        />
        <h3>Product Image</h3>
        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setProductData({ ...productData, selectedFile: base64 })
            }
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </>
  );
};

export default AddProducts;
