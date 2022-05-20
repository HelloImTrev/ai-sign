import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterP = new GestureDescription("P");

//Thumb
aslLetterP.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aslLetterP.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.7);

//Index
aslLetterP.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
aslLetterP.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.7);

//Middle
aslLetterP.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
aslLetterP.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.7);

//Ring
aslLetterP.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterP.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.7);

//Pinky
aslLetterP.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aslLetterP.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.7);
