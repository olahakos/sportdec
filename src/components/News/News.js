const _ = require('lodash');
import React, { Component } from 'react';
import {
  ListView,
  RecyclerViewBackedScrollView,
  TouchableHighlight,
  View
} from 'react-native';

import Article from '../Article/Article';
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
          renderRow={this._renderExRow.bind(this)}
          renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
          style={styles.lv}
        />
    );
  }

  _pressRow(rowID) {
    const article = getContent(datas.article);
    this.props.navigator.push({
      title: article.shortHeadline,
      component: Article,
      passProps: {article: article}
    });
  }

  _renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <TouchableHighlight onPress={highlightRow}>
        <View>
          <NewsElement data={rowData}/>
        </View>
      </TouchableHighlight>
    );
  }

  _renderExRow(example, sectionID, rowID, highlightRow) {
    return this._renderRow(
      example,
      sectionID,
      rowID,
      () => {
        this._pressRow(rowID);
        highlightRow(rowID);
      }
    );
  }
}

export default News;
