import React from 'react';

import Timer from './Timer.view';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export class TimeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Time Card',
      task: 'This is a time card task.',
    };
  }
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.iconView}>
          <Icon name="drag-indicator" size={40} color={'#6C6C6A'} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.smallTitle}>{this.state.title}</Text>
          <Text style={styles.subText}>{this.state.task}</Text>
          <Text style={styles.subText}>{this.state.task}</Text>
          <Text style={styles.subText}>{this.state.task}</Text>
        </View>
        <View style={styles.timerView}>
          <Timer style={styles.timer} running={this.props.running} />
        </View>
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
    marginHorizontal: 15,
    marginVertical: 5,
    paddingRight: 10,
    paddingVertical: 10,
    height: 90,
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  iconView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 1,
  },
  textView: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'center',
    //borderWidth: 1,
  },
  timerView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth: 1,
  },
  smallTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 13,
    fontWeight: 'normal',
  },
  timer: {
    alignSelf: 'center',
  },
});
