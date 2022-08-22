import React from 'react';

import Timer from './Timer.view';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export class TimeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      task: "This is a time card.",
    }
  }
  render() {
    return (
      <View style={styles.card}>
        <Icon name='holder'></Icon>
        <Text>{this.state.task}</Text>
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
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: .5,
    shadowRadius: 3,
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
