import React, { Component } from 'react';
import {View} from 'react-native';

import {tabs} from '../../config';
import Header from '../../components/Header/Header';
import styles from './Main.style';
import Welcome from '../../components/Welcome/Welcome';

var ScrollableTabView;

class Main extends Component {
  constructor(props) {
    super(props);
    ScrollableTabView = props.ScrollableTabView;
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          title='Premier League'
        />
        <ScrollableTabView
          style={styles.tabView}
          initialPage={2}
        >
          <Welcome tabLabel={tabs[0].toUpperCase()} />
          <Welcome tabLabel={tabs[1].toUpperCase()} />
          <Welcome tabLabel={tabs[2].toUpperCase()} />
        </ScrollableTabView>
      </View>
      // <NavigatorIOS
      //   initialRoute={{
      //     component: Welcome,
      //     title: 'SportDec'
      //   }}
      //   style={styles.navigator}
      // />
    );
  }
}

export default Main;
