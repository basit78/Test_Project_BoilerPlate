import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {COLORS, STYLES} from 'src/assets/theme';
import {AppAvatar, Icon, Space} from 'src/components';
import {LIGHT, drawerList} from 'src/data/appData';
import {ProfileScreen, SettingScreen} from 'src/screens';
import HomeScreen from 'src/screens/Home/HomeScreen/HomeScreen';
import {
  DrawerNavigationProps,
  RenderItemFunc,
  onIconFunc,
} from 'src/types/DrawerNavigationTypes';
import {styles as styling} from './styles';

const theme = LIGHT;

const Drawer = createDrawerNavigator();

const CustomDrawerContent = () => {
  const styles = styling(theme);
  const navigation = useNavigation<DrawerNavigationProps>();

  const onProfile = () => {
    navigation.navigate('ProfileScreen', {});
  };

  const onIconPress: onIconFunc = navigateTo => {
    navigation.navigate(navigateTo);
  };

  const renderItem: RenderItemFunc = (item, index) => (
    <Icon
      key={index}
      title={item.title}
      variant="body3"
      color={COLORS[theme].white}
      SVGIcon={<item.icon fill={COLORS[theme].white} height={18} width={18} />}
      mB={20}
      onPress={() => onIconPress(item.navigateTo)}
      extraStyle={{
        title: [STYLES.mL(15), STYLES.fontSize(15)],
      }}
    />
  );

  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={STYLES.flex1}>
      <View style={styles.container}>
        <Space mB={20} />

        <AppAvatar name={'Saleem Raza'} size={70} onAvatar={onProfile} />
        <Space mB={30} />

        <View style={styles.listContainer}>{drawerList.map(renderItem)}</View>
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerNavigation: React.FC = props => {
  const styles = styling(theme);
  return (
    <View style={styles.sideContainer}>
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: styles.drawerStyle,
          sceneContainerStyle: styles.sceneContainerStyle,
          headerShown: false,
        }}
        drawerContent={(props: any) => <CustomDrawerContent />}>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNavigation;
