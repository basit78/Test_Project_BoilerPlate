import {StyleSheet} from 'react-native';
import {Theme} from 'src/types/ThemeTypes';

type Styles = {
  container: any;
};

export const styles = (theme: Theme) =>
  StyleSheet.create<Styles>({
    container: {},
  });
