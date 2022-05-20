import { Box, Container, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import MainPage from "./components/MainPage";

const App = () => {
  return (
    <div style={{textAlign:"center"}}>
      <Paper
        elevation={2}
        sx={{
          backgroundColor: "white",
          marginRight: "1%",
          marginLeft: "1%",
        }}
      >
        <MainPage />
      </Paper>
      <Typography>Created by Trevor Latimer | <GitHubIcon /></Typography>
    </div>
  );
};

export default App;
