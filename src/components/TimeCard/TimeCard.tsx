import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import theme from '../../style/theme';
import Timer from './Timer.view';

import Icon from 'react-native-vector-icons/MaterialIcons';

import ActivityContext from '../../context/ActivityContext';

interface Props {
  title: string;
  notes?: string;
  hour: number;
  minutes: number;
  activity: string;
  onPress: () => void;
}

export function TimeCard(props: Props) {
  const {title, notes, hour, minutes, activity} = props;
  const [time, setTime] = useState(0);

  const {logTime} = useContext(ActivityContext);

  const updateTime = (elapsedTime: number) => {
    setTime(time + elapsedTime);
    logTime(elapsedTime, activity);
  };

  return (
    <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
      <View style={styles.card}>
        <View style={styles.iconView}>
          <Icon name="drag-indicator" size={40} color={'#6C6C6A'} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.smallTitle}>{title}</Text>
          <Text style={styles.subText}>{notes}</Text>
        </View>
        <View style={styles.timerView}>
          <Timer onPress={updateTime} />
        </View>
      </View>
      <Text style={styles.createdTime}>
        {hour}:{minutes}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.COLOR_SURFACE_LOWEST,
    marginHorizontal: 10,
    paddingRight: 10,
    paddingVertical: 15,
    height: 90,
    borderRadius: 10,
    shadowColor: theme.COLOR_TEXT_BLACK,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  wrapper: {
    marginTop: 10,
  },
  iconView: {
    flex: 1,
    paddingRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    flex: 7,
    flexDirection: 'column',
    paddingRight: 10,
    justifyContent: 'center',
  },
  timerView: {
    flex: 2,
    minWidth: 35,
    //paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
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
    color: theme.COLOR_TEXT_WHITE,
    fontSize: theme.FONT_SIZE_TINY,
  },
});
