import { Box, Button, Divider, Drawer, Typography } from "@mui/material";
import React, { useState } from "react";

const GestureList = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return (
    <Box sx={{ margin: "1rem" }}>
      <Box>
        <Typography variant="h4" fontWeight={500} fontFamily="Montserrat">
          <strong>Supported Gestures</strong>
        </Typography>
        <Divider sx={{ width: "22.5rem" }} />
      </Box>
      <Box sx={{ marginTop: ".5rem" }}>
        <Typography>
          <ul>
            {letters.split("").map((letter) => {
              return (
                <li style={{marginBottom: 18}}>
                  {`Letter ${letter} `}
                  <span>
                    <img style ={{heigh: 12, width: 12}}src={`/ASL-Images/aslLetter${letter}.svg`} />
                  </span>
                </li>
              );
            })}
          </ul>
        </Typography>
      </Box>
    </Box>
  );
};

export default GestureList;
