import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterY = new GestureDescription("Y");

//Thumb
aslLetterY.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aslLetterY.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Index
aslLetterY.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
aslLetterY.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
aslLetterY.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aslLetterY.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
aslLetterY.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterY.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
aslLetterY.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
aslLetterY.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.7);
