import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from './Header.style';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>
          {this.state.title}
        </Text>
      </View>
    );
  }
}

export default Header;