import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterS = new GestureDescription("S");

//Thumb
aslLetterS.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
aslLetterS.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Index
aslLetterS.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
aslLetterS.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Middle
aslLetterS.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aslLetterS.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
aslLetterS.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterS.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
aslLetterS.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aslLetterS.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.7);
