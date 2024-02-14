import {RootState, useSelector} from 'src/store';

const Wrapper = (Component: React.FC<any>) => (props: any) => {
  const appState = useSelector((state: RootState) => state.app);
  return <Component {...props} theme={appState.theme} />;
};

export default Wrapper;
