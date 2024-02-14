import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {COLORS, STYLES} from 'src/assets/theme';
import {useTheme} from 'src/hooks/useTheme';
import {FullScreenLoaderModalProps} from 'src/types/FullScreenLoaderModalTypes';
import {Theme} from 'src/types/ThemeTypes';

const FullScreenLoaderModal: React.FC<FullScreenLoaderModalProps> = ({
  visible,
}) => {
  const theme = useTheme() as Theme;
  return (
    <ReactNativeModal
      isVisible={visible}
      style={[STYLES.flex1]}
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInTiming={500}
      animationOutTiming={500}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={500}
      useNativeDriver>
      <View style={[STYLES.middle]}>
        <ActivityIndicator color={COLORS[theme].text} size="large" />
      </View>
    </ReactNativeModal>
  );
};
export default FullScreenLoaderModal;
