import React, { useState } from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import AppInfo from "./AppInfo";
import Camera from "./Camera";


const MainPage = () => {
  const [curGesture, setCurGesture] = useState("None.");

  return (
    <Box>
      <Box display={"flex"} justifyContent="center" sx={{ marginTop: "2rem" }}>
        <Box
          display={"flex"}
          flexGrow={1}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          marginTop="5rem"
          marginBottom="5rem"
        >
          {/* <Box
            sx={{
              width: "40rem",
              height: "30rem",
              backgroundColor: "gray",
            }}
          /> */}
          <Camera setCurGesture={setCurGesture}/>
        </Box>
        <Box  
          display={"flex"}
          flexGrow={1}
          borderRadius="4px"
          flexDirection="column"
          alignItems="center"
          justifyContent="start"
        >
          <Typography
            fontSize="2.5rem"
            fontWeight={800}
            fontFamily="Montserrat"
            marginTop="2rem"
          >
            Welcome to{" "}
            <Box component="span" color={"#62b7fc"}>
              AI-Sign.
            </Box>
          </Typography>
          <AppInfo />
          <Typography variant="h3" fontWeight={400} fontFamily="Montserrat">
            {curGesture}
          </Typography>
          <Box
            sx={{
              width: "18.75rem",
              height: "18.75rem",
              backgroundColor: "gray",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
