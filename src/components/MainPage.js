import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import AppInfo from "./AppInfo";
import Camera from "./Camera";

const MainPage = () => {
  const [curGesture, setCurGesture] = useState("None.");
  const [gestureImage, setGestureImage] = useState(null);

  return (
    <Grid container spacing={8} sx={{ padding: "3rem" }}>
      <Grid item xs={7}>
        <Card>
          <CardContent>
            <Camera
              setCurGesture={setCurGesture}
              setGestureImage={setGestureImage}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Card sx={{height: "578px"}}>
          <CardContent>
            <Box
              display={"flex"}
              flexGrow={1}
              borderRadius="4px"
              flexDirection="column"
              alignItems="center"
            >
              <Typography
                fontSize="2.5rem"
                fontWeight={800}
                fontFamily="Montserrat"
              >
                Welcome to{" "}
                <Box component="span" color={"#62b7fc"}>
                  AI-Sign.
                </Box>
              </Typography>
              <Box marginTop=".5rem">
                <AppInfo />
              </Box>
              <Box
                display={"flex"}
                justifyContent="center"
                sx={{
                  marginTop: "2rem",
                  width: "18.75rem",
                  height: "18.75rem",
                }}
              >
                {gestureImage ? (
                  <img
                    src={`/ASL-Images/${gestureImage}.svg`}
                    style={{ width: "18.75rem", height: "18.75rem" }}
                  />
                ) : null}
              </Box>
              <Typography
                variant="h3"
                fontWeight={400}
                fontFamily="Montserrat"
                marginTop="1rem"
              >
                Letter: {curGesture}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MainPage;
