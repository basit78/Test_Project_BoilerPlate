import {
  FlexAlignType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native/types';
import {Typography} from './StyleTypes';

export interface SVGProps {
  width?: number;
  height?: number;
  fill?: string;
}

type Styles = {
  container?: StyleProp<ViewStyle>;
  subContainer?: StyleProp<ViewStyle>;
  title?: StyleProp<TextStyle>;
};

export type IconProps = {
  SVGIcon: any;
  title?: string | number;
  color?: string;
  variant?: Typography;
  alignSelf?: FlexAlignType;
  iconLeft?: boolean;
  mB?: number;
  mL?: number;
  mR?: number;
  extraStyle?: Styles;
  onPress?: () => void;
};
