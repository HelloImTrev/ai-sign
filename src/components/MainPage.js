import React, { useState } from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import AppInfo from "./AppInfo";
import Camera from "./Camera";

const MainPage = () => {
  const [curGesture, setCurGesture] = useState("None.");
  const [gestureImage, setGestureImage] = useState(null);

  return (
    <Box display={"flex"} justifyContent="center">
      <Box
        display={"flex"}
        justifyContent="center"
        marginTop="3rem"
        marginBottom="auto"
      >
        <Paper
          sx={{
            width: "45rem",
          }}
          display={"flex"}
          flexGrow={1}
          flexDirection="column"
          justifyContent="center"
        >
          <Box margin="3rem auto">
            <Camera
              setCurGesture={setCurGesture}
              setGestureImage={setGestureImage}
            />
          </Box>
        </Paper>

        <Box
          display={"flex"}
          flexGrow={1}
          borderRadius="4px"
          flexDirection="column"
          alignItems="center"
        >
          <Paper elevation={2}>
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
            <Box
              display={"flex"}
              justifyContent="center"
              sx={{
                width: "18.75rem",
                height: "18.75rem",
              }}
            >
              <img
                src={`/ASL-Images/aslLetterC.svg`}
                style={{ width: "18.75rem", height: "18.75rem" }}
              />
              {/* {gestureImage ? (
                <img
                  src={`/ASL-Images/aslLetterC.svg`}
                  style={{ width: "18.75rem", height: "18.75rem" }}
                />
              ) : null} */}
            </Box>
            <Typography variant="h3" fontWeight={400} fontFamily="Montserrat">
              Letter: {curGesture}
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
