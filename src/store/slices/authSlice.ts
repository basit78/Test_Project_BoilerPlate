import {createSlice} from '@reduxjs/toolkit';
import {API} from 'src/services/api';
import {APIParams, ActionParams} from 'src/types/ApiResponse';
import {getFromLocal, setToLocal} from 'src/utils/localStorage';
import {dispatch} from '..';

export type InitialState = {
  error: null;
  loading: boolean;
};

const initialState: InitialState = {
  error: null,
  loading: false,
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    hasError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },

    startLoading(state) {
      state.loading = true;
    },

    stopLoading(state) {
      state.loading = false;
    },
  },
});

export function signin(params: ActionParams) {
  return async () => {
    const {successCallback = () => {}, errorCallback = () => {}} = params;

    dispatch(slice.actions.startLoading());

    const options: APIParams = {
      method: 'POST',
      endpoint: '/signin',
    };

    try {
      const [ok, response] = await API(options);
      if (!ok || !response) return;

      await setToLocal('@userData', response);
      successCallback();
    } catch (error) {
    } finally {
      dispatch(slice.actions.stopLoading());
    }
  };
}

export function userSession() {
  return async () => {
    try {
      dispatch(slice.actions.startLoading());
      const token = await getFromLocal('@token');
      const userData = await getFromLocal('@userData');
    } catch (error) {
    } finally {
      dispatch(slice.actions.stopLoading());
    }
  };
}

export default slice.reducer;
