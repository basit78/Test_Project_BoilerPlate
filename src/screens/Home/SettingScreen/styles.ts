import {StyleSheet} from 'react-native';
import {COLORS, HORIZON_MARGIN} from 'src/assets/theme';
import {Theme} from 'src/types/ThemeTypes';

type Styles = {
  container: any;
  listItem: any;
  switch: any;
  bottomSheet: any;
  bottomSheetItem: any;
};

export const styles = (theme: Theme) =>
  StyleSheet.create<Styles>({
    hitSlop: {top: 20, bottom: 20, left: 10, right: 10},

    listItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
      height: 30,
      alignItems: 'center',
      marginBottom: 15,
      paddingHorizontal: 15,
    },

    switch: {
      transform: [{scaleX: 0.9}, {scaleY: 0.9}],
      right: -10,
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
