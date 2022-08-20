import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export class TimeCard extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <Text>This is a time card.</Text>
      </View>
    );
  }
}

const Timer = () => {};

const styles = StyleSheet.create({
  card: {
    alignSelf: 'stretch',
    backgroundColor: 'green',
    margin: 15,
    padding: 15,
    height: 75,
    borderRadius: 10,
  },
});
