/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Welcome from './src/components/Welcome/Welcome';

class sportdec extends Component {
  render() {
    return (
      <Welcome />
    );
  }
}

AppRegistry.registerComponent('sportdec', () => sportdec);
