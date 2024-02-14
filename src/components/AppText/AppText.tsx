import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {COLORS, STYLES, TYPOGRAPHY} from 'src/assets/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppTextProps} from 'src/types/AppTextTypes';
import Wrapper from '../Wrapper/Wrapper';
import i18n from 'src/i18n';
import {useTheme} from 'src/hooks/useTheme';
import {Theme} from 'src/types/ThemeTypes';

const AppText: React.FC<AppTextProps> = props => {
  const {
    title,
    variant,
    children = <></>,
    color = '',
    alignSelf = 'flex-start',
    fontSize = 0,
    extraStyle = {},
    onPress = () => {},

    translation = true,
  } = props;
  const theme = useTheme() as Theme;

  // const { t, i18n } = useTranslation();
  // const i18n

  const getLanguage = async () => {
    const language = await AsyncStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(JSON.parse(language));
    }
  };

  useEffect(() => {
    getLanguage();
  }, []);

  return (
    <Text
      {...props}
      onPress={onPress}
      suppressHighlighting
      style={[
        TYPOGRAPHY[variant],
        STYLES.fontSize(fontSize ? fontSize : TYPOGRAPHY[variant].fontSize),
        STYLES.alignSelf(alignSelf),
        STYLES.color(color ? color : COLORS[theme].text),
        extraStyle,
      ]}>
      {translation ? i18n.t(title) : title}
      {children}
    </Text>
  );
};

export default AppText;
