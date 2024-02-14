type Style = {
  container?: {};
  title?: {};
  iconContainer?: {};
};

export type CheckBoxProps = {
  title?: string;
  style?: Style;
  onValueChanged: () => void;
  value: boolean;
  bgColor?: string;
  iconColor?: string;
  tintColor?: string;
  svgIcon?: any | null;
  type?: 'radio' | 'checkbox';
  boxType?: 'square' | 'circle';
};
