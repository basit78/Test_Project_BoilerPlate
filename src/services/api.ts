import {PROD_API_URL} from '@env';
import {APIOption, APIParams} from 'src/types/ApiResponse';
import SimpleToast from 'react-native-simple-toast';
import {ERRORS} from 'src/labels/error';
import {resetStack} from 'src/navigation/navigationRef';
import {getFromLocal} from 'src/utils/localStorage';
import {checkConnectivity} from 'src/utils/native';

export const BASE_URL = PROD_API_URL;

export const API = async (params: APIParams) => {
  let {
    method,
    endpoint,
    payload = null,
    isToken = true,
    isFormData = false,
  } = params;

  const isOnline = await checkConnectivity();

  if (!isOnline) {
    SimpleToast.show(ERRORS.noInternet);
  }

  let options: APIOption = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: '',
    },
    body: JSON.stringify(payload),
  };

  if (isToken) {
    const token = await getFromLocal('@token');
    options.headers = {...options.headers, Authorization: `Bearer ${token}`};
  }

  if (isFormData && payload) {
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value);
    });

    options.body = formData;
  }

  if (method === 'GET' || method === 'DELETE') {
    delete options.body;
  }

  try {
    let response: Response | null = await fetch(
      `${BASE_URL}/${endpoint}`,
      options,
    );
    const ok = response.ok;

    if (!ok) {
      console.log(`❌ API ERR [${endpoint}] =====> `, JSON.stringify(response));
    }

    if (response.status === 401) {
      resetStack('AuthStack', 'Signin');
    } else if (response.status === 500) {
      console.log(`❌ API ERR [${endpoint}] =====> `, response);
      response = null;
    } else {
      response = await response.json();
    }

    return [ok, response];
  } catch (error) {
    console.log(`❌ API ERR [${endpoint}] =====> `, error);
    throw error;
  }
};
