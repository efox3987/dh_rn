import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import theme from '../style/theme';

const Analysis = () => {
  return (
    <View style={styles.main}>
      <Text style={{color: theme.TEXT_WHITE}}>Analysis</Text>
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
