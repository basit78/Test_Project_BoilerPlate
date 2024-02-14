import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {COLORS} from 'src/assets/theme';
import AppNavigator from 'src/navigation';
import store from 'src/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StatusBar
        translucent
        backgroundColor={COLORS['light'].statusbar}
        barStyle="dark-content"
      />
      <AppNavigator />
    </Provider>
  );
};

export default App;
