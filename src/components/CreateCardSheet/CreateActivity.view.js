import React from 'react';

import {StyleSheet, View} from 'react-native';
import StyledInput from '../Reusable/StyledInput';
import DHButton from '../Reusable/DHButton';
import theme from '../../style/theme';
import ActivityContext from '../../context/ActivityContext';

export default class CreateActivity extends React.Component {
  static contextType = ActivityContext;
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      notes: '',
    };
  }
  onChangeTitle = text => {
    this.setState({title: text});
  };

  onChangeNotes = text => {
    this.setState({notes: text});
  };

  onCreatePress = () => {
    const title = this.state.title;
    const notes = this.state.notes;
    console.log(title);
    console.log(notes);
    this.context.createActivity(title, notes);
    this.props.hide();
  };

  onCancelPress = () => {
    this.props.hide();
  };

  render() {
    return (
      <View style={styles.main}>
        <StyledInput
          title={'Activity Name'}
          onChangeText={text => this.onChangeTitle(text)}
        />
        <StyledInput
          title={'Activity Notes'}
          onChangeText={text => this.onChangeNotes(text)}
        />
        <View style={styles.buttonContainer}>
          <DHButton
            title={'Cancel'}
            primary={false}
            onPress={this.onCancelPress}
          />
          <DHButton
            title={'Create'}
            primary={true}
            onPress={() => {
              this.onCreatePress();
            }}
          />
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
