import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-native';
//import login from './app/login';
//import signup from './app/signup';


export default class App extends React.Component {
  render() {
    <View>
      <Text>saddsfdsf</Text></View>
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen:login
  },
  Signup: {
    screen:signup
  }
});

const AppContainer = createAppContainer(AppNavigator);