import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

import theme from './../style/theme';

import CardContext from '../context/CardContext';

export default class ActivityPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = CardContext;

  render() {
    console.log('SUCCESS');
    return (
      <Animated.View style={styles.main}>
        <View style={styles.card}>
          <Text>
            {this.context.timeCards[this.props.selectedCardIndex].title}
          </Text>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 2,
    backgroundColor: theme.COLOR_BACKGROUND,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  card: {
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: theme.COLOR_SURFACE_LOW,
    paddingRight: 10,
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: theme.COLOR_TEXT_BLACK,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
