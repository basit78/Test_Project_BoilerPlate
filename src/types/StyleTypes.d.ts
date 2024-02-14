import {TextStyle, ViewStyle} from 'react-native/types';

export type Typography =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h7'
  | 'body1'
  | 'body2'
  | 'body3';

export type TypographyStyle = {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  h6: TextStyle;
  h7: TextStyle;
  body1: TextStyle;
  body2: TextStyle;
  body3: TextStyle;
};

export type Styles = {
  position: any;
  left: any;
  right: any;
  top: any;
  bottom: any;
  margin: any;
  mL: any;
  mR: any;
  mT: any;
  mB: any;
  mH: any;
  mV: any;
  padding: any;
  pB: any;
  pT: any;
  pL: any;
  pR: any;
  pH: any;
  pV: any;
  height: any;
  width: any;
  color: any;
  bgColor: any;
  flex: any;
  textTransform: any;
  textAlign: any;
  alignSelf: any;
  fontSize: any;
  maxHeight: any;
  borderWidth: any;
  flexGrow: any;
  fontFamily: any;
  widthHeight: any;
  flexWrap: any;
  bR: any;
  minHeight: any;

  fullWidth: any;
  JCStart: any;
  JCEnd: any;
  JCCenter: any;
  JCAround: any;
  JCBt: any;
  JCEvenly: any;
  AIStart: any;
  AIEnd: any;
  AICenter: any;
  selfRight: any;
  selfLeft: any;
  selfCenter: any;
  row: any;
  middle: any;
  spbw: any;
  rowCenter: any;
  rowCenterBt: any;
  centerCenter: any;
  hitSlop: any;
  shadow: any;
  modalShadow: any;
  flex1: any;
  jcStart: any;
  width100: any;
  container: any;
  textDecorationLine: any;
};
