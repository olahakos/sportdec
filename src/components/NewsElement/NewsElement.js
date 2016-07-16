import React, { Component } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

import styles from './NewsElement.style';

class NewsElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: props.data.headline,
      image: props.data.links[0].url
        .replace('http://', 'https://'),
      time: this.calculateTime(props.data.publishedTime)
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
  calculateTime(time) {
    const now = new Date().getTime();
    const mins = Math.round((now - time) / (60 * 1000));
    const hours = Math.round(mins / 60);
    const days = Math.round(hours / 24);
    const months = Math.round(days / 30);
    if (months > 0) {
      return `${months} ${(months === 1) ? 'MONTH' : 'MONTHS'} AGO`;
    }
    if (days > 0) {
      return `${days} ${(days === 1) ? 'DAY' : 'DAYS'} AGO`;
    }
    if (hours > 0) {
      return `${hours} ${(hours === 1) ? 'HOUR' : 'HOURS'} AGO`;
    }
    if (mins > 0) {
      return `${mins} ${(mins <= 1) ? 'MINUTE' : 'MINUTES'} AGO`;
    }
  }
}

export default NewsElement;
