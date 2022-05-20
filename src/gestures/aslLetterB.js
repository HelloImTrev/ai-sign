import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterB = new GestureDescription("B");

//Thumb
aslLetterB.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
aslLetterB.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);
aslLetterB.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Index
aslLetterB.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
aslLetterB.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
aslLetterB.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
aslLetterB.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
aslLetterB.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
aslLetterB.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
aslLetterB.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
aslLetterB.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);
