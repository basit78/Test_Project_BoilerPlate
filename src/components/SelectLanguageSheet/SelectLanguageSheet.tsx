import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {changeLanguageList} from 'src/data/appData';

import {useTranslation} from 'react-i18next';
import {COLORS} from 'src/assets/theme';
import {useTheme} from 'src/hooks/useTheme';
import CheckBox from 'src/libraries/CheckBox/CheckBox';
import {SelectLanguageSheetProps} from 'src/types/SelectLanguageSheetTypes';
import {renderItem as renderItemType} from 'src/types/SettingScreenTypes';
import {Theme} from 'src/types/ThemeTypes';
import Space from '../Space/Space';
import {styles as styling} from './styles';

const SelectLanguageSheet: React.FC<SelectLanguageSheetProps> = ({onClose}) => {
  const theme = useTheme() as Theme;
  const {i18n} = useTranslation();
  const styles = styling(theme);

  const [language, setLanguage] = useState(changeLanguageList);

  const getLanguage = async () => {
    const language = await AsyncStorage.getItem('language');
    if (language) {
      const newLanguage = changeLanguageList.map(lang => {
        if (lang.code == JSON.parse(language)) {
          return {...lang, selected: true};
        } else {
          return {...lang, selected: false};
        }
      });
      setLanguage(newLanguage);
    }
  };

  const onChangeLanguage = (item: any) => {
    AsyncStorage.setItem('language', JSON.stringify(item.code));
    const newLanguage = language.map(lang => {
      if (lang.title == item.title) {
        return {...lang, selected: true};
      } else {
        return {...lang, selected: false};
      }
    });
    setLanguage(newLanguage);
    i18n.changeLanguage(item.code);
    onClose();
  };

  const renderItem: renderItemType = (item, index) => (
    <View key={index}>
      <Space mB={20} />
      <View style={styles.renderItem}>
        <CheckBox
          title={item.title}
          boxType="circle"
          value={item.selected}
          onValueChanged={() => onChangeLanguage(item)}
          iconColor={COLORS[theme].black}
          bgColor={COLORS[theme].primary}
          style={{
            title: styles.title,
          }}
        />
      </View>
    </View>
  );

  useEffect(() => {
    getLanguage();
  }, []);

  return <View>{language.map(renderItem)}</View>;
};

export default SelectLanguageSheet;
