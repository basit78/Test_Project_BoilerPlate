import React from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import {SVG} from './assets/svg';
import {styles} from './styles';
import {CheckBoxProps} from './types/CheckBoxTypes';
import {useTranslation} from 'react-i18next';

const CheckBox: React.FC<CheckBoxProps> = ({
  onValueChanged = () => {},
  title = '',
  bgColor = 'black',
  tintColor = 'black',
  iconColor = 'white',
  svgIcon = null,
  style,
  value,
  boxType = 'square',
  type = 'checkbox',
}) => {
  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, 0.8];
  const scale = animation.interpolate({inputRange, outputRange});
  const {t} = useTranslation();

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const renderIcon = () => {
    if (!value) {
      return <></>;
    } else if (type === 'radio') {
      return <SVG.Dot fill={iconColor} />;
    } else if (svgIcon) {
      return svgIcon;
    } else return <SVG.Tick fill={iconColor} />;
  };

  return (
    <View style={[styles.container, style?.container]}>
      <Animated.View style={[{transform: [{scale}]}]}>
        <TouchableOpacity
          style={[
            styles.iconContainer(bgColor, tintColor, boxType),
            style?.iconContainer,
          ]}
          onPress={onValueChanged}
          activeOpacity={1}
          onPressIn={onPressIn}
          onPressOut={onPressOut}>
          {renderIcon()}
        </TouchableOpacity>
      </Animated.View>
      {title && <Text style={[styles.title, style?.title]}>{t(title)}</Text>}
    </View>
  );
};

export default CheckBox;
