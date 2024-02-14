import React from 'react';
import {ImageBackground, View} from 'react-native';
import {COLORS, STYLES} from 'src/assets/theme';
import {InitialScreenProps} from 'src/types/InitialScreenTypes';
import {styles as styling} from './styles';

import {useNavigation} from '@react-navigation/native';
import {IMAGES} from 'src/assets/images';
import {AppButton, AppText} from 'src/components';
import {useTheme} from 'src/hooks/useTheme';
import {LABELS} from 'src/labels';
import {NavigationProps} from 'src/types/NavigationTypes';
import {Theme} from 'src/types/ThemeTypes';

const InitialScreen: React.FC<InitialScreenProps> = props => {
  const theme = useTheme() as Theme;
  const styles = styling(theme);
  const navigation = useNavigation<NavigationProps>();

  const onLogin = () => {
    navigation.navigate('SignInScreen', {});
  };
  const onSignup = () => {
    navigation.navigate('SignUpScreen', {});
  };

  return (
    <View style={[STYLES.container(theme)]}>
      <ImageBackground source={IMAGES.initial} style={styles.image}>
        <View style={styles.overlay}>
          <AppText
            title={LABELS.welcomeToClip}
            variant="h1"
            color={COLORS[theme].white}
            extraStyle={styles.title}
          />
          <View style={styles.buttons}>
            <AppButton
              title={LABELS.signin}
              variant="filled"
              onPress={onLogin}
              extraStyle={{
                button: styles.loginBtn,
                title: {color: COLORS[theme].black},
              }}
            />
            <AppButton
              title={LABELS.signup}
              variant="filled"
              onPress={onSignup}
              extraStyle={{
                button: styles.signupBtn,
                title: {color: COLORS[theme].white},
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InitialScreen;
