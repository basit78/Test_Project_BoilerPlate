import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {COLORS, FONTS, HORIZON_MARGIN, STYLES} from 'src/assets/theme';
import {AppButton, AppText, Header, Space} from 'src/components';
import AppInput from 'src/components/AppInput/AppInput';

import {useTheme} from 'src/hooks/useTheme';
import {LABELS} from 'src/labels';
import CheckBox from 'src/libraries/CheckBox/CheckBox';
import {NavigationProps} from 'src/types/NavigationTypes';
import {
  SignUpForm,
  SignUpFormName,
  SignUpScreenProps,
} from 'src/types/SignUpScreenTypes';
import {Theme} from 'src/types/ThemeTypes';
import {isValidatedSignup} from 'src/validation';
import {SVG} from '../../../assets/svg/index';
import {styles as styling} from './styles';

const SignUpFormDefault: SignUpForm = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpScreen: React.FC<SignUpScreenProps> = props => {
  const theme = useTheme() as Theme;
  const styles = styling(theme);
  const navigation = useNavigation<NavigationProps>();

  const [form, setForm] = React.useState<SignUpForm>(SignUpFormDefault);
  const [agree, setAgree] = React.useState<boolean>(false);

  const onChangeText = (name: SignUpFormName, value: string) => {
    setForm({...form, [name]: value});
  };

  const onSignIn = () => {
    navigation.navigate('SignInScreen', {});
  };

  const onTermsAndCondition = () => {};

  const onSignup = () => {
    return;
    const payload = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      password: form.password.trim(),
      confirmPassword: form.confirmPassword.trim(),
    };

    if (isValidatedSignup(payload) === false) return;

    const params = {
      payload,
      successCallback: () => {},
      errorCallback: () => {},
    };
    // call redux action function here and pass params
  };

  return (
    <View style={[STYLES.container(theme), STYLES.pH(HORIZON_MARGIN)]}>
      <ScrollView
        style={STYLES.container(theme)}
        showsVerticalScrollIndicator={false}>
        <Header />
        <Space mB={50} />

        <AppText title={LABELS.signup} variant="h2" alignSelf="center" />
        <Space mB={30} />
        <View style={styles.subContainer}>
          <AppInput
            placeholder={LABELS.firstName}
            value={form.firstName}
            onChangeText={text => onChangeText('firstName', text)}
            keyboardType="email-address"
            SVGRight={<SVG.User fill={COLORS[theme].gray} />}
            extraStyle={{
              container: {width: '49%'},
            }}
          />
          <AppInput
            placeholder={LABELS.lastName}
            value={form.lastName}
            onChangeText={text => onChangeText('lastName', text)}
            keyboardType="email-address"
            SVGRight={<SVG.User fill={COLORS[theme].gray} />}
            extraStyle={{
              container: {width: '49%'},
            }}
          />
        </View>
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
        <Space mB={30} />

        <AppInput
          secureTextEntry
          placeholder={LABELS.confirmPassword}
          value={form.confirmPassword}
          onChangeText={text => onChangeText('confirmPassword', text)}
        />
        <Space mB={30} />

        <View style={[STYLES.row, STYLES.AIStart]}>
          <CheckBox
            bgColor={COLORS[theme].primary}
            tintColor={COLORS[theme].primary}
            boxType="circle"
            value={agree}
            onValueChanged={() => setAgree(!agree)}
          />
          <Space mR={5} />
          <View style={[STYLES.row]}>
            <AppText
              title={LABELS.iAgree}
              variant="body3"
              color={COLORS[theme].gray}>
              <Space mR={5} />
              <AppText
                title={LABELS.termsAndCondition}
                variant="body3"
                color={COLORS[theme].text}
                extraStyle={[
                  STYLES.textDecorationLine('underline'),
                  STYLES.mH(20),
                ]}
                onPress={onTermsAndCondition}
              />
              <Space mR={5} />
              <AppText
                title={LABELS.creatingAnAccount}
                variant="body3"
                color={COLORS[theme].gray}
              />
            </AppText>
          </View>
        </View>
        <Space mB={30} />

        <AppButton title={LABELS.signup} onPress={onSignup} variant="filled" />
        <Space mB={40} />

        <AppText
          title={LABELS.haveAccount}
          variant="body3"
          color={COLORS[theme].gray}
          alignSelf="center"
          extraStyle={STYLES.fontFamily(FONTS.primaryMedium)}>
          <AppText
            title={LABELS.signin}
            variant="h7"
            color={COLORS[theme].text}
            onPress={onSignIn}
          />
        </AppText>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;
