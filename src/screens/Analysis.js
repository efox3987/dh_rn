import React, {useRef} from 'react';
import {View, StyleSheet, Text, FlatList, Button} from 'react-native';
import {Example} from '../components/BottomSheet';
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.COLOR_BACKGROUND,
  },
});

export default Analysis;
