import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterC = new GestureDescription("C");

//Thumb
aslLetterC.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aslLetterC.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Index
aslLetterC.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
aslLetterC.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Middle
aslLetterC.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
aslLetterC.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.7);

//Ring
aslLetterC.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1);
aslLetterC.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.7);

//Pinky
aslLetterC.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1);
aslLetterC.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.7);
