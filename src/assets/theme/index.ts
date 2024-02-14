import {Dimensions, StyleSheet} from 'react-native';
import {FlexAlignType} from 'react-native/types';

import {Styles, TypographyStyle} from 'src/types/StyleTypes';
import {Theme} from 'src/types/ThemeTypes';
import {platformiOS} from 'src/utils/native';

export const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');
export const HORIZON_MARGIN = 15;

const normalizeFont = (size: number) => platformiOS(size + 3, size + 3);

export const COMMON_COLORS = {
  black: '#000',
  white: '#fff',
  primary: 'rgba(242, 121, 53, 1)',
  primaryLight: 'rgba(242, 121, 53, 0.5)',
  glassBlack: 'rgba(0,0,0,0.5)',
  gray: '#898A8D',
  transparent: 'transparent',
  green: '#91EA7B',
  red: '#FE5665',
  lightBlue: '#E7EDF2',
  gray2: '#2A3135',
};

export const COLORS = {
  light: {
    ...COMMON_COLORS,
    input: '#E7EDF2',
    background: '#fff',
    text: '#000',
    shade: '#D9D1D1',
    statusbar: '#fff',
  },

  dark: {
    ...COMMON_COLORS,
    input: '#424549',
    background: '#1E2124',
    text: '#fff',
    statusbar: '#000',
  },
};

export const FONTS = {
  primaryBold: 'Arial',
  primaryMedium: 'Arial',
  primarySemi: 'Arial',
  primaryRegular: 'Arial',
};

// Typography
export const TYPOGRAPHY = StyleSheet.create<TypographyStyle>({
  h1: {
    fontSize: normalizeFont(35),
    fontFamily: FONTS.primaryBold,
  },

  h2: {
    fontSize: normalizeFont(20),
    fontFamily: FONTS.primaryMedium,
  },

  h3: {
    fontSize: normalizeFont(18),
    fontFamily: FONTS.primaryMedium,
  },

  h4: {
    fontSize: normalizeFont(16),
    fontFamily: FONTS.primarySemi,
  },
  h5: {
    fontSize: normalizeFont(14),
    fontFamily: FONTS.primaryMedium,
  },

  h6: {
    fontSize: normalizeFont(12),
    fontFamily: FONTS.primaryMedium,
  },
  h7: {
    fontSize: normalizeFont(10),
    fontFamily: FONTS.primaryBold,
  },
  body1: {
    fontSize: normalizeFont(14),
    fontFamily: FONTS.primaryRegular,
  },
  body2: {
    fontSize: normalizeFont(12),
    fontFamily: FONTS.primaryRegular,
  },
  body3: {
    fontSize: normalizeFont(10),
    fontFamily: FONTS.primaryRegular,
  },
});

// Global Styles
export const STYLES = StyleSheet.create<Styles>({
  position: (position: number) => ({position}),
  left: (left: number) => ({left}),
  right: (right: number) => ({right}),
  top: (top: number) => ({top}),
  bottom: (bottom: number) => ({bottom}),
  margin: (margin: number) => ({margin}),
  mL: (marginLeft: number) => ({marginLeft}),
  mR: (marginRight: number) => ({marginRight}),
  mT: (marginTop: number) => ({marginTop}),
  mB: (marginBottom: number) => ({marginBottom}),
  mH: (marginHorizontal: number) => ({marginHorizontal}),
  mV: (marginVertical: number) => ({marginVertical}),
  padding: (padding: number) => ({padding}),
  pB: (paddingBottom: number) => ({paddingBottom}),
  pT: (paddingTop: number) => ({paddingTop}),
  pL: (paddingLeft: number) => ({paddingLeft}),
  pR: (paddingRight: number) => ({paddingRight}),
  pH: (paddingHorizontal: number) => ({paddingHorizontal}),
  pV: (paddingVertical: number) => ({paddingVertical}),
  height: (height: string | number = '0%') => ({height}),
  width: (width: string | number = '0%') => ({width}),
  color: (color: string) => ({color}),
  bgColor: (backgroundColor: string) => ({backgroundColor}),
  flex: (flex: number) => ({flex}),
  textTransform: (textTransform: any) => ({
    textTransform,
  }),
  textAlign: (align: string) => ({textAlign: align}),
  textDecorationLine: (textDecorationLine: string) => ({
    textDecorationLine: textDecorationLine,
  }),
  alignSelf: (alignSelf: FlexAlignType) => ({alignSelf}),
  fontSize: (fontSize: number) => ({fontSize}),
  maxHeight: (maxHeight: number) => ({maxHeight}),
  borderWidth: (borderWidth: number) => ({borderWidth}),
  flexGrow: (flexGrow: number) => ({flexGrow}),
  widthHeight: (width = 0, height = 0) => ({width, height}),
  flexWrap: (wrap: string) => ({flexWrap: wrap}),
  fontFamily: (family: string) => ({fontFamily: family}),
  bR: (bR: number) => ({borderRadius: bR}),
  minHeight: (minHeight: number) => ({minHeight}),

  fullWidth: {width: '100%'},
  JCStart: {justifyContent: 'flex-start'},
  JCEnd: {justifyContent: 'flex-end'},
  JCCenter: {justifyContent: 'center'},
  JCAround: {justifyContent: 'space-around'},
  JCBt: {justifyContent: 'space-between'},
  JCEvenly: {justifyContent: 'space-evenly'},
  AIStart: {alignItems: 'flex-start'},
  AIEnd: {alignItems: 'flex-end'},
  AICenter: {alignItems: 'center'},
  selfRight: {alignSelf: 'flex-end'},
  selfLeft: {alignSelf: 'flex-start'},
  selfCenter: {alignSelf: 'center'},
  row: {flexDirection: 'row'},
  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  spbw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowCenterBt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  centerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  hitSlop: {
    top: 15,
    bottom: 15,
    right: 15,
    left: 15,
  },

  shadow: {
    shadowColor: COLORS['light'].black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },

  modalShadow: {
    shadowColor: COLORS['light'].black,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },

  flex1: {flex: 1},
  jcStart: {justifyContent: 'flex-start'},

  width100: {
    width: '100%',
  },

  container: (theme: Theme) => ({
    flex: 1,
    backgroundColor: COLORS[theme].background,
  }),
});
