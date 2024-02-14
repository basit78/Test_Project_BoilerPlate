import {StyleSheet} from 'react-native';
import {Theme} from 'src/types/ThemeTypes';
import {COLORS, STYLES} from 'src/assets/theme';

type Styles = {
  codeFieldRoot: any;
  cell: any;
  focusCell: any;
  otpMessage: any;
};

export const styles = (theme: Theme) =>
  StyleSheet.create<Styles>({
    codeFieldRoot: {marginTop: 20, width: 300},
    cell: {
      width: 50,
      height: 50,
      lineHeight: 38,
      fontSize: 24,
      borderWidth: 1,
      borderColor: COLORS[theme].gray,
      borderRadius: 10,
      textAlign: 'center',
      paddingTop: 5,
      color: COLORS[theme].text,
      margin: 5,
    },
    focusCell: {
      borderColor: COLORS[theme].text,
      borderWidth: 2,
    },
    otpMessage: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
