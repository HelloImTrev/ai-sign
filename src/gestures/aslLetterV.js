import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterV = new GestureDescription("V");

//Thumb
aslLetterV.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
aslLetterV.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Index
aslLetterV.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
aslLetterV.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Middle
aslLetterV.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
aslLetterV.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
aslLetterV.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterV.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
aslLetterV.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aslLetterV.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.7);
