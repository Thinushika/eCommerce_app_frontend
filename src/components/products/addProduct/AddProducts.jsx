import { Box, Button, Input, InputBase, Typography } from "@mui/material";
import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createProducts } from "../../../actions/products";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Alert from "@mui/material/Alert";

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
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            top: 146,
            left: 181,
            fontSize: 36,
            fontWeight: 900,
            fontFamily: "SatoshiVariable",
            letterSpacing: "0.15em",
          }}
        >
          PRODUCTS
        </Typography>
      </Box>
      <form onSubmit={handleSubmit} style={{ marginTop: 100 }}>
        {/* SKU */}
        <Typography
          sx={{
            fontFamily: "SatoshiVariable",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "19px",
            lineHeight: "26px",
            position: "absolute",
            left: "181px",
            top: "244px",
          }}
        >
          SKU
        </Typography>
        <InputBase
          name="sku"
          value={productData.sku}
          onChange={(e) =>
            setProductData({ ...productData, sku: e.target.value })
          }
          sx={{
            bgcolor: "#F7F7F7",
            width: "400px",
            height: "45px",
            position: "absolute",
            left: "262px",
            top: "235px",
            borderRadius: "5px",
          }}
        />
        {/* Name */}
        <Typography
          sx={{
            fontFamily: "SatoshiVariable",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "19px",
            lineHeight: "26px",
            position: "absolute",
            left: "181px",
            top: "345px",
          }}
        >
          Name
        </Typography>
        <InputBase
          name="name"
          value={productData.name}
          onChange={(e) =>
            setProductData({ ...productData, name: e.target.value })
          }
          sx={{
            bgcolor: "#F7F7F7",
            width: "400px",
            height: "45px",
            position: "absolute",
            left: "262px",
            top: "336px",
            borderRadius: "5px",
          }}
        />
        {/* Quantity */}
        <Typography
          sx={{
            fontFamily: "SatoshiVariable",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "19px",
            lineHeight: "26px",
            position: "absolute",
            left: "778px",
            top: "345px",
          }}
        >
          QTY
        </Typography>
        <InputBase
          name="qty"
          value={productData.qty}
          onChange={(e) =>
            setProductData({ ...productData, qty: e.target.value })
          }
          sx={{
            bgcolor: "#F7F7F7",
            width: "400px",
            height: "45px",
            position: "absolute",
            left: "859px",
            top: "336px",
            borderRadius: "5px",
          }}
        />

        {/* Product Description */}
        <Typography
          sx={{
            fontFamily: "SatoshiVariable",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "19px",
            lineHeight: "26px",
            position: "absolute",
            left: "181px",
            top: "437px",
          }}
        >
          Product Description
        </Typography>
        <Typography
          sx={{
            fontFamily: "SatoshiVariable",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "19px",
            position: "absolute",
            left: "181px",
            top: "473px",
            color: "#162427",
            opacity: "0.5",
          }}
        >
          A small description about the product
        </Typography>
        <TextareaAutosize
          minRows={3}
          style={{
            position: "absolute",
            width: "1078px",
            height: "105px",
            left: "181px",
            top: "509px",
            backgroundColor: "#F7F7F7",
            border: "none",
          }}
          name="desc"
          value={productData.desc}
          onChange={(e) =>
            setProductData({ ...productData, desc: e.target.value })
          }
        />

        {/* Image upload area */}
        <Typography
          sx={{
            fontFamily: "SatoshiVariable",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "19px",
            lineHeight: "26px",
            position: "absolute",
            left: "184px",
            top: "670px",
          }}
        >
          Product Images
        </Typography>
        <Box
          sx={{
            position: "absolute",
            left: "417px",
            top: "670px",
            fontFamily: "SatoshiVariable",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "19px",
            lineHeight: "26px",
            color: "#001EB9",
          }}
        >
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setProductData({ ...productData, selectedFile: base64 })
            }
          />
          Add Images
        </Box>
        <Typography
          sx={{
            fontFamily: "SatoshiVariable",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "19px",
            position: "absolute",
            width: "166px",
            height: "38",
            left: "184px",
            top: "711px",
            color: "#162427",
            opacity: "0.5",
          }}
        >
          A small description about the product
        </Typography>
        <Button
          type="submit"
          sx={{
            position: "absolute",
            width: "249px",
            height: "56px",
            left: "1001px",
            top: "840px",
            bgcolor: "#001EB9",
            boxShadow: "4px 4px 30px rgba(243, 172, 22, 0.2)",
            borderRadius: "10px",
            fontFamily: "SatoshiVariable",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "19px",
            lineHeight: "26px",
            color: "#FFFFFF",
            "&:hover": {
              bgcolor: "#010f5e",
              color: "#FFFFFF",
            },
            flex: "none",
            order: 0,
            flexGrow: 0,
            margin: "0px 10px",
          }}
        >
          Add Product
        </Button>
      </form>
    </>
  );
};

export default AddProducts;
