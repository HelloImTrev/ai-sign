import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterW = new GestureDescription("W");

//Thumb
aslLetterW.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
aslLetterW.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Index
aslLetterW.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
aslLetterW.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Middle
aslLetterW.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
aslLetterW.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
aslLetterW.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
aslLetterW.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.7);

//Pinky
aslLetterW.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aslLetterW.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.7);
