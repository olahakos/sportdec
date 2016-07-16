import React, { Component } from 'react';
import {NavigatorIOS} from 'react-native';

import {colors} from '../../config';
import { createStore } from 'redux';
import {tabConfig} from '../../config';
import styles from './Main.style';
import Tab from '../../components/Tab/Tab';

class Main extends Component {

  constructor(props) {
    super(props);
    this._tab = Tab;
    this.store = createStore(this._isSearch);
  }

  _isSearch(state = false, action) {
    state = action.type;
    return state;
  }

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: this._tab,
          title: `${tabConfig.tabs[tabConfig.active]}`,
          rightButtonTitle: 'Search',
          onRightButtonPress: () => this._rightSearchCall(),
          passProps: {
            tabConfig: tabConfig,
            ScrollableTabView: this.props.ScrollableTabView,
            store: this.store
          }
        }}
        style={styles.container}
        titleTextColor={colors.white}
        barTintColor={colors.purple}
        tintColor={colors.white}
      />
    );
  }

  _rightSearchCall() {
    this.store.dispatch({type: true});
  }
}

export default Main;
