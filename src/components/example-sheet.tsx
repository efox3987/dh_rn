import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ActionSheet, {SheetProps} from 'react-native-actions-sheet';

function ExampleSheet(props: SheetProps<{value: string}>) {
  return (
    <ActionSheet id={props.sheetId}>
      <View style={styles.main}>
        <Text>{props.payload?.value}</Text>
      </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  main: {
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExampleSheet;
