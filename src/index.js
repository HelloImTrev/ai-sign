import { Paper, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { theme } from "../public/siteTheme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Paper
      elevation={2}
      sx={{
        backgroundColor: "white",
        height: "90vh",
        marginRight: "1%",
        marginLeft: "1%",
      }}
    >
      <App />
    </Paper>
  </ThemeProvider>,
  document.querySelector("#root")
);
