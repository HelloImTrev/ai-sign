import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterZ = new GestureDescription("Z");

//Thumb
aslLetterZ.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
aslLetterZ.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.7);

//Index
aslLetterZ.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
aslLetterZ.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Middle
aslLetterZ.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aslLetterZ.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.7);

//Ring
aslLetterZ.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterZ.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.7);

//Pinky
aslLetterZ.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aslLetterZ.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.7);
