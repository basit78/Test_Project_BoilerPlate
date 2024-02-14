import NetInfo from '@react-native-community/netinfo';
import {Dimensions, Platform, Linking} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';
import SimpleToast from 'react-native-simple-toast';

export const {bottom: BOTTOM, top: TOP} = initialWindowMetrics?.insets ?? {
  bottom: 0,
  top: 0,
};

export const checkConnectivity = () => {
  return new Promise(resolve => {
    NetInfo.fetch().then((state: any) => {
      resolve(state.isConnected);
    });
  });
};

export const platformiOS = (iOS: any, android: any): any => {
  if (Platform.OS === 'ios') {
    return iOS;
  }
  return android;
};

export const isIphoneX = (): boolean => {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926 ||
      dimen.height === 932 ||
      dimen.width === 932 ||
      dimen.height === 852 ||
      dimen.width === 852)
  );
};

export const Toast = (text: string, delay: boolean = true) => {
  if (delay) {
    setTimeout(() => {
      SimpleToast.show(text, 100);
    }, 500);
  } else {
    SimpleToast.show(text, 100);
  }
};

export const BOTT_SPACE = platformiOS(isIphoneX() ? 30 : 30, 30);

export const openURL = (url: string) => {
  Linking.openURL(url);
};
