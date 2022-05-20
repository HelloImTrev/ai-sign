import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterR = new GestureDescription("R");

//Thumb
aslLetterR.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
aslLetterR.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Index
aslLetterR.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
aslLetterR.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
aslLetterR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
aslLetterR.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
aslLetterR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterR.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
aslLetterR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aslLetterR.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);
