import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {FONTS, HORIZON_MARGIN, STYLES} from 'src/assets/theme';
import {AppButton, AppText, Header, Space} from 'src/components';

import {LABELS} from 'src/labels';
import {NavigationProps} from 'src/types/NavigationTypes';
import {OTPScreenProps} from 'src/types/OTPScreenTypes';
import {styles as styling} from './styles';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useTheme} from 'src/hooks/useTheme';
import {Theme} from 'src/types/ThemeTypes';

const OTPScreen: React.FC<OTPScreenProps> = () => {
  const theme = useTheme() as Theme;
  const styles = styling(theme);
  const navigation = useNavigation<NavigationProps>();

  const CELL_COUNT = 6;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [countDown, setCountDown] = useState<string>('01:59');
  const [resendCode, setResendCode] = useState<boolean>(true);
  const [intervalTimer, setIntervalTimer] = useState<NodeJS.Timer>();

  const timer = () => {
    let second = 60,
      minute = 1;

    const interval = setInterval(() => {
      if (second === 0) {
        minute -= 1;
      }

      if (second < 1 && minute < 1) {
        setResendCode(false);
        setCountDown('01:59');
        clearInterval(intervalTimer);
      } else {
        second -= 1;
        setCountDown(`0${minute}:${second < 10 ? '0' + second : second}`);
      }
    }, 1000);

    setIntervalTimer(interval);
  };

  const onResend = () => {
    if (resendCode === false) {
      setResendCode(true);
    }
  };

  const onVerify = () => {
    if (value.length < 6) {
      return;
    }
    navigation.navigate('ChangePasswordScreen', {isForgot: true});
  };

  useEffect(() => {
    if (resendCode === true) {
      timer();
    }
    return () => clearInterval(intervalTimer);
  }, [resendCode]);

  return (
    <View style={[STYLES.container(theme), STYLES.pH(HORIZON_MARGIN)]}>
      <Header />
      <Space mB={64} />

      <AppText
        title={LABELS.verification}
        variant="h2"
        alignSelf="flex-start"
      />
      <AppText
        title={LABELS.checkYourEmailText}
        variant="body3"
        alignSelf="flex-start"
      />
      <Space mB={47} />
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <Space mB={50} />
      <AppButton title={LABELS.verify} onPress={onVerify} variant="filled" />

      <Space mB={40} />

      <View style={[styles.otpMessage]}>
        <AppText title={LABELS.didntReceiveCode} variant="body3">
          <AppText
            title={LABELS.resend}
            variant="h7"
            extraStyle={[STYLES.fontFamily(FONTS.primaryMedium)]}
            onPress={onResend}
          />
        </AppText>
        <AppText
          translation={false}
          title={countDown}
          variant="h7"
          extraStyle={[STYLES.fontFamily(FONTS.primaryMedium)]}
        />
      </View>
    </View>
  );
};

export default OTPScreen;
