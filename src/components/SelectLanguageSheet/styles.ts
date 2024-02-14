import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/theme';
import {Theme} from 'src/types/ThemeTypes';

type Styles = {
  bottomSheetItem: any;
  renderItem: any;
  title: any;
};

export const styles = (theme: Theme) =>
  StyleSheet.create<Styles>({
    bottomSheetItem: {
      height: 50,
      backgroundColor: COLORS[theme].background,
      borderBottomWidth: 1,
      borderBottomColor: COLORS[theme].text,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 10,
    },
    renderItem: {
      flexDirection: 'row',
      paddingHorizontal: 10,
    },
    title: {
      color: COLORS[theme].text,
    },
  });
