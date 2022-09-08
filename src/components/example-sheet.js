import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ActionSheet, {SheetProps} from 'react-native-actions-sheet';
import {TextInput} from 'react-native-paper';
import theme from '../style/theme';

function ExampleSheet(props) {
  return (
    <ActionSheet
      id={props.sheetId}
      containerStyle={styles.actionSheet}
      indicatorStyle={styles.indicator}
      gestureEnabled={true}>
      <View style={styles.main}>
        <TextInput
          mode={'outlined'}
          label={'Activity'}
          style={styles.input}
          selectionColor={theme.COLOR_PRIMARY}
          outlineColor={theme.COLOR_SURFACE_HIGH}
          activeOutlineColor={theme.COLOR_PRIMARY}
        />
      </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  main: {
    height: 500,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  actionSheet: {
    backgroundColor: theme.COLOR_SURFACE_LOW,
  },
  indicator: {
    backgroundColor: theme.COLOR_SURFACE_HIGH,
    width: '25%',
  },
  input: {
    backgroundColor: theme.COLOR_SURFACE_LOW,
    color: theme.TEXT_WHITE,
    alignSelf: 'stretch',
    margin: 20,
  },
});

export default ExampleSheet;
