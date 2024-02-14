import {StyleProp, ViewStyle, TextStyle} from 'react-native';

type Styles = {
  container: StyleProp<ViewProps>;
};

export type DrawerViewProps = {
  children?: any;
  style?: Styles;
};
