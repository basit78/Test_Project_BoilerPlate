export type ListType = 'navigation' | 'link' | 'toggle' | 'popup';

export type SettingList = {
  title: string;
  navigateTo?: string | undefined;
  listType: ListType;
};

export type SettingScreenProps = {
  drawerAnimationStyle?: any;
};

export type ChangeLanguageList = {
  title: string;
  code: string;
  selected: boolean;
};

export type renderList = ({item}: {item: SettingList}) => React.ReactElement;
export type renderItem = (
  item: ChangeLanguageList,
  index: number,
) => React.ReactElement;
