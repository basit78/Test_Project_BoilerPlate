import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {HORIZON_MARGIN, STYLES} from 'src/assets/theme';
import {AppButton, AppText, Header, Space} from 'src/components';
import AppInput from 'src/components/AppInput/AppInput';

import {useTheme} from 'src/hooks/useTheme';
import {LABELS} from 'src/labels';
import {
  ChangePasswordForm,
  ChangePasswordFormName,
  ChangePasswordScreenProps,
} from 'src/types/ChangePasswordScreenTypes';
import {Theme} from 'src/types/ThemeTypes';
import {isValidatedChangePassword} from 'src/validation';
import {styles as styling} from './styles';

const chgPwdFormDef: ChangePasswordForm = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
};

const ChangePasswordScreen: React.FC<ChangePasswordScreenProps> = props => {
  const theme = useTheme() as Theme;
  const styles = styling(theme);
  const route = useRoute();
  const {isForgot} = route.params as {isForgot: boolean};

  const [form, setForm] = React.useState<ChangePasswordForm>(chgPwdFormDef);

  const onChangeText = (name: ChangePasswordFormName, value: string) => {
    setForm({...form, [name]: value});
  };

  const onChangePassword = () => {
    return;

    const payload = {
      currentPassword: form.currentPassword.trim(),
      newPassword: form.newPassword.trim(),
      confirmPassword: form.confirmPassword.trim(),
      isForgot,
    };

    if (isValidatedChangePassword(payload) === false) return;

    const params = {
      payload,
      successCallback: () => {},
      errorCallback: () => {},
    };
    // call redux action function here and pass params
  };

  const renderItem = () => (
    <>
      <AppInput
        secureTextEntry
        placeholder={LABELS.currentPassword}
        value={form.currentPassword}
        onChangeText={text => onChangeText('currentPassword', text)}
      />
      <Space mB={30} />
    </>
  );

  return (
    <View style={[STYLES.container(theme), STYLES.pH(HORIZON_MARGIN)]}>
      <Header />
      <Space mB={64} />

      <AppText
        title={LABELS.changePassword}
        variant="h2"
        alignSelf="flex-start"
      />
      <AppText
        title={LABELS.changePasswordText}
        variant="body3"
        alignSelf="flex-start"
      />
      <Space mB={47} />

      {!isForgot && renderItem()}

      <AppInput
        secureTextEntry
        placeholder={LABELS.newPassword}
        value={form.newPassword}
        onChangeText={text => onChangeText('newPassword', text)}
      />
      <Space mB={30} />

      <AppInput
        secureTextEntry
        placeholder={LABELS.confirmPass}
        value={form.confirmPassword}
        onChangeText={text => onChangeText('confirmPassword', text)}
      />
      <Space mB={12} />

      <AppText
        title={LABELS.passwordText}
        variant="body3"
        alignSelf="flex-start"
        extraStyle={STYLES.mL(10)}
      />
      <Space mB={50} />

      <AppButton
        title={LABELS.changePassword}
        onPress={onChangePassword}
        variant="filled"
      />
    </View>
  );
};

export default ChangePasswordScreen;
