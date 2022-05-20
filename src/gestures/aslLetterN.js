import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterN = new GestureDescription("N");

//Thumb
aslLetterN.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
aslLetterN.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Index
aslLetterN.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
aslLetterN.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Middle
aslLetterN.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aslLetterN.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
aslLetterN.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterN.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
aslLetterN.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aslLetterN.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.7);
