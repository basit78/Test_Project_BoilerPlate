import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/theme';
import {Theme} from 'src/types/ThemeTypes';

type Styles = {
  renderItem: any;
  title: any;
};

export const styles = (theme: Theme) =>
  StyleSheet.create<Styles>({
    renderItem: {
      flexDirection: 'row',
      paddingHorizontal: 10,
    },
    title: {
      color: COLORS[theme].text,
    },
  });
