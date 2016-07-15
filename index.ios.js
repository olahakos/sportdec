/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Main from './src/views/Main/Main';

class sportdec extends Component {
  render() {
    return (
      <Main ScrollableTabView={ScrollableTabView} />
    );
  }
}

AppRegistry.registerComponent('sportdec', () => sportdec);
