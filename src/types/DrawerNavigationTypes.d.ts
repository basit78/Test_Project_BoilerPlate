import {DrawerNavigationProp} from '@react-navigation/drawer';

export type DrawerList = {
  title: string;
  icon?: any;
  navigateTo?: string;
};

export type DrawerParamList = {
  NotificationsScreen: {};
  SettingScreen: {};
  ProfileScreen: {};
  EditProfileScreen: {};
  WorkoutPlansScreen: {};
};

export type onIconFunc = (navigateTo: any) => void;

export type RenderItemFunc = (
  item: DrawerList,
  index: number,
) => React.ReactNode;

export type DrawerNavigationProps = DrawerNavigationProp<DrawerParamList>;
