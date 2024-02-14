import React from 'react';

export type FilterPlansScreenProps = {};

type List = {
  title: string;
  icon: any;
};

export type FilterList = {
  category: string;
  data: List[];
};

type renderListParams = {
  params: {
    item: List;
    index: number;
  };
};

export type renderList = (item: List, index: number) => React.ReactElement;
export type renderItem = (item: FilterList, index: number) => React.ReactNode;
