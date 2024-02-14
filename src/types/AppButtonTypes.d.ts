export type ButtonVariant = 'filled' | 'outlined';

export type AppButtonProps = {
  onPress: () => void;
  title: string;
  variant?: ButtonVariant;
  extraStyle?: {button?: {}; title?: {}};
  SVGLeft?: any;
  SVGRight?: any;
  onPressIcon?: () => void;
};
