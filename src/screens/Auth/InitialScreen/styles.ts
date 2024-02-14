import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/theme';
import {Theme} from 'src/types/ThemeTypes';

type Styles = {
  image: any;
  title: any;
  buttons: any;
  loginBtn: any;
  signupBtn: any;
  overlay: any;
};

export const styles = (theme: Theme) =>
  StyleSheet.create<Styles>({
    image: {flex: 1, resizeMode: 'cover'},
    title: {
      alignSelf: 'center',
      textAlign: 'center',
      width: 300,
    },
    buttons: {
      flexDirection: 'row',
      alignSelf: 'center',
      position: 'absolute',
      bottom: 70,
    },
    loginBtn: {
      width: 150,
      backgroundColor: COLORS[theme].white,
      borderColor: COLORS[theme].transparent,
      margin: 10,
    },
    signupBtn: {
      width: 150,
      backgroundColor: COLORS[theme].red,
      borderColor: COLORS[theme].transparent,
      margin: 10,
    },
    overlay: {
      backgroundColor: COLORS[theme].glassBlack,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  });
