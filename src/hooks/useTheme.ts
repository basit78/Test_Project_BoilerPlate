import {RootState, useSelector} from 'src/store';

export const useTheme = () => {
  const theme = useSelector((state: RootState) => state.app);
  return theme.theme;
};
