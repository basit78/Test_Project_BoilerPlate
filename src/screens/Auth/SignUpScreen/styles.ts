import {StyleSheet} from 'react-native';
import {Theme} from 'src/types/ThemeTypes';

type Styles = {
  subContainer: any;
};

export const styles = (theme: Theme) =>
  StyleSheet.create<Styles>({
    subContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
