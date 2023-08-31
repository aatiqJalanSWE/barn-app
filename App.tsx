/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import ApplicationNavigator from './src/navigator/Application';

function App(): JSX.Element {
  return <ApplicationNavigator />;
}

const styles = StyleSheet.create({
  sectionContainer: {flex: 1, backgroundColor: '#fff'},
});

export default App;
