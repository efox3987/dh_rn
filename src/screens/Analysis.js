import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Summary from '../components/Summary';
import theme from '../style/theme';

const Analysis = () => {
  return (
    <View style={styles.main}>
      <Summary />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.COLOR_BACKGROUND,
  },
});

export default Analysis;
