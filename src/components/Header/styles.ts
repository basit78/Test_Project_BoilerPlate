import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/theme';
import {Theme} from 'src/types/ThemeTypes';

type Styles = {
  container: any;
};

export const styles = (theme: Theme) =>
  StyleSheet.create<Styles>({
    container: {
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: COLORS[theme].primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
