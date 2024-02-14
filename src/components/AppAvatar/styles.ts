import {StyleSheet} from 'react-native';
import {COLORS, STYLES} from 'src/assets/theme';
import {Theme} from 'src/types/ThemeTypes';

type Styles = {
  image: any;
};

export const styles = (theme: Theme) =>
  StyleSheet.create<Styles>({
    image: (size: number) => ({
      width: size ? size : 50,
      height: size ? size : 50,
      borderRadius: 100,
      backgroundColor: COLORS[theme].gray,
      marginRight: 10,
    }),
  });
