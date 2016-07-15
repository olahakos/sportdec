import React, { Component } from 'react';
import {NavigatorIOS} from 'react-native';

import {tabConfig} from '../../config';
import styles from './Main.style';
import Tab from '../../components/Tab/Tab';

class Main extends Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Tab,
          title: `${tabConfig.tabs[tabConfig.active]}`,
          passProps: {
            tabConfig: tabConfig,
            ScrollableTabView: this.props.ScrollableTabView
          }
        }}
        style={styles.container}
      />
    );
  }
}

export default Main;
