import {StyleSheet} from 'react-native';
import {COLORS, WIDTH} from 'src/assets/theme';
import {Theme} from 'src/types/ThemeTypes';

type Styles = {
  container: any;
  crossIcon: any;
  profileContainer: any;
  listItem: any;
  listContainer: any;
  drawerStyle: any;
  sceneContainerStyle: any;
  sideContainer: any;
};

export const styles = (theme: Theme) =>
  StyleSheet.create<Styles>({
    container: {
      flex: 1,
    },

    crossIcon: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginTop: 20,
    },

    profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 30,
    },

    listItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      height: 40,
    },

    listContainer: {
      flex: 1,
      paddingLeft: 20,
    },

    drawerStyle: {
      flex: 1,
      width: WIDTH * 0.6,
      backgroundColor: COLORS[theme].primary,
      paddingRight: 20,
    },

    sceneContainerStyle: {
      backgroundColor: COLORS[theme].transparent,
    },

    sideContainer: {
      flex: 1,
      backgroundColor: COLORS[theme].primary,
    },
  });
