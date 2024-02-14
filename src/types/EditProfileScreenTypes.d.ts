import {GenderList} from './SelectGenderSheetTypes';

export type ProfileScreenProps = {};

export type ProfileFormName = 'firstName' | 'lastName' | 'gender';

export type ProfileForm = {
  firstName: string;
  lastName: string;
  gender: string;
};

export type renderItem = (
  item: GenderList,
  index: number,
) => React.ReactElement;
