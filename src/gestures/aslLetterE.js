import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterE = new GestureDescription("E");

//Thumb
aslLetterE.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
aslLetterE.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Index
aslLetterE.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
aslLetterE.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
aslLetterE.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aslLetterE.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
aslLetterE.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterE.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
aslLetterE.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aslLetterE.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);
