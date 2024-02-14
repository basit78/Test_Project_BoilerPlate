import {DrawerActions, useNavigation} from '@react-navigation/native';
import {SafeAreaView, View} from 'react-native';
import {SVG} from 'src/assets/svg';
import {COLORS} from 'src/assets/theme';

import {useTheme} from 'src/hooks/useTheme';
import {HeaderProps} from 'src/types/HeaderTypes';
import {Theme} from 'src/types/ThemeTypes';
import {TOP, isIphoneX, platformiOS} from 'src/utils/native';
import Icon from '../Icon/Icon';
import Space from '../Space/Space';
import {styles as styling} from './styles';

const Header: React.FC<HeaderProps> = ({
  menuBtn = false,
  title,
  onLeftIcon = null,
  extraStyle = {},
}) => {
  const theme = useTheme() as Theme;
  const styles = styling(theme);
  const navigation = useNavigation();

  const onPressLeftIcon = () => {
    if (onLeftIcon) {
      onLeftIcon();
    } else if (menuBtn) {
      navigation.dispatch(DrawerActions.openDrawer());
    } else {
      navigation.goBack();
    }
  };

  const render = () => {
    return (
      <Icon
        SVGIcon={
          menuBtn ? (
            <SVG.Menu fill={COLORS[theme].text} />
          ) : (
            <SVG.BackArrow fill={COLORS[theme].text} />
          )
        }
        mR={20}
        onPress={onPressLeftIcon}
        title={title}
        variant={'h3'}
        color={COLORS[theme].text}
      />
    );
  };

  return (
    <View style={[extraStyle]}>
      <SafeAreaView />
      <Space mT={platformiOS(isIphoneX() ? 0 : TOP, TOP)} />
      {render()}
    </View>
  );
};

export default Header;
