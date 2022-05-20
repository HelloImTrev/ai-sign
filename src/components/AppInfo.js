import { Box, Button, Drawer } from "@mui/material";
import React, { useState } from "react";

const AppInfo = () => {
  const [drawerState, setDrawerState] = useState(false);

  return(
    <Box>
      <Drawer anchor="top" open={drawerState} onClose={() => setDrawerState(false)}>
        <h1>Hello World!</h1>
      </Drawer>
      <Button variant="contained" color="primary" onClick={() => setDrawerState(true)}>
        About
      </Button>
      <Button variant="outlined" color="secondary">
        Supported Gestures
      </Button>
    </Box>
  )
}

export default AppInfo;