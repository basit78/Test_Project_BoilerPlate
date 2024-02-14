import {StyleSheet} from 'react-native';
import {COLORS} from 'src/assets/theme';
import {Theme} from 'src/types/ThemeTypes';

type Styles = {
  container: any;
  avatar: any;
  button: any;
  buttonTitle: any;
  bottomSheet: any;
  bottomSheetItem: any;
};

export const styles = (theme: Theme) =>
  StyleSheet.create<Styles>({
    avatar: {
      alignSelf: 'center',
    },
    container: {
      flex: 1,
    },
    button: {
      backgroundColor: COLORS[theme].input,
      borderColor: COLORS[theme].input,
      justifyContent: 'space-between',
      paddingHorizontal: 12,
    },
    buttonTitle: {
      color: COLORS[theme].text,
      fontSize: 14,
      fontFamily: 'Poppins-Regular',
    },
    bottomSheet: {
      backgroundColor: COLORS[theme].background,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    bottomSheetItem: {
      height: 50,
      backgroundColor: COLORS[theme].background,
      borderBottomWidth: 1,
      borderBottomColor: COLORS[theme].text,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 10,
    },
  });
