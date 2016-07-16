import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  Text,
  View
} from 'react-native';

import {calculateTimeDiff} from '../../utils/dateHelper';
import styles from './Article.style';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: props.article,
      body: props.article.body
        .replace(/<p>/gi, '')
        .replace(/<\/p> ?/gi, '\n\n'),
      headline: props.article.headline,
      time: calculateTimeDiff(props.article.publishedTime),
      image: props.article.links
        .find(item => (item.rel === 'IMAGE_MOBILE'))
        .url
        .replace('http://', 'https://')
    };
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imgCnt}>
          <Image
            source={{uri: this.state.image}}
            style={styles.thumbnail}
          >
            <Text style={styles.time}>{this.state.time}</Text>
          </Image>
        </View>
        <View style={styles.innerCnt}>
          <View>
            <Text style={styles.headline}>{this.state.headline}</Text>
          </View>
          <View>
            <Text>{this.state.body}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Article;
