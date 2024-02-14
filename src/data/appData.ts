import {IMAGES} from 'src/assets/images';
import {SVG} from 'src/assets/svg';
import {LABELS} from 'src/labels';
import {DrawerList} from 'src/types/DrawerNavigationTypes';
import {onBoard} from 'src/types/OnBoardingScreenTypes';
import {GenderList} from 'src/types/SelectGenderSheetTypes';
import {ChangeLanguageList, SettingList} from 'src/types/SettingScreenTypes';

export const LIGHT = 'light';
export const DARK = 'dark';

export const onBoardData: onBoard[] = [
  {
    image: IMAGES.onBoarding1,
    title: LABELS.bodyBuilder,
    text: LABELS.onBoardingText,
  },
  {
    image: IMAGES.onBoarding2,
    title: LABELS.bodyBuilder,
    text: LABELS.onBoardingText,
  },
  {
    image: IMAGES.onBoarding3,
    title: LABELS.bodyBuilder,
    text: LABELS.onBoardingText,
  },
];

export const drawerList: DrawerList[] = [
  {
    title: LABELS.home,
    icon: SVG.Home,
    navigateTo: 'HomeScreen',
  },
  {
    title: LABELS.settings,
    icon: SVG.Settings,
    navigateTo: 'SettingScreen',
  },
];

export const settingList: SettingList[] = [
  {
    title: LABELS.changeEmail,
    navigateTo: 'ChangeEmailScreen',
    listType: 'navigation',
  },
  {
    title: LABELS.changePassword,
    navigateTo: 'ChangePasswordScreen',
    listType: 'navigation',
  },
  {
    title: LABELS.changeLanguage,
    listType: 'popup',
  },
  {
    title: LABELS.darkMode,
    listType: 'toggle',
  },
  {
    title: LABELS.allowNotification,
    listType: 'toggle',
  },
  {
    title: LABELS.helpCenter,
    navigateTo: 'https://www.google.com/',
    listType: 'link',
  },
  {
    title: LABELS.privacyPolicy,
    navigateTo: 'https://www.google.com/',
    listType: 'link',
  },
  {
    title: LABELS.termsOfUse,
    navigateTo: 'https://www.google.com/',
    listType: 'link',
  },
  {
    title: LABELS.logout,
    navigateTo: 'AuthStack',
    listType: 'navigation',
  },
  {
    title: LABELS.deleteAccount,
    navigateTo: 'AuthStack',
    listType: 'navigation',
  },
];

export const changeLanguageList: ChangeLanguageList[] = [
  {
    title: LABELS.english,
    code: LABELS.en,
    selected: true,
  },
  {
    title: LABELS.spanish,
    code: LABELS.es,
    selected: false,
  },
];

export const genderList: GenderList[] = [
  {
    title: LABELS.male,
    selected: true,
  },
  {
    title: LABELS.female,
    selected: false,
  },
];
