import React, { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import * as fp from "fingerpose";
import Webcam from "react-webcam";
import { drawHandMesh } from "./helperFiles/helperFunctions";
import { Box, FormControlLabel, FormGroup, Switch } from "@mui/material";
import { Alphabet } from "../gestures/alphabet";


const Camera = ({ setCurGesture, setGestureImage }) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    startHandPose();
  }, []);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: "user",
  };

  const startHandPose = async () => {
    const neuralNet = await handpose.load();
    console.log("Hand Pose has been loaded");

    setInterval(() => {
      detectHands(neuralNet);
    }, 10);
  };

  const detectHands = async (neuralNet) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const ctx = canvasRef.current.getContext("2d");

      webcamRef.current.video.width = video.videoWidth;
      webcamRef.current.video.height = video.videoHeight;

      canvasRef.current.width = video.videoWidth;
      canvasRef.current.height = video.videoHeight;

      const hand = await neuralNet.estimateHands(video);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          Alphabet.aslLetterA,
          Alphabet.aslLetterB,
          Alphabet.aslLetterC,
          Alphabet.aslLetterD,
          Alphabet.aslLetterE,
          Alphabet.aslLetterF,
          Alphabet.aslLetterG,
          Alphabet.aslLetterH,
          Alphabet.aslLetterI,
          Alphabet.aslLetterJ,
          Alphabet.aslLetterK,
          Alphabet.aslLetterL,
          Alphabet.aslLetterM,
          Alphabet.aslLetterN,
          Alphabet.aslLetterO,
          Alphabet.aslLetterP,
          Alphabet.aslLetterQ,
          Alphabet.aslLetterR,
          Alphabet.aslLetterS,
          Alphabet.aslLetterT,
          Alphabet.aslLetterU,
          Alphabet.aslLetterV,
          Alphabet.aslLetterW,
          Alphabet.aslLetterX,
          Alphabet.aslLetterY,
          Alphabet.aslLetterZ,
        ]);

        const estimateGesture = await GE.estimate(hand[0].landmarks, 6.5);

        if (
          estimateGesture.gestures !== undefined &&
          estimateGesture.gestures.length > 0
        ) {
          const confidence = estimateGesture.gestures.map(pred => pred.score);
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );

          if(estimateGesture.gestures[maxConfidence].name){
            const name = estimateGesture.gestures[maxConfidence].name;

            setCurGesture(name);
            setGestureImage(`aslLetter${name}`);

          }
        }
      }

      drawHandMesh(hand, ctx);
    }
  };

  return (
    <div>
      <Box>
        <canvas
          ref={canvasRef}
          hidden
          style={{
            position: "absolute",
            margin: "auto",
            width: 640,
            height: 480,
            zIndex: 1,
          }}
        />

        {canvasRef.current
          ? checked
            ? canvasRef.current.removeAttribute("hidden")
            : canvasRef.current.setAttribute("hidden", "hidden")
          : console.log("loading canvas...")}

        <Webcam
          ref={webcamRef}
          style={{
            margin: "auto",
            width: 640,
            height: 480,
          }}
          videoConstraints={videoConstraints}
        />
        <FormGroup>
          <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show mesh visualization" />
        </FormGroup>
      </Box>
    </div>
  );
};

export default Camera;
