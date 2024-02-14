import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Switch, TouchableOpacity, View} from 'react-native';
import {SVG} from 'src/assets/svg';
import {COLORS, HEIGHT, HORIZON_MARGIN, STYLES} from 'src/assets/theme';
import {
  AppText,
  BottomSheet,
  Header,
  SelectLanguageSheet,
  Space,
} from 'src/components';
import DrawerView from 'src/components/DrawerView/DrawerView';
import {DARK, settingList} from 'src/data/appData';

import {useTheme} from 'src/hooks/useTheme';
import {LABELS} from 'src/labels';
import {dispatch} from 'src/store';
import {setTheme} from 'src/store/slices/appSlice';
import {NavigationProps} from 'src/types/NavigationTypes';
import {
  SettingList,
  SettingScreenProps,
  renderList as renderListType,
} from 'src/types/SettingScreenTypes';
import {Theme} from 'src/types/ThemeTypes';
import {openURL} from 'src/utils/native';
import {styles as styling} from './styles';

const SettingScreen: React.FC<SettingScreenProps> = ({
  drawerAnimationStyle,
}) => {
  const theme = useTheme() as Theme;
  const styles = styling(theme);
  const bottomSheetRef = useRef<any>(null);
  const navigation = useNavigation<NavigationProps>();
  const [darkMode, setDarkMode] = useState(theme === DARK);
  const [notification, setNotification] = useState(true);

  const onItemPress = (navigateTo: any) => {
    navigation.navigate(navigateTo, {});
  };

  const onValueChange = (item: SettingList) => {
    if (item.title === LABELS.darkMode) {
      dispatch(setTheme(!darkMode));
      setDarkMode(!darkMode);
    } else if (item.title === LABELS.allowNotification) {
      setNotification(!notification);
    }
  };

  const onClose = () => bottomSheetRef.current.close();

  const onPressList = (item: SettingList) => {
    if (item.listType === 'toggle') return;

    if (item.listType === 'popup') {
      return bottomSheetRef.current.open();
    }

    if (item.listType === 'navigation') {
      return onItemPress(item.navigateTo);
    }

    openURL(item.navigateTo);
  };

  const getSwitchValue = (item: SettingList) => {
    if (item.title === LABELS.darkMode) {
      return darkMode;
    } else if (item.title == LABELS.allowNotification) {
      return notification;
    }
  };

  const getListColor = (item: SettingList) => {
    let color = COLORS[theme].text;

    if (item.title == LABELS.logout || item.title == LABELS.deleteAccount) {
      color = COLORS[theme].red;
    }
    return color;
  };

  const darkModeSwitch = () => {
    if (theme == 'dark') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  };

  useEffect(() => {
    darkModeSwitch();
  }, [theme]);

  const renderList: renderListType = ({item}) => {
    return (
      <TouchableOpacity
        hitSlop={styles.hitSlop}
        style={styles.listItem}
        onPress={() => onPressList(item)}>
        <AppText
          title={item.title}
          variant="body1"
          color={getListColor(item)}
          alignSelf="center"
        />
        {item.listType !== 'toggle' ? (
          <SVG.Next fill={getListColor(item)} />
        ) : (
          <Switch
            value={getSwitchValue(item)}
            trackColor={{
              false: COLORS[theme].gray,
              true: COLORS[theme].primaryLight,
            }}
            thumbColor={
              getSwitchValue(item) ? COLORS[theme].primary : COLORS[theme].white
            }
            style={styles.switch}
            onValueChange={() => onValueChange(item)}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <DrawerView>
      <View style={[drawerAnimationStyle, STYLES.container(theme)]}>
        <Header
          title={LABELS.settings}
          extraStyle={[STYLES.pH(HORIZON_MARGIN)]}
        />
        <Space mB={40} />

        <FlatList
          data={settingList}
          renderItem={renderList}
          keyExtractor={(_: any, index: number) => index.toString()}
        />
      </View>

      <BottomSheet
        reference={bottomSheetRef}
        children={<SelectLanguageSheet onClose={onClose} />}
        extraStyle={styles.bottomSheet}
        height={HEIGHT * 0.15}
      />
    </DrawerView>
  );
};

export default SettingScreen;
