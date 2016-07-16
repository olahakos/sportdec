import React, { Component } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

import {calculateTimeDiff} from '../../utils/dateHelper';
import styles from './Article.style';

class Article extends Component {
  constructor(props) {
    super(props);
    // console.log(props.article);
    this.state = {
      article: props.article,
      body: props.article.body,
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
      <View style={styles.container}>
        <Image
          source={{uri: this.state.image}}
          style={styles.thumbnail}
        >
          <Text style={styles.time}>
            {this.state.time}
          </Text>
          <View style={styles.coaptionCnt} >
            <Text style={styles.headline}>
              {this.state.headline}
            </Text>
          </View>
        </Image>
        <View>
          <Text>
            {this.state.body}
          </Text>
        </View>
      </View>
    );
  }
}

export default Article;
