import { Box, Button, Divider, Drawer, Typography } from "@mui/material";
import React, { useState } from "react";
import About from "./About";
import GestureList from "./GestureList";

const AppInfo = () => {
  const [aboutDrawerState, setAboutDrawerState] = useState(false);
  const [gestureDrawerState, setGestureDrawerState] = useState(false);

  return (
    <Box>
      <Drawer
        anchor="top"
        open={aboutDrawerState}
        onClose={() => setAboutDrawerState(false)}
      >
        <About />
      </Drawer>
      <Drawer
        anchor="right"
        open={gestureDrawerState}
        onClose={() => setGestureDrawerState(false)}
      >
        <GestureList />
      </Drawer>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginRight: "1rem" }}
        onClick={() => setAboutDrawerState(true)}
      >
        About
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        sx={{ marginLeft: "1rem" }}
        onClick={() => setGestureDrawerState(true)}
      >
        Gestures
      </Button>
    </Box>
  );
};

export default AppInfo;
