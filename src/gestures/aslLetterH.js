import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterH = new GestureDescription("H");

//Thumb
aslLetterH.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aslLetterH.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.7);

//Index
aslLetterH.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
aslLetterH.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.7);

//Middle
aslLetterH.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
aslLetterH.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.7);

//Ring
aslLetterH.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterH.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.7);

//Pinky
aslLetterH.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aslLetterH.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.7);
