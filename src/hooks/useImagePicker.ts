import {Platform} from 'react-native';
import {Image as Compresssor} from 'react-native-compressor';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PERMISSIONS, RESULTS} from 'react-native-permissions';
import {cameraPermission, showPermissionAlert} from 'src/utils/permissions';
import usePermission from './usePermission';

export default function useImagePicker() {
  const [_, checkCameraPermission] = usePermission(cameraPermission);
  const [__, checkIosLibraryPermission] = usePermission(
    PERMISSIONS.IOS.PHOTO_LIBRARY,
  );

  const getCompImageArr = async (assets: any[]) => {
    return await Promise.all(
      assets.map(async item => {
        const result = await Compresssor.compress(item.uri, {
          compressionMethod: 'auto',
        });
        return {
          uri: result,
          name: result.split('/').pop(),
          type: item.type,
        };
      }),
    );
  };

  const onCamera = async () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 1040,
      maxHeight: 1040,
      cameraType: 'back',
    };

    let result = null;

    try {
      const permRes = await checkCameraPermission();
      if (permRes.status !== RESULTS.GRANTED) {
        showPermissionAlert(permRes, 'Camera');
        return result;
      }

      const res = await launchCamera(options);

      if (res.assets) {
        result = await Compresssor.compress(res.assets[0].uri, {
          compressionMethod: 'auto',
        });
        return {uri: result, name: result.split('/').pop(), type: 'image/jpeg'};
      }
      return result;
    } catch (error) {
      console.log('error =====> ', error);
    }
  };

  const onGallery = async (multiSelection = false) => {
    const options = {
      mediaType: 'photo',
      maxWidth: 1040,
      maxHeight: 1040,
      selectionLimit: multiSelection ? 0 : 1,
    };

    let result = null;

    try {
      if (Platform.OS === 'ios') {
        const res = await checkIosLibraryPermission();
        if (res.status !== RESULTS.GRANTED && res.status !== RESULTS.LIMITED) {
          showPermissionAlert(res, 'Library');
          return result;
        }
      }

      const res = await launchImageLibrary(options);
      if (res.assets) {
        result = await getCompImageArr(res.assets, multiSelection);
        return result;
      }
      return result;
    } catch (error) {
      console.log('error =====> ', error);
    }
  };

  return {
    onCamera,
    onGallery,
  };
}
