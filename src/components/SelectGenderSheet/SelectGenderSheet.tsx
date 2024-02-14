import React, {useState} from 'react';
import {View} from 'react-native';
import {genderList} from 'src/data/appData';

import {useTheme} from 'src/hooks/useTheme';
import CheckBox from 'src/libraries/CheckBox/CheckBox';
import {renderItem as renderItemType} from 'src/types/EditProfileScreenTypes';
import {
  GenderList,
  SelectGenderSheetProps,
} from 'src/types/SelectGenderSheetTypes';
import {Theme} from 'src/types/ThemeTypes';
import Space from '../Space/Space';
import {styles as styling} from './styles';

const SelectGenderSheet: React.FC<SelectGenderSheetProps> = ({
  onClose,
  value = null,
}) => {
  const theme = useTheme() as Theme;
  const styles = styling(theme);
  const [gender, setGender] = useState(genderList);

  const onChangeGender = (item: GenderList) => {
    const Gender = gender.map(lang => {
      if (lang.title == item.title) {
        return {...lang, selected: true};
      } else {
        return {...lang, selected: false};
      }
    });
    setGender(Gender);
    value(item);
    onClose();
  };

  const renderItem: renderItemType = (item, index) => (
    <View key={index}>
      <Space mB={20} />
      <View style={styles.renderItem}>
        <CheckBox
          title={item.title}
          value={item.selected}
          onValueChanged={() => onChangeGender(item)}
          style={{
            title: styles.title,
          }}
          type="radio"
          boxType="circle"
        />
      </View>
    </View>
  );

  return (
    <View>
      <Space mB={20} />
      {gender.map(renderItem)}
    </View>
  );
};

export default SelectGenderSheet;
