import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterM = new GestureDescription("M");

//Thumb
aslLetterM.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
aslLetterM.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Index
aslLetterM.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
aslLetterM.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Middle
aslLetterM.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aslLetterM.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
aslLetterM.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterM.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
aslLetterM.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aslLetterM.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);
