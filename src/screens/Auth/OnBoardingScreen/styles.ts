import {StyleSheet} from 'react-native';
import {COLORS, HEIGHT, STYLES, WIDTH} from 'src/assets/theme';
import {Theme} from 'src/types/ThemeTypes';
import {TOP} from 'src/utils/native';

type Styles = {
  image: any;
  center: any;
  active: any;
  inactive: any;
  tab: any;
  nextBtn: any;
  overlay: any;
  getStarted: any;
  skipBtn: any;
};

export const styles = (theme: Theme) =>
  StyleSheet.create<Styles>({
    image: {
      width: WIDTH,
      height: HEIGHT,
      resizeMode: 'cover',
    },
    center: {
      position: 'absolute',
      bottom: HEIGHT * 0.35,
      alignSelf: 'center',
    },
    active: {
      width: 40,
      height: 5,
      margin: 3,
      backgroundColor: COLORS[theme].white,
      borderRadius: 10,
    },
    inactive: {
      width: 7,
      height: 7,
      margin: 3,
      backgroundColor: COLORS[theme].gray,
      borderRadius: 10,
    },
    tab: {
      flexDirection: 'row',
      alignSelf: 'center',
      width: 100,
      position: 'absolute',
      bottom: HEIGHT * 0.22,
    },

    nextBtn: {
      height: 55,
      width: 55,
      bottom: HEIGHT * 0.05,
      right: 20,
      borderRadius: 100,
      backgroundColor: COLORS[theme].white,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
    },

    overlay: {
      flex: 1,
      opacity: 0.5,
    },
    getStarted: {
      position: 'absolute',
      bottom: 50,
      width: 170,
      backgroundColor: COLORS[theme].white,
      borderColor: COLORS[theme].white,
    },
    skipBtn: {
      position: 'absolute',
      top: TOP,
      right: 20,
    },
  });
