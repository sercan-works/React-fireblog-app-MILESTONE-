import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          "& > :not(style)": {
            m: 4,
            width: 128,
            height: 128,
          },
        }}
      >
        <Typography sx={{ m: 3 }}>Copyright Ser.JS</Typography>
      </Box>
    </div>
  );
};

export default Footer;
