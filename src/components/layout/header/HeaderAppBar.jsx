import { Avatar, Box } from "@mui/material";
import React from "react";
import Badge from "@mui/material/Badge";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: 100,
          position: "absolute",
        }}
      >
        <Avatar
          sx={{
            m: 1,
            bgcolor: "#001EB9",
            color: "#001EB9",
            width: 58,
            height: 58,
            position: "absolute",
            right: 90,
            top: 33,
          }}
        />
      </Box>
    </>
  );
};

export default Header;
