import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#62b7fc",
      contrastText: "white"
    },
    secondary: {
      main: "#f34d7b",
      contrastText: "white"
    }
  },
  typography: {
    fontFamily: [
      'Montserrat'
    ]
  }
});