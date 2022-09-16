import React from 'react';
import {View, StyleSheet} from 'react-native';
import Summary from '../components/Summary';
import ActivitySummary from '../components/ActivitySummary';
import theme from '../style/theme';
import {CardType} from '../context/CardContext';

const Analysis = () => {
  return (
    <View style={styles.main}>
      <ActivitySummary
        title={'Personal Work'}
        notes={'Notes'}
        timeLogged={5000}
        sessions={[{} as CardType]}
      />
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
