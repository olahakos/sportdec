import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Main from './src/views/Main/Main';

class sportdec extends Component {
  render() {
    return (
      // I'm using dependency injection here, to make the testing easier.
      <Main ScrollableTabView={require('react-native-scrollable-tab-view')} />
    );
  }
}

AppRegistry.registerComponent('sportdec', () => sportdec);
