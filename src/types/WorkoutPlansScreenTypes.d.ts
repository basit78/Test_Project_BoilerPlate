export type WorkoutPlansScreenProps = {};

export type SearchFormName = 'search';

export type SearchForm = {
  search: string;
};

export type WorkoutFilterData = {
  title: string;
};

export type List = {
  image: any;
  title: string;
  description: string;
};

export type renderList = ({item}: {item: List}) => React.ReactElement;
