import {StyleSheet} from 'react-native';
import {Theme} from 'src/types/ThemeTypes';
import {COLORS, HEIGHT, WIDTH} from '../../../assets/theme';

type Styles = {
  container: any;
  subContainer: any;
  title: any;
  image: any;
  imageContainer: any;
  text: any;
};

export const styles = (theme: Theme) =>
  StyleSheet.create<Styles>({
    container: {
      backgroundColor: COLORS[theme].white,
      flex: 1,
    },
    subContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    title: {
      marginLeft: 20,
    },
    image: {
      width: WIDTH * 0.9,
      height: HEIGHT * 0.25,
    },
    imageContainer: {
      width: WIDTH * 0.9,
      height: 50,
      backgroundColor: COLORS[theme].gray2,
      position: 'absolute',
      bottom: 0,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      position: 'absolute',
      bottom: 30,
    },
  });
