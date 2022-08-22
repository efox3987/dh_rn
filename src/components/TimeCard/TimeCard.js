import React from 'react';

import Timer from './Timer.view';
import {View, Text, StyleSheet} from 'react-native';

export class TimeCard extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <Text>This is a time card.</Text>
        <Timer style={styles.timer} running={this.props.running} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#AD70FB',
    margin: 15,
    paddingHorizontal: 35,
    paddingVertical: 15,
    height: 90,
    borderRadius: 10,
  },
  smallTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  subText: {},
  timer: {
    alignSelf: 'flex-end',
  },
});
