import {StyleSheet} from 'react-native';

import {colors} from '../../config';

module.exports = StyleSheet.create({
  trigger: {
    width: 20,
    height: 20,
    backgroundColor: `${colors.white}`,
    margin: 10,
    marginLeft: 5
  },
  filterHead: {
    padding: 10,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1
  },
  filterHeadText: {
    color: colors.grey,
    fontWeight: 'bold'
  },
  active: {
    color: colors.lightBlue
  },
  h1: {
    fontSize: 20,
    color: `${colors.white}`
  }
});
