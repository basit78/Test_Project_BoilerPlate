import {StyleSheet} from 'react-native';

export type Styles = {
  container: any;
};

export const styles = StyleSheet.create<Styles>({
  container: (mT = 0, mB = 0, mR = 0, mL = 0, mH = 0, mV = 0) => ({
    marginTop: mT,
    marginBottom: mB,
    marginRight: mR,
    marginLeft: mL,
    marginHorizontal: mH,
    marginVertical: mV,
  }),
});
