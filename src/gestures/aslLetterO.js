import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterO = new GestureDescription("O");

//Thumb
aslLetterO.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aslLetterO.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Index
aslLetterO.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
aslLetterO.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Middle
aslLetterO.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
aslLetterO.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.7);

//Ring
aslLetterO.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterO.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.7);

//Pinky
aslLetterO.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aslLetterO.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.7);
