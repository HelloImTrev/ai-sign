import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterA = new GestureDescription("A");

//Thumb
aslLetterA.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aslLetterA.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);
// aSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
aslLetterA.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
aslLetterA.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);
// aSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
aslLetterA.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aslLetterA.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);
// aSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.70);

//Ring
aslLetterA.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterA.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
aslLetterA.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aslLetterA.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);
