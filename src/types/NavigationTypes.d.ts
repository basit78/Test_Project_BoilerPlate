import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type StackParamList = {
  AuthStack: {};

  SignInScreen: {};
  SignUpScreen: {};
  ForgotPasswordScreen: {};
  OTPScreen: {
    isForgot?: boolean;
  };
  ChangePasswordScreen: {};
  InitialScreen: {};
  OnBoardingScreen: {};

  HomeStack: {};
  HomeScreen: {};
  SettingsScreen: {};
  DrawerNavigation: {};
  ChangeEmailScreen: {};
  EditProfileScreen: {};
  ProfileScreen: {};
  Notifications: {};
  WorkoutPlansScreen: {};
  FilterPlansScreen: {};
  BodyTrainerScreen: {};
  WeightLossFunctionScreen: {};
  ChangeLanguageScreen: {};
};

export type NavigationProps = NativeStackNavigationProp<StackParamList>;
