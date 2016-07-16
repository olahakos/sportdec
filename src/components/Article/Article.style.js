import {StyleSheet} from 'react-native';

import {colors} from '../../config';

module.exports = StyleSheet.create({
  container: {
    flex: 1
  },
  innerCnt: {
    padding: 10
  },
  thumbnail: {
    minHeight: 300,
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  imgCnt: {
    borderBottomColor: colors.lightBlue,
    borderBottomWidth: 2
  },
  time: {
    padding: 5,
    fontSize: 14,
    backgroundColor: colors.purple50,
    color: colors.white
  },
  headline: {
    fontSize: 20,
    color: `${colors.purple}`,
    bottom: 0,
    fontWeight: 'bold',
    paddingBottom: 10
  }
});
