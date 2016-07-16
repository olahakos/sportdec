const _ = require('lodash');
import React, { Component } from 'react';
import {
  ListView
} from 'react-native';

import {datas} from '../../config';
import {getContent} from '../../utils/contentHelper';
import NewsElement from '../NewsElement/NewsElement';
import styles from './News.style';

class News extends Component {
  constructor(props) {
    super(props);
    const news = getContent(datas.news);
    if (!_.isArray(news)) {
      throw news.error;
    }
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(news)
    };
  }

  render() {
    return (
      <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <NewsElement data={rowData}/>}
          style={styles.lv}
        />
    );
  }

  _genRows(news, pressData) {
    var dataBlob = [];
    for (var ii = 0; ii < news.length; ii++) {
      var pressedText = pressData[ii] ? ' (pressed)' : '';
      dataBlob.push('Row ' + ii + pressedText);
    }
    return dataBlob;
  }

  _renderRow(rowData, sectionID, rowID, highlightRow) {
    // var rowHash = Math.abs(hashCode(rowData));
    // var imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];
    // return (
    //   <TouchableHighlight onPress={() => {
    //       this._pressRow(rowID);
    //       highlightRow(sectionID, rowID);
    //     }}>
    //     <View>
    //       <View style={styles.row}>
    //         <Image style={styles.thumb} source={imgSource} />
    //         <Text style={styles.text}>
    //           {rowData + ' - ' + LOREM_IPSUM.substr(0, rowHash % 301 + 10)}
    //         </Text>
    //       </View>
    //     </View>
    //   </TouchableHighlight>
    // );
  }
}

export default News;
