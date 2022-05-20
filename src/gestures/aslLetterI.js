import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterI = new GestureDescription("I");

//Thumb
aslLetterI.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
aslLetterI.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Index
aslLetterI.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
aslLetterI.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
aslLetterI.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aslLetterI.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
aslLetterI.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterI.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
aslLetterI.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
aslLetterI.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);
