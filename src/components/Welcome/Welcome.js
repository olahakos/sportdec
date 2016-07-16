import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from './Welcome.style';

class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This Page is under construction!
        </Text>
        <Text style={styles.instructions}>
          On Emulator you have these options:
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

export default Welcome;
