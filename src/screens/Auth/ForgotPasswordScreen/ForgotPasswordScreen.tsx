import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {COLORS, HORIZON_MARGIN, STYLES} from 'src/assets/theme';
import {AppButton, AppText, Header, Space} from 'src/components';
import AppInput from 'src/components/AppInput/AppInput';

import {useTheme} from 'src/hooks/useTheme';
import {LABELS} from 'src/labels';
import {
  ForgotPasswordForm,
  ForgotPasswordFormName,
  ForgotPasswordScreenProps,
} from 'src/types/ForgotPasswordScreenTypes';
import {NavigationProps} from 'src/types/NavigationTypes';
import {Theme} from 'src/types/ThemeTypes';
import {isValidatedEmail} from 'src/validation';
import {SVG} from '../../../assets/svg/index';
import {styles as styling} from './styles';

const ForgotPasswordFormDefault: ForgotPasswordForm = {
  email: '',
};

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = props => {
  const theme = useTheme() as Theme;
  const styles = styling(theme);
  const navigation = useNavigation<NavigationProps>();

  const [form, setForm] = React.useState<ForgotPasswordForm>(
    ForgotPasswordFormDefault,
  );

  const onChangeText = (name: ForgotPasswordFormName, value: string) => {
    setForm({...form, [name]: value});
  };

  const onForgotPassword = () => {
    return;

    const payload = {
      email: form.email.trim(),
    };

    if (isValidatedEmail(payload) === false) return;

    const params = {
      payload,
      successCallback: () => {},
      errorCallback: () => {},
    };
    navigation.navigate('OTPScreen', {});
    // call redux action function here and pass params
  };

  return (
    <View style={[STYLES.container(theme), STYLES.pH(HORIZON_MARGIN)]}>
      <Header />
      <Space mB={64} />

      <AppText
        title={LABELS.forgotPassword}
        variant="h2"
        alignSelf="flex-start"
      />
      <AppText
        title={LABELS.forgotPwdText}
        variant="body3"
        alignSelf="flex-start"
      />
      <Space mB={47} />

      <AppInput
        placeholder={LABELS.email}
        value={form.email}
        onChangeText={text => onChangeText('email', text)}
        keyboardType="email-address"
        SVGRight={<SVG.Email fill={COLORS[theme].gray} />}
      />
      <Space mB={50} />

      <AppButton
        title={LABELS.sendCode}
        onPress={onForgotPassword}
        variant="filled"
      />
    </View>
  );
};

export default ForgotPasswordScreen;
