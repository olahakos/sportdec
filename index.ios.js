import { MenuContext } from 'react-native-menu';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import FilterMenu from './src/components/FilterMenu/FilterMenu';
import Main from './src/views/Main/Main';

class sportdec extends Component {
  render() {
    return (
      // I'm using dependency injections here, to make the testing easier.
      <Main
        ScrollableTabView={require('react-native-scrollable-tab-view')}
        MenuContext={MenuContext}
        FilterMenu={FilterMenu}
      />
    );
  }
}

AppRegistry.registerComponent('sportdec', () => sportdec);
