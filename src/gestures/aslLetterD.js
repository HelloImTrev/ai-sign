import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterD = new GestureDescription("D");

//Thumb
aslLetterD.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
aslLetterD.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Index
aslLetterD.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
aslLetterD.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
aslLetterD.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aslLetterD.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
aslLetterD.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterD.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
aslLetterD.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aslLetterD.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);
