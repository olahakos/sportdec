import Menu, {
  MenuOptions,
  MenuOption,
  MenuTrigger
} from 'react-native-menu';

import React, { Component } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

import {sorting} from '../../config';
import styles from './FilterMenu.style';

class FilterMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active
    };
  }
  render() {
    return (
      <Menu onSelect={(value) => {
        this.props.onFilterSelect(value);
        this.setState({ active: value });
      }}>
        <MenuTrigger>
          <Image
            style={styles.trigger}
            source={require('../../assets/filter.png')}
          />
        </MenuTrigger>
        <MenuOptions>
          <View style={styles.filterHead}>
            <Text style={styles.filterHeadText}>Sorting</Text>
          </View>
          {this._renderSortItems()}
        </MenuOptions>
      </Menu>
    );
  }

  _renderSortItems() {
    return (sorting.map((item, index) => {
      let isActive = {};
      if (item.type === this.state.active) {
        isActive = styles.active;
      }
      return (<MenuOption value={item.type} key={index}>
        <Text style={isActive}>{item.text}</Text>
      </MenuOption>
      );
    }));
  }
}

export default FilterMenu;
