import {StyleSheet} from 'react-native';

export type Styles = {
  container: any;
  title: any;
  iconContainer: any;
};

export const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: (bgColor: string, tintColor: string, boxType: string) => ({
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: boxType === 'square' ? 3 : 100,
    borderColor: tintColor,
    height: 20,
    width: 20,
    backgroundColor: bgColor,
  }),
  title: {
    marginLeft: 10,
    fontSize: 16,
  },
});
