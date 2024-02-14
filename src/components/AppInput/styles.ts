import {StyleSheet} from 'react-native';
import {COLORS, STYLES, TYPOGRAPHY} from 'src/assets/theme';
import {Theme} from 'src/types/ThemeTypes';

export type Styles = {
  textInput: any;
  textInputCont: any;
};

export const styles = (theme: Theme) =>
  StyleSheet.create<Styles>({
    textInput: (multiline: boolean) => ({
      width: '100%',
      padding: 0,
      paddingTop: multiline ? 15 : 0,
      flex: 1,
      color: COLORS[theme].text,
      ...TYPOGRAPHY.body3,
    }),

    textInputCont: (multiline: boolean) => ({
      maxHeight: multiline ? 150 : 45,
      minHeight: multiline ? 150 : 45,
      ...(!multiline && STYLES.rowCenterBt),
      paddingHorizontal: 15,
      borderRadius: 20,
      backgroundColor: COLORS[theme].input,
      borderWidth: 1,
      borderColor: COLORS[theme].input,
    }),
  });
