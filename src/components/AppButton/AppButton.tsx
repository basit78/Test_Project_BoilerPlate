/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {COLORS, FONTS, STYLES} from 'src/assets/theme';
import {useTheme} from 'src/hooks/useTheme';
import {AppButtonProps} from 'src/types/AppButtonTypes';
import {Theme} from 'src/types/ThemeTypes';
import AppText from '../AppText/AppText';
import {styles as styling} from './styles';

const AppButton: React.FC<AppButtonProps> = props => {
  const {
    extraStyle,
    onPress,
    title,
    variant = 'filled',
    SVGLeft = null,
    SVGRight = null,
    onPressIcon = () => {},
  } = props;
  const theme = useTheme() as Theme;
  const styles = styling(theme);

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={[styles.button(variant === 'outlined'), extraStyle?.button]}
      onPress={onPress}>
      {SVGLeft}
      <AppText
        onPress={onPress}
        title={title}
        color={
          variant === 'outlined' ? COLORS[theme].primary : COLORS[theme].white
        }
        variant="body1"
        extraStyle={[STYLES.fontFamily(FONTS.primarySemi), extraStyle?.title]}
        alignSelf="center"
      />
      {SVGRight}
    </TouchableOpacity>
  );
};

export default AppButton;
