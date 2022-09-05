import React from 'react';

import Timer from './Timer.view';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../style/theme';
import TouchHistoryMath from 'react-native/Libraries/Interaction/TouchHistoryMath';

export class TimeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      notes: props.notes,
      timeCreated: props.timeCreated,
    };
  }
  render() {
    // let hours = this.props.timeCreated.getHours();
    // let minutes = this.props.timeCreated.getMinutes();

    return (
      <View style={styles.wrapper}>
        <View style={styles.card}>
          <View style={styles.iconView}>
            <Icon name="drag-indicator" size={40} color={'#6C6C6A'} />
          </View>
          <View style={styles.textView}>
            <Text style={styles.smallTitle}>{this.state.title}</Text>
            <Text style={styles.subText}>{this.state.notes}</Text>
          </View>
          <View style={styles.timerView}>
            <Timer style={styles.timer} running={this.props.running} />
          </View>
        </View>
        <Text style={styles.createdTime}>
          {this.props.hour}:{this.props.minutes}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.COLOR_SURFACE_DEEP,
    marginHorizontal: 10,
    paddingRight: 10,
    paddingVertical: 15,
    height: 90,
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  wrapper: {
    marginTop: 10,
  },
  iconView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  timerView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  subText: {
    fontSize: 13,
    fontWeight: 'normal',
    color: 'white',
  },
  timer: {
    alignSelf: 'center',
  },
  createdTime: {
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingTop: 5,
    paddingRight: 30,
    color: theme.TEXT_WHITE,
    fontSize: theme.FONT_SIZE_TINY,
  },
});
