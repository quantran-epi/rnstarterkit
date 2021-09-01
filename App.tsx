/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { RootNavigator } from '@navigation/RootNavigator'
import { store } from './src/store'
import { Provider } from 'react-redux'
import { GlobalErrorHandler } from './src/ErrorHandler';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <GlobalErrorHandler />
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
