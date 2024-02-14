import {createSlice} from '@reduxjs/toolkit';
import {DARK, LIGHT} from 'src/data/appData';
import store, {dispatch} from '..';
import {getFromLocal, setToLocal} from 'src/utils/localStorage';

export type InitialState = {
  theme: string;
  language: string;
};

const initialState: InitialState = {
  theme: LIGHT,
  language: 'en',
};

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      state.theme = action.payload;
    },

    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const {setLanguage} = slice.actions;
export default slice.reducer;

export function setTheme(toggle?: boolean | undefined) {
  return async () => {
    let theme: string | {} = LIGHT;

    if (toggle === undefined) {
      const _theme = await getFromLocal('@theme');
      theme = _theme ? _theme : LIGHT;
    } else if (toggle === true) {
      theme = DARK;
    } else {
      theme = store.getState().app.theme;
    }

    dispatch(slice.actions.updateTheme(theme));
    await setToLocal('@theme', theme);
  };
}
