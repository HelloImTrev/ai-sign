import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterL = new GestureDescription("L");

//Thumb
aslLetterL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aslLetterL.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Index
aslLetterL.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
aslLetterL.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
aslLetterL.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aslLetterL.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
aslLetterL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterL.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
aslLetterL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aslLetterL.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);
