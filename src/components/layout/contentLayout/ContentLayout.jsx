import {
  Box,
  IconButton,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const ContentLayout = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 70,
          position: "absolute",
          top: 100,
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            top: 32,
            left: 83,
            fontSize: 36,
            fontWeight: 900,
            fontFamily: "SatoshiVariable",
          }}
        >
          PRODUCTS
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: 757,
              height: 64,
              position: "absolute",
              top: 113,
              left: 73,
              borderRadius: 50,
              bgcolor: "#F7F7F7",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <InputBase
            id="search"
            sx={{
              "& > :not(style)": {
                m: 2,
                height: 64,
              },
            }}
            placeholder="Search for products"
          />
        </Box>
        {/* <IconButton>
          <SearchIcon />
          Search
        </IconButton> */}
      </Box>
    </>
  );
};

export default ContentLayout;
