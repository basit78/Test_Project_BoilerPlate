import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {COLORS, FONTS, HORIZON_MARGIN, STYLES} from 'src/assets/theme';
import {AppButton, AppText, Header, SocialLogin, Space} from 'src/components';
import AppInput from 'src/components/AppInput/AppInput';

import {useTheme} from 'src/hooks/useTheme';
import {LABELS} from 'src/labels';
import {resetStack} from 'src/navigation/navigationRef';
import {NavigationProps} from 'src/types/NavigationTypes';
import {
  SignInForm,
  SignInFormName,
  SignInScreenProps,
} from 'src/types/SignInScreenTypes';
import {Theme} from 'src/types/ThemeTypes';
import {isValidatedSignin} from 'src/validation';
import {SVG} from '../../../assets/svg/index';
import {styles as styling} from './styles';

const SignInFormDefault: SignInForm = {
  email: '',
  password: '',
};

const SignInScreen: React.FC<SignInScreenProps> = props => {
  const theme = useTheme() as Theme;
  const styles = styling(theme);
  const navigation = useNavigation<NavigationProps>();

  const [form, setForm] = React.useState<SignInForm>(SignInFormDefault);

  const onChangeText = (name: SignInFormName, value: string) => {
    setForm({...form, [name]: value});
  };

  const onSignin = () => {
    const payload = {
      email: form.email.trim(),
      password: form.password.trim(),
    };

    resetStack('HomeStack', 'HomeScreen');
    return;

    if (isValidatedSignin(payload) === false) return;

    const params = {
      payload,
      successCallback: () => {},
      errorCallback: () => {},
    };
    resetStack('HomeStack', 'HomeScreen');

    // call redux action function here and pass params
  };

  const onSignUp = () => {
    navigation.navigate('SignUpScreen', {});
  };
  const onForgotPress = () => {
    navigation.navigate('ForgotPasswordScreen', {});
  };

  return (
    <View style={[STYLES.container(theme), STYLES.pH(HORIZON_MARGIN)]}>
      <ScrollView
        style={STYLES.container(theme)}
        showsVerticalScrollIndicator={false}>
        <Header />
        <Space mB={50} />

        <AppText title={LABELS.signin} variant="h2" alignSelf="center" />
        <Space mB={30} />

        <AppInput
          placeholder={LABELS.email}
          value={form.email}
          onChangeText={text => onChangeText('email', text)}
          keyboardType="email-address"
          SVGRight={<SVG.Email fill={COLORS[theme].gray} />}
        />
        <Space mB={30} />

        <AppInput
          secureTextEntry
          placeholder={LABELS.password}
          value={form.password}
          onChangeText={text => onChangeText('password', text)}
        />
        <Space mB={14} />

        <AppText
          title={LABELS.forgotPassword}
          variant="h6"
          alignSelf="flex-end"
          onPress={onForgotPress}
        />
        <Space mB={40} />

        <AppButton title={LABELS.signin} onPress={onSignin} variant="filled" />
        <Space mB={40} />

        <View style={styles.divider}>
          <View style={styles.line} />
          <AppText
            title={LABELS.orContinueWith}
            variant="h6"
            color={COLORS[theme].gray}
          />
          <View style={styles.line} />
        </View>
        <Space mB={20} />

        <SocialLogin />
        <Space mB={20} />

        <AppText
          title={LABELS.dontHaveAccount}
          variant="body3"
          color={COLORS[theme].gray}
          alignSelf="center"
          extraStyle={STYLES.fontFamily(FONTS.primaryMedium)}>
          <AppText
            title={LABELS.signup}
            variant="h7"
            onPress={onSignUp}
            color={COLORS[theme].text}
          />
        </AppText>
      </ScrollView>
    </View>
  );
};

export default SignInScreen;
