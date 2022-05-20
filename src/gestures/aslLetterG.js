import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterG = new GestureDescription("G");

//Thumb
aslLetterG.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aslLetterG.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Index
aslLetterG.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
aslLetterG.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.7);

//Middle
aslLetterG.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aslLetterG.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.7);

//Ring
aslLetterG.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterG.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.7);

//Pinky
aslLetterG.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aslLetterG.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.7);
