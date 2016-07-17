import {StyleSheet} from 'react-native';

import {colors} from '../../config';

module.exports = StyleSheet.create({
  inputCnt: {
    height: 40,
    maxHeight: 40,
    backgroundColor: colors.darkWhite,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    padding: 8,
    margin: 5,
    fontSize: 14,
    height: 30,
    borderRadius: 8,
    backgroundColor: colors.lightGray,
    flex: 1
  },
  newsCnt: {
    marginTop: 65,
    backgroundColor: colors.darkWhite
  }
});
