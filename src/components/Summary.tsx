import React, {useContext} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ActivityContext, {ActivityType} from '../context/ActivityContext';
import theme from '../style/theme';
import ActivitySummary from './ActivitySummary';

function Summary() {
  const {activities} = useContext(ActivityContext);

  const renderActivity = (item: ActivityType) => {
    return (
      <ActivitySummary
        title={item.title}
        notes={item.notes}
        timeLogged={item.timeLogged}
        sessions={item.sessions}
      />
    );
  };

  return (
    <View style={styles.main}>
      <FlatList
        data={activities}
        renderItem={({item}) => renderActivity(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    color: theme.COLOR_SURFACE_LOWEST,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  listItem: {
    backgroundColor: theme.COLOR_SURFACE_LOW,
  },
  text: {
    color: theme.COLOR_TEXT_WHITE,
  },
});

export default Summary;
