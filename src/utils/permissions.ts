import {Alert, Platform} from 'react-native';
import {openSettings, PERMISSIONS, RESULTS} from 'react-native-permissions';

export const cameraPermission = Platform.select({
  android: PERMISSIONS.ANDROID.CAMERA,
  ios: PERMISSIONS.IOS.CAMERA,
});

export const showPermissionAlert = (res: any, type: any) => {
  if (res.status === RESULTS.BLOCKED) {
    Alert.alert('Alert', `Please provide permission to use ${type}`, [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {text: 'Open settings', onPress: () => openSettings()},
    ]);
    return;
  }
  alert(`Please provide permission to use ${type}`);
};
