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
      tabs: props.tabConfig.tabs,
      isSearch: props.isSearch
    };
    this._news = News;
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
        <News
          ref={(news) => { this._news = news; }}
          tabLabel={this.state.tabs[2].toUpperCase()}
          navigator={this.props.navigator}
          store={this.props.store}
          MenuContext={this.props.MenuContext}
          FilterMenu={this.props.FilterMenu}
        />

      </ScrollableTabView>
    );
  }
}

export default Tab;
