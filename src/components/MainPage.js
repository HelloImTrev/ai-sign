import React, {useState} from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import AppInfo from "./AppInfo";
import Camera from "./Camera";
import Footer from "./Footer";

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
              Hand-Sign.
            </Box>
          </Typography>
          <AppInfo />
          <Typography variant="h3" fontWeight={400} fontFamily="Montserrat">
            {curGesture}
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default MainPage;