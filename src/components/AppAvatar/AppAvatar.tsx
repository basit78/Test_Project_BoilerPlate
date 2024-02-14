import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AppAvatarProps} from 'src/types/AppAvatarTypes';
import {styles as styling} from './styles';

import FastImage from 'react-native-fast-image';
import {IMAGES} from 'src/assets/images';
import {COLORS, STYLES} from 'src/assets/theme';
import {Theme} from 'src/types/ThemeTypes';
import {useTheme} from '../../hooks/useTheme';
import AppText from '../AppText/AppText';

const AppAvatar: React.FC<AppAvatarProps> = ({
  uri,
  size = 50,
  extraStyle = {},
  name = '',
  onAvatar = () => {},
}) => {
  const theme = useTheme() as Theme;
  const styles = styling(theme);
  return (
    <View style={[STYLES.AICenter, extraStyle]}>
      <TouchableOpacity activeOpacity={0.9} onPress={onAvatar}>
        <FastImage
          source={uri ? {uri} : IMAGES.avatarPlaceholder}
          style={styles.image(size)}
          resizeMode="cover"
        />
      </TouchableOpacity>
      {!!name && (
        <AppText
          title={name}
          variant="h2"
          color={COLORS[theme].text}
          alignSelf="center"
          extraStyle={[STYLES.mT(10)]}
        />
      )}
    </View>
  );
};

export default AppAvatar;
