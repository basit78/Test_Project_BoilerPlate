import {StyleSheet} from 'react-native';
import {WIDTH} from 'src/assets/theme';
import {HEIGHT} from 'src/assets/theme';
import {COLORS, STYLES} from 'src/assets/theme';
import {Theme} from 'src/types/ThemeTypes';

type Styles = {
  subContainer: any;
  container: any;
  profileBtn: any;
  btnTitle: any;
  shareBtn: any;
  cardContainer: any;
  weightCard: any;
  fatCard: any;
  heightCard: any;
  weightHistory: any;
  text: any;
  card: any;
  updateBtn: any;
  updateTitle: any;
  state: any;
  workoutBtn: any;
  bottomBtn: any;
  exerciseBtn: any;
};

export const styles = (theme: Theme) =>
  StyleSheet.create<Styles>({
    subContainer: {
      height: 40,
      backgroundColor: COLORS[theme].background,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    container: {
      flex: 1,
    },
    profileBtn: {
      backgroundColor: COLORS[theme].primary,
      width: 100,
      borderColor: COLORS[theme].primary,
      height: 30,
      margin: 5,
      justifyContent: 'space-between',
      paddingHorizontal: 15,
    },
    shareBtn: {
      backgroundColor: COLORS[theme].red,
      width: 100,
      borderColor: COLORS[theme].red,
      height: 30,
      margin: 5,
      justifyContent: 'space-between',
      paddingHorizontal: 15,
    },
    btnTitle: {
      fontSize: 12,
      fontWeight: '100',
    },
    cardContainer: {
      height: 100,
      backgroundColor: COLORS[theme].background,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    weightCard: {
      height: HEIGHT * 0.09,
      width: WIDTH * 0.3,
      backgroundColor: COLORS[theme].red,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    fatCard: {
      height: HEIGHT * 0.09,
      width: WIDTH * 0.3,
      backgroundColor: COLORS[theme].primary,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heightCard: {
      height: HEIGHT * 0.09,
      width: WIDTH * 0.3,
      backgroundColor: COLORS[theme].green,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    weightHistory: {
      height: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    text: {
      height: 25,
      width: 25,
      backgroundColor: COLORS[theme].primary,
      padding: 4,
      borderRadius: 3,
      margin: 1,
    },
    card: {
      height: 40,
      width: 70,
      backgroundColor: COLORS[theme].primary,
      borderRadius: 10,
      justifyContent: 'center',
    },
    updateBtn: {
      width: 130,
      height: 40,
      backgroundColor: COLORS[theme].red,
      borderColor: COLORS[theme].red,
    },
    updateTitle: {
      fontSize: 12,
    },
    state: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: WIDTH * 0.55,
    },
    workoutBtn: {
      width: WIDTH * 0.45,
      padding: 5,
      height: 'auto',
    },
    bottomBtn: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    exerciseBtn: {
      width: WIDTH * 0.45,
      backgroundColor: COLORS[theme].red,
      borderColor: COLORS[theme].red,
      padding: 5,
      height: 'auto',
    },
  });
