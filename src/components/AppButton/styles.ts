import {StyleSheet} from 'react-native';
import {COLORS, WIDTH} from 'src/assets/theme';
import { Theme } from 'src/types/ThemeTypes';

export type Styles = {
  button: any;
};

export const styles = (theme: Theme) => StyleSheet.create<Styles>({
  button: (isOutlined: boolean) => ({
    width: WIDTH * 0.9,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: isOutlined ? COLORS[theme].primary : COLORS[theme].primary,
    backgroundColor: isOutlined ? COLORS[theme].transparent : COLORS[theme].primary,
  }),
});
