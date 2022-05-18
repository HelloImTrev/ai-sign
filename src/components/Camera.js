import React, { useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHandMesh } from "./helperFiles/helperFunctions";

const Camera = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

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
    }, 33.3);
  };

  const detectHands = async (neuralNet) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const ctx = canvasRef.current.getContext('2d');

      webcamRef.current.video.width = video.videoWidth;
      webcamRef.current.video.height = video.videoHeight;

      canvasRef.current.width = video.videoWidth;
      canvasRef.current.height = video.videoHeight;

      const hand = await neuralNet.estimateHands(video);

      drawHandMesh(hand, ctx);
    }
  };

  startHandPose();
  return (
    <div>
      <Webcam
        ref={webcamRef}
        style={{
          position: "absolute",
          textAlign: "center",
          margin: "auto",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 640,
          height: 480,
        }}
        videoConstraints={videoConstraints}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          textAlign: "center",
          margin: "auto",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 640,
          height: 480,
        }}
      />
    </div>
  );
};

export default Camera;
