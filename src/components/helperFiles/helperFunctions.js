const drawConnections = (landmarks, ctx) => {
  const fingerPoints = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinkyFinger: [0, 17, 18, 19, 20],
  };

  for (let i = 0; i < Object.keys(fingerPoints).length; i++) {
    let currentFinger = Object.keys(fingerPoints)[i];
    for (let j = 0; j < fingerPoints[currentFinger].length - 1; j++) {
      const firstIndex = fingerPoints[currentFinger][j];
      const secondIndex = fingerPoints[currentFinger][j + 1];

      ctx.beginPath();
      ctx.moveTo(landmarks[firstIndex][0], landmarks[firstIndex][1]);
      ctx.lineTo(landmarks[secondIndex][0], landmarks[secondIndex][1]);
      ctx.strokeStyle = "pink";
      ctx.lineWidth = 4;
      ctx.stroke();
    }
  }
};

const drawCircle = (ctx, landmarks, radius, startAngle, endAngle) => {
  for (let i = 0; i < landmarks.length; i++) {
    let x = landmarks[i][0];
    let y = landmarks[i][1];
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
  }
};

export const drawHandMesh = (predictions, ctx) => {
  console.log("DRAWING HAND!!!!!");
  if (predictions.length > 0) {
    predictions.forEach((prediction) => {
      const landmarks = prediction.landmarks;

      drawConnections(landmarks, ctx);
      drawCircle(ctx, landmarks, 7, 0, 3);
    });
  }
};
