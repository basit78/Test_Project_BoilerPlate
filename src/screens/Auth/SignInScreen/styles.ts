import {StyleSheet} from 'react-native';
import {STYLES, COLORS} from '../../../assets/theme';
import {Theme} from 'src/types/ThemeTypes';

type Styles = {
  divider: any;
  line: any;
};

export const styles = (theme: Theme) =>
  StyleSheet.create<Styles>({
    divider: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    line: {height: 1, width: '30%', backgroundColor: COLORS[theme].gray},
  });
