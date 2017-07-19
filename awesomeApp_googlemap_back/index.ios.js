/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import AwesomeApp from './js/root';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import createFinalStore from './js/store';

const store = createFinalStore();

const app2 = () => (
  <Provider store={store}>
    <AwesomeApp />
  </Provider>
)

AppRegistry.registerComponent('awesomeApp', () => app2);
