import React from 'react';

import theme from '../../style/theme';

import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

// Props
// title: string - Required for placeholder and header text.
// onChangeText: string - Required to handle state changes from text udpates.
// multiline: boolean - Optional, if you want a multiline input.

export default class StyledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TextInput
        mode={'flat'}
        label={this.props.title}
        dense={true}
        style={styles.input}
        underlineColor={theme.COLOR_SURFACE_HIGH}
        selectionColor={theme.COLOR_PRIMARY}
        activeUnderlineColor={theme.COLOR_SECONDARY}
        multiline={this.props.multiline ? this.props.multiline : false}
        theme={{
          colors: {
            text: theme.COLOR_TEXT_WHITE,
            placeholder: theme.COLOR_TEXT_INACTIVE,
          },
        }}
        placeholderTextColor={theme.COLOR_SURFACE_HIGH}
        onChangeText={text => this.props.onChangeText(text)}
        maxLength={256}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.COLOR_SURFACE_LOW,
    fontSize: theme.FONT_SIZE_TITLE,
    marginHorizontal: 5,
    marginBottom: 5,
  },
});
