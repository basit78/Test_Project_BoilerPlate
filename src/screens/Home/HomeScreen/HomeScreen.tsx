import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {HORIZON_MARGIN, STYLES} from 'src/assets/theme';
import {Header, Space} from 'src/components';
import DrawerView from 'src/components/DrawerView/DrawerView';

import {useTheme} from 'src/hooks/useTheme';
import {LABELS} from 'src/labels';
import {HomeScreenProps} from 'src/types/HomeScreen';
import {NavigationProps} from 'src/types/NavigationTypes';
import {Theme} from 'src/types/ThemeTypes';
import {styles as styling} from './styles';

const HomeScreen: React.FC<HomeScreenProps> = props => {
  const theme = useTheme() as Theme;
  const styles = styling(theme);
  const navigation = useNavigation<NavigationProps>();

  const onNavigate = () => {
    navigation.navigate('WorkoutPlansScreen', {});
  };

  return (
    <DrawerView>
      <View style={[STYLES.pH(HORIZON_MARGIN), STYLES.container(theme)]}>
        <Header title={LABELS.dashboard} menuBtn />
        <Space mB={30} />
      </View>
    </DrawerView>
  );
};

export default HomeScreen;
