import {StyleSheet} from 'react-native';

import {colors} from '../../config';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    height: 200
  },
  thumbnail: {
    height: 200
  },
  coaptionCnt: {
    marginTop: 120,
    height: 80,
    backgroundColor: colors.purple50,

    borderLeftColor: colors.lightBlue,
    borderLeftWidth: 3,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,

    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  headline: {
    color: colors.white,
    paddingLeft: 10,
    fontSize: 18
  },
  subHeadline: {
    color: colors.grey,
    paddingLeft: 10,
    fontSize: 12
  }
});
