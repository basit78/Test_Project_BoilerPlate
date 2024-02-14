import React, {useRef} from 'react';
import {View} from 'react-native';
import {COLORS, HORIZON_MARGIN, STYLES} from 'src/assets/theme';
import {
  ProfileForm,
  ProfileFormName,
  ProfileScreenProps,
} from 'src/types/EditProfileScreenTypes';
import {styles as styling} from './styles';

import {SVG} from 'src/assets/svg';
import {
  AppAvatar,
  AppButton,
  AppInput,
  BottomSheet,
  Header,
  SelectGenderSheet,
  Space,
} from 'src/components';
import DrawerView from 'src/components/DrawerView/DrawerView';
import {AVATAR} from 'src/data/dummy';
import {useTheme} from 'src/hooks/useTheme';
import {LABELS} from 'src/labels';
import {Theme} from 'src/types/ThemeTypes';

const ProfileFormDefault: ProfileForm = {
  firstName: '',
  lastName: '',
  gender: '',
};

const EditProfileScreen: React.FC<ProfileScreenProps> = props => {
  const theme = useTheme() as Theme;
  const styles = styling(theme);
  const bottomSheetRef = useRef<any>(null);
  const [form, setForm] = React.useState<ProfileForm>(ProfileFormDefault);

  const onChangeText = (name: ProfileFormName, value: string) => {
    setForm({...form, [name]: value});
  };
  const onClose = () => bottomSheetRef.current.close();
  const onChangeValue = (value: any) => {
    setForm({...form, gender: value?.title});
  };

  return (
    <DrawerView>
      <View style={[STYLES.pH(HORIZON_MARGIN), STYLES.container(theme)]}>
        <Header title={LABELS.editProfile} />

        <Space mB={40} />
        <AppAvatar size={80} uri={AVATAR} extraStyle={styles.avatar} />

        <Space mB={60} />
        <AppInput
          placeholder={LABELS.firstName}
          value={form.firstName}
          onChangeText={text => onChangeText('firstName', text)}
          keyboardType="email-address"
          SVGRight={<SVG.User fill={COLORS[theme].gray} />}
        />

        <Space mB={15} />
        <AppInput
          placeholder={LABELS.lastName}
          value={form.lastName}
          onChangeText={text => onChangeText('lastName', text)}
          keyboardType="email-address"
          SVGRight={<SVG.User fill={COLORS[theme].gray} />}
        />

        <Space mB={15} />
        <AppButton
          title={form.gender ? form.gender : LABELS.gender}
          onPress={() => {
            bottomSheetRef.current.open();
          }}
          SVGRight={<SVG.Gender fill={COLORS[theme].gray} />}
          extraStyle={{
            button: styles.button,
            title: styles.buttonTitle,
          }}
        />
      </View>
      <BottomSheet
        reference={bottomSheetRef}
        children={
          <SelectGenderSheet
            onClose={onClose}
            value={(value: any) => onChangeValue(value)}
          />
        }
        extraStyle={styles.bottomSheet}
        height={170}
      />
    </DrawerView>
  );
};

export default EditProfileScreen;
