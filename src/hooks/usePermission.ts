import React from 'react';
import {check, RESULTS, request} from 'react-native-permissions';

const returnMessage = {
  [RESULTS.UNAVAILABLE]: 'This feature is not available on this device',
  [RESULTS.DENIED]: 'The permission has been denied',
  [RESULTS.LIMITED]: 'The permission is limited only some actions are possible',
  [RESULTS.GRANTED]: 'The permission is granted',
  [RESULTS.BLOCKED]: 'The permission is denied and not requestable anymore',
};

const usePermission = (PERMISSION: any) => {
  const [response, setResponse] = React.useState({
    message: '',
    status: false,
  });

  const getPermissionStatus = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await check(PERMISSION);
        let _response: any;
        if (
          result !== RESULTS.GRANTED &&
          result !== RESULTS.UNAVAILABLE &&
          result !== RESULTS.BLOCKED
        ) {
          const _result = await request(PERMISSION);
          _response = {
            status: _result,
            message: returnMessage[_result],
          };
        } else {
          _response = {
            status: result,
            message: returnMessage[result],
          };
        }
        setResponse(_response);
        resolve(_response);
      } catch (error) {
        reject(error);
      }
    });
  };

  return [response, getPermissionStatus];
};

export default usePermission;
