/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import createFinalStore from './js/store'
import AwesomeApp from './js/root'
import ChatList from './js/chatList'
import {  StackNavigator } from 'react-navigation'

const store = createFinalStore();
const BasicApp = StackNavigator({
  AwesomeApp: {screen: AwesomeApp},
  ChatList: {screen: ChatList},
})

const app = () => (
  <Provider store={store}>
    <BasicApp />
  </Provider>
)

AppRegistry.registerComponent('awesomeApp', () => app);
