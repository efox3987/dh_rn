import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import theme from './../style/theme';

import CardContext from '../context/CardContext';

export default class ActivityPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCard: null,
    };
  }

  static contextType = CardContext;

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.card}>
          <Text>hello world</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 2,
    backgroundColor: theme.COLOR_BACKGROUND,
    margin: 20,
  },
  card: {
    justifyContent: 'space-between',
    backgroundColor: theme.COLOR_SURFACE_MID,
    paddingRight: 10,
    paddingVertical: 15,
    height: '100%',
    borderRadius: 10,
    shadowColor: theme.TEXT_BLACK,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
