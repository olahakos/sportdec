import {StyleSheet} from 'react-native';

import {colors} from '../../config';

module.exports = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingLeft: 10,
    paddingBottom: 15,

    backgroundColor: `${colors.purple}`
  },
  h1: {
    fontSize: 20,
    color: `${colors.white}`
  }
});
