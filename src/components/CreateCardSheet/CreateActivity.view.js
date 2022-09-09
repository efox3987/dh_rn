import React from 'react';

import {StyleSheet, View} from 'react-native';
import StyledInput from '../Reusable/StyledInput';
import DHButton from '../Reusable/DHButton';
import theme from '../../style/theme';

export default class CreateActivity extends React.Component {
  constructor(props) {
    super(props);
  }
  onChangeTitle = text => {};

  onChangeNotes = text => {};

  render() {
    return (
      <View style={styles.main}>
        <StyledInput
          title={'Activity Name'}
          onChangeText={text => this.onChangeTitle(text)}
        />
        <StyledInput
          title={'Activity Notes'}
          onChangeText={text => this.onChangeTitle(text)}
        />
        <View style={styles.buttonContainer}>
          <DHButton
            title={'Cancel'}
            primary={false}
            onPress={this.props.onPressCancel}
          />
          <DHButton title={'Create'} primary={true} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.COLOR_SURFACE_LOW,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
