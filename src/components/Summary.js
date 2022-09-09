import React, {useContext} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import CardContext from '../context/CardContext';
import theme from '../style/theme';

function Summary() {
  const {timeCards} = useContext(CardContext);

  const renderCard = item => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>{item.notes}</Text>
        <Text style={styles.text}>Hours {item.createdTime.getHours()}</Text>
        <Text style={styles.text}>Minutes {item.createdTime.getMinutes()}</Text>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <FlatList data={timeCards} renderItem={({item}) => renderCard(item)} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    color: theme.COLOR_SURFACE_LOWEST,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    color: 'red',
  },
  text: {
    color: theme.COLOR_TEXT_WHITE,
  },
});

export default Summary;
