import { Box, Container, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import Camera from "./components/Camera";

const App = () => {
  const [curGesture, setCurGesture] = useState("None.");

  return (
    <Box display={"flex"} justifyContent="center" sx={{ marginTop: "2rem" }}>
      <Box
        display={"flex"}
        flexGrow={1}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: "7%", marginBottom: "7%", marginRight: "1rem" }}
      >
        <Box
          sx={{
            width: 640,
            height: 480,
            backgroundColor: "gray",
          }}
        />
        {/* <Camera setCurGesture={setCurGesture}/> */}
      </Box>
      <Box
        display={"flex"}
        flexGrow={1}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginLeft="1rem"
      >
        <Typography fontSize="2.5rem" fontWeight={800} fontFamily="Montserrat">
          Welcome to{" "}
          <Box component="span" color={"#f34d7b"}>
            Hand-Sign.
          </Box>
        </Typography>
        <Typography variant="h3" fontWeight={400} fontFamily="Montserrat">
          {curGesture}
        </Typography>
      </Box>
    </Box>
  );
};

export default App;
