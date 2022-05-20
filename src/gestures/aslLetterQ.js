import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterQ = new GestureDescription("Q");

//Thumb
aslLetterQ.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aslLetterQ.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.7);

//Index
aslLetterQ.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
aslLetterQ.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.7);

//Middle
aslLetterQ.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
aslLetterQ.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.7);

//Ring
aslLetterQ.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterQ.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.7);

//Pinky
aslLetterQ.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aslLetterQ.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.7);
