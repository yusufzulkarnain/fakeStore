/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigators from './src/navigators/Navigators';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Toast from 'react-native-toast-message';
enableScreens();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Navigators />
      <Toast />
    </Provider>
  );
}

export default App;
