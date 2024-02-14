import {StyleSheet} from 'react-native';
import {COLORS, STYLES} from '../../assets/theme';
import {Theme} from 'src/types/ThemeTypes';

type Styles = {
  container: any;
  btn: any;
};
export const styles = (theme: Theme) =>
  StyleSheet.create<Styles>({
    container: [
      STYLES.row,
      STYLES.JCCenter,
      STYLES.AICenter,
      STYLES.JCBt,
      STYLES.alignSelf('center'),
      {height: 70, backgroundColor: COLORS[theme].transparent, width: 200},
    ],
    btn: [
      STYLES.JCCenter,
      STYLES.AICenter,
      {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: COLORS[theme].background,
        borderWidth: 1,
        borderColor: COLORS[theme].gray,
      },
    ],
  });
