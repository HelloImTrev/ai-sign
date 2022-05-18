const drawConnections = (landmarks) => {
  const fingerPoints = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinkyFinger: [0, 17, 18, 19, 20],
  };

  for(let i = 0; i < Object.keys(fingerPoints).length; i++) {
    let currentFinger = Object.keys(fingerPoints)[i];
    for(let j = 0; j < fingerPoints[currentFinger].length - 1; j++) {
      
    }
  }
}

const drawCircle = (ctx, x, y, radius, startAngle, endAngle) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, startAngle, endAngle * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
};

export const drawHandMesh = (predictions, ctx) => {
  console.log(predictions);

  if (predictions.length > 0) {
    predictions.forEach((prediction) => {
      const landmarks = prediction.landmarks;

      for (let i = 0; i < landmarks.length; i++) {
        let x = landmarks[i][0];
        let y = landmarks[i][1];

        drawCircle(ctx, x, y, 7, 0, 3);
      }
    });
  }
};
