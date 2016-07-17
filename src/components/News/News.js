import React, { Component } from 'react';
import {
  ListView,
  RecyclerViewBackedScrollView,
  ScrollView,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import validator from 'validator';

import Article from '../Article/Article';
import EmptyView from '../EmptyView/EmptyView';
import {datas} from '../../config';
import {getContent} from '../../utils/contentHelper';
import NewsElement from '../NewsElement/NewsElement';
import styles from './News.style';

class News extends Component {
  constructor(props) {
    super(props);
    const news = getContent(datas.news);

    this._scrollView = ScrollView;
    this._textInput = TextInput;

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.state = {
      dataSource: ds.cloneWithRows(news),
      news: news,
      text: ''
    };

    props.store.subscribe(() => {
      if (props.store.getState() === true) {
        this._scrollView.scrollTo({y: 0});
        props.store.dispatch({type: false});
        this._textInput.focus();
      }
    });
  }

  componentDidMount() {
    this._scrollView.scrollTo({y: 45});
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.text !== prevState.text) {
      const filteredNews = this.state.news.filter(row => {
        return validator.contains(row.headline, this.state.text);
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(filteredNews)
      });
    }
  }

  render() {
    let list;
    if (this.state.dataSource.getRowCount() > 0) {
      list =
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderExRow.bind(this)}
          renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
          style={styles.lv}
        />;
    } else {
      list = <EmptyView />;
    }
    return (
      <ScrollView
        style={styles.newsCnt}
        ref={(scrollView) => { this._scrollView = scrollView; }}
      >
        <View style={styles.inputCnt}>
          <TextInput
            ref={(textInput) => { this._textInput = textInput; }}
            style={styles.textInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="Search"
          />
        </View>
        {list}
      </ScrollView>
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
