import React from 'react';
import {TextInput, View} from 'react-native';
import {SVG} from 'src/assets/svg';
import {COLORS} from 'src/assets/theme';

import {useTranslation} from 'react-i18next';
import {AppInputProps} from 'src/types/AppInputTypes';
import Icon from '../Icon/Icon';
import Wrapper from '../Wrapper/Wrapper';
import {styles as styling} from './styles';
import {useTheme} from 'src/hooks/useTheme';
import {Theme} from 'src/types/ThemeTypes';

const AppInput: React.FC<AppInputProps> = props => {
  const {
    multiline = false,
    SVGLeft = null,
    SVGRight = null,
    numberOfLines = 1,
    extraStyle = {container: {}, textInput: {}},
    value = '',
    editable = true,
    autoFocus = false,
    secureTextEntry = false,
    placeholder = '',
    keyboardType = 'default',
    onChangeText = () => {},
    onPressIcon = () => {},
  } = props;
  const theme = useTheme() as Theme;

  const styles = styling(theme);
  const {t} = useTranslation();

  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const onPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const renderRightIcon = () => {
    if (secureTextEntry) {
      return (
        <Icon
          SVGIcon={
            showPassword ? (
              <SVG.EyeOpen fill={COLORS[theme].gray} />
            ) : (
              <SVG.EyeClose fill={COLORS[theme].gray} />
            )
          }
          iconLeft={false}
          onPress={onPasswordToggle}
          alignSelf="center"
        />
      );
    } else if (SVGRight) {
      return (
        <Icon
          SVGIcon={SVGRight}
          onPress={onPressIcon}
          alignSelf="center"
          mR={0}
        />
      );
    } else {
      return <></>;
    }
  };

  return (
    <View style={[styles.textInputCont(multiline), extraStyle.container]}>
      {SVGLeft && (
        <Icon SVGIcon={SVGLeft} onPress={onPressIcon} alignSelf="center" />
      )}

      <TextInput
        {...props}
        placeholder={placeholder && t(placeholder)}
        autoFocus={autoFocus}
        editable={editable}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={numberOfLines}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={COLORS[theme].text}
        selectionColor={COLORS[theme].text}
        keyboardType={keyboardType}
        style={[styles.textInput(multiline), extraStyle.textInput]}
        {...(secureTextEntry && {secureTextEntry: !showPassword})}
      />
      {renderRightIcon()}
    </View>
  );
};

export default AppInput;
