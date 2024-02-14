import React from 'react';
import {View} from 'react-native';
import {SpaceProps} from 'src/types/SpaceTypes';
import {styles} from './styles';

const Space: React.FC<SpaceProps> = ({
  mT = 0,
  mB = 0,
  mR = 0,
  mL = 0,
  mH = 0,
  mV = 0,
  children = null,
}) => {
  return (
    <View style={styles.container(mT, mB, mR, mL, mH, mV)}>
      {children && children}
    </View>
  );
};

export default Space;
