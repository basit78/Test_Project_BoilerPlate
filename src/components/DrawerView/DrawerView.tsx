import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {DrawerViewProps} from 'src/types/DrawerViewTypes';
import {styles as styling} from './styles';
import {useTheme} from 'src/hooks/useTheme';
import {Theme} from 'src/types/ThemeTypes';

const DrawerView: React.FC<DrawerViewProps> = ({
  children,
  style = {
    container: {},
  },
}) => {
  const theme = useTheme() as Theme;
  const styles = styling(theme);
  const drawerProgress: any = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.8]);
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 30]);
    return {
      transform: [{scale}],
      borderRadius: borderRadius,
      overflow: 'hidden',
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle, style.container]}>
      {children}
    </Animated.View>
  );
};

export default DrawerView;
