import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TimeCard} from '../components/TimeCard/TimeCard';

const Home = () => {
  return (
    <View style={styles.main}>
      <TimeCard />
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default Home;
