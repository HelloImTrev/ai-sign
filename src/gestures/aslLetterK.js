import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterK = new GestureDescription("K");

//Thumb
aslLetterK.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aslLetterK.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Index
aslLetterK.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
aslLetterK.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Middle
aslLetterK.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
aslLetterK.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
aslLetterK.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterK.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
aslLetterK.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aslLetterK.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);
