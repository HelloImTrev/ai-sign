import { Box, Link, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import MainPage from "./components/MainPage";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <MainPage />
      <Box
        color="GrayText"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography fontSize={12} marginRight=".2rem">
          Created by Trevor Latimer |
        </Typography>
        <Link
          href="https://github.com/HelloImTrev"
          underline="none"
          color="GrayText"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <GitHubIcon fontSize="2rem" />
        </Link>
      </Box>
    </div>
  );
};

export default App;
