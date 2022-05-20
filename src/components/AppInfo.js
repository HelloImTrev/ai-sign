import { Box, Button, Divider, Drawer, Typography } from "@mui/material";
import React, { useState } from "react";

const AppInfo = () => {
  const [drawerState, setDrawerState] = useState(false);

  return (
    <Box>
      <Drawer
        anchor="top"
        open={drawerState}
        onClose={() => setDrawerState(false)}
      >
        <Box sx={{margin: "1rem"}}>
          <Box>
            <Typography variant="h4" fontWeight={500} fontFamily="Montserrat">
              What is AI-Sign?
            </Typography>
            <Divider sx={{ width: "17.5rem" }} />
          </Box>
          <Box sx={{marginTop: ".5rem"}}>
            <Typography>
              AI-Sign is a fun and interactive way for you to practice your American Sign Language! 
              <br/>
              <br/>
              This application was built for a stackthon done Fullstack Academy,
              the idea for this application stemed from both my interest in other technologies (such as th AI used here), 
              and the human nature need for instant feedback. This application is powered by Tensorflow, which constanly 
              is scanning your camera feed look for hands. Once hands have been detected it then creates anchor points 
              know as "landmarks" on what it guesses are knuckles. How cool is that!?
              <br/>
              <br/>
              Hope you enjoy and happy signing!
              <br/>
              <br/>
              - Trevor
            </Typography>
          </Box>
        </Box>
      </Drawer>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setDrawerState(true)}
      >
        About
      </Button>
      <Button variant="outlined" color="secondary">
        Supported Gestures
      </Button>
    </Box>
  );
};

export default AppInfo;
