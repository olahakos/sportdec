import React, { Component } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

import {calculateTimeDiff} from '../../utils/dateHelper';
import styles from './NewsElement.style';

class NewsElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: props.data.headline,
      image: props.data.links
        .find(item => (item.rel === 'IMAGE_MOBILE'))
        .url
        .replace('http://', 'https://'),
      time: calculateTimeDiff(props.data.publishedTime)
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: this.state.image}}
          style={styles.thumbnail}
        >
          <View style={styles.coaptionCnt} >
            <Text style={styles.headline}>
              {this.state.headline}
            </Text>
            <Text style={styles.subHeadline}>
              {this.state.time}
            </Text>
          </View>
        </Image>
      </View>
    );
  }
}

export default NewsElement;
