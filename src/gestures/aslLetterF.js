import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterF = new GestureDescription("F");

//Thumb
aslLetterF.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
aslLetterF.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Index
aslLetterF.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
aslLetterF.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Middle
aslLetterF.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
aslLetterF.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
aslLetterF.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
aslLetterF.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
aslLetterF.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
aslLetterF.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);
