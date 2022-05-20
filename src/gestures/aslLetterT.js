import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterT = new GestureDescription("T");

//Thumb
aslLetterT.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aslLetterT.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Index
aslLetterT.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
aslLetterT.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Middle
aslLetterT.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aslLetterT.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
aslLetterT.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterT.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
aslLetterT.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aslLetterT.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.7);
