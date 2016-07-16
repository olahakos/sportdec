import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from './EmptyView.style';

class EmptyView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          No results found!
        </Text>
        <Text style={styles.instructions}>
          Try to change the search parameters
        </Text>
      </View>
    );
  }
}

export default EmptyView;
