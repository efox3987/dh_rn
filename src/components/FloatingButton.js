import React from 'react';

import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import theme from './../style/theme';

export default class FloatingButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onPress: props.onPress,
    };
  }

  render() {
    return (
      <View style={styles.plusView}>
        <TouchableOpacity>
          <Icon
            style={styles.plus}
            name={'pluscircle'}
            size={45}
            onPress={this.props.onPress}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  plusView: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginRight: 20,
    marginBottom: 20,
  },
  plus: {
    //This shadow needs work idk how to get it just on the outside of the icon...
    color: theme.COLOR_SECONDARY,
    shadowColor: '#',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
