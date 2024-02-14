import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {COLORS} from 'src/assets/theme';
import {DARK} from 'src/data/appData';
import {
  ChangeEmailScreen,
  ChangePasswordScreen,
  ForgotPasswordScreen,
  InitialScreen,
  OTPScreen,
  OnBoardingScreen,
  SignInScreen,
  SignUpScreen,
} from 'src/screens';
import {RootState, dispatch, useSelector} from 'src/store';
import {StackParamList} from 'src/types/NavigationTypes';
import DrawerNavigation from './DrawerNavigation/DrawerNavigation';
import {navigationRef} from './navigationRef';
import {setTheme} from 'src/store/slices/appSlice';
import {useTheme} from 'src/hooks/useTheme';
import {Theme} from 'src/types/ThemeTypes';

const Stack = createNativeStackNavigator<StackParamList>();

const options = {headerShown: false};

// const HomeStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="DrawerNavigation"
//         component={DrawerNavigation}
//         options={options}
//       />
//       <Stack.Screen
//         name="ChangePasswordScreen"
//         component={ChangePasswordScreen}
//         options={options}
//       />
//       <Stack.Screen
//         name="ChangeEmailScreen"
//         component={ChangeEmailScreen}
//         options={options}
//       />
//     </Stack.Navigator>
//   );
// };

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InitialScreen"
        component={InitialScreen}
        options={options}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={options}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={options}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={options}
      />
      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={options}
        initialParams={{isForgot: false}}
      />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
        options={options}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = ({navStack = ''}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AuthStack" component={AuthStack} options={options} />
      {/* <Stack.Screen name="HomeStack" component={HomeStack} options={options} /> */}
    </Stack.Navigator>
  );
};

export default function AppNavigator() {
  const theme = useTheme() as Theme;
  React.useEffect(() => {
    dispatch(setTheme());
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        animated
        barStyle={theme === DARK ? 'light-content' : 'dark-content'}
        backgroundColor={COLORS[theme].statusbar}
      />
      <RootNavigator />
    </NavigationContainer>
  );
}
