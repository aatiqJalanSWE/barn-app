import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './Util';
import Signup from '../screens/Signup';
import Signup1 from '../screens/Signup1';
import OtpPage from '../screens/OtpPage';

const Stack = createNativeStackNavigator();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor="#F0F0F0" barStyle={'dark-content'} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signup1" component={Signup1} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="OtpPage" component={OtpPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export default ApplicationNavigator;
