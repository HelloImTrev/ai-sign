import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aslLetterU = new GestureDescription("U");

//Thumb
aslLetterU.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
aslLetterU.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Index
aslLetterU.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
aslLetterU.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
aslLetterU.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
aslLetterU.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
aslLetterU.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
aslLetterU.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
aslLetterU.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
aslLetterU.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.7);
