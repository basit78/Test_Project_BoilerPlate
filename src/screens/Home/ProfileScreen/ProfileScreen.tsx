import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {HORIZON_MARGIN, STYLES} from 'src/assets/theme';
import {AppAvatar, Header, Space} from 'src/components';

import {useTheme} from 'src/hooks/useTheme';
import {LABELS} from 'src/labels';
import {NavigationProps} from 'src/types/NavigationTypes';
import {ProfileScreenProps} from 'src/types/ProfileScreenTypes';
import {Theme} from 'src/types/ThemeTypes';
import {styles as styling} from './styles';

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const theme = useTheme() as Theme;
  const styles = styling(theme);
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={[STYLES.pH(HORIZON_MARGIN), STYLES.container(theme)]}>
      <Header title={LABELS.profile} />
      <Space mB={50} />

      <AppAvatar size={80} name={'Saleem Raza'} />
    </View>
  );
};

export default ProfileScreen;
