export type onBoard = {
  image: number;
  title: string;
  text: string;
};

export type renderTabFunc = (index: number) => React.ReactElement;

export type renderItemFunc = ({
  item,
  index,
}: {
  item: onBoard;
  index: number;
}) => React.ReactElement;

export type OnBoardingScreenProps = {};
