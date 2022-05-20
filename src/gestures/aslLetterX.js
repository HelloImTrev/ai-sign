import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterX = new GestureDescription("X");

//Thumb
aslLetterX.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
aslLetterX.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Index
aslLetterX.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
aslLetterX.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
aslLetterX.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aslLetterX.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
aslLetterX.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterX.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
aslLetterX.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aslLetterX.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);
