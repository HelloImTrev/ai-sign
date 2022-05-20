import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterJ = new GestureDescription("J");

//Thumb
aslLetterJ.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aslLetterJ.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Index
aslLetterJ.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
aslLetterJ.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Middle
aslLetterJ.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aslLetterJ.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.7);

//Ring
aslLetterJ.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterJ.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.7);

//Pinky
aslLetterJ.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
aslLetterJ.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.7);
