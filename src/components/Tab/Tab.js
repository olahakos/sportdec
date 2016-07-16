import React, { Component } from 'react';

import {colors} from '../../config';
import styles from './Tab.style';
import News from '../News/News';
import Welcome from '../Welcome/Welcome';

var ScrollableTabView;

class Tab extends Component {
  constructor(props) {
    super(props);
    ScrollableTabView = props.ScrollableTabView;
    this.state = {
      title: props.title,
      active: props.tabConfig.active,
      tabs: props.tabConfig.tabs
    };
  }
  render() {
    return (
      <ScrollableTabView
        style={styles.tabView}
        initialPage={this.state.active}
        tabBarPosition='bottom'
        tabBarUnderlineColor={colors.lightBlue}
        tabBarActiveTextColor={colors.purple}
        tabBarInactiveTextColor={colors.grey}
      >
        <Welcome tabLabel={this.state.tabs[0].toUpperCase()} />
        <Welcome tabLabel={this.state.tabs[1].toUpperCase()} />
        <News tabLabel={this.state.tabs[2].toUpperCase()} />

      </ScrollableTabView>
    );
  }
}

export default Tab;
