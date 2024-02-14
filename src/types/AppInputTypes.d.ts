import {TextInput} from 'react-native/types';

export interface SVGProps {
  width?: number;
  height?: number;
  fill?: string;
}

export interface AppInputProps {
  placeholder: string;
  value: string;
  onChangeText?: (text: string) => void;
  onPressIcon?: () => void;
  maringH?: boolean;
  editable?: boolean;
  SVGLeft?: any;
  SVGRight?: any;
  autoFocus?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  secureTextEntry?: boolean;
  placeholder?: string;
  extraStyle?: {container?: {}; textInput?: {}};
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'url';
}
