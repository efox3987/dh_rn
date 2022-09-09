import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import theme from '../../style/theme';

// Props
// title: string - required to name text in the button
// primary: boolean - true = filled in button | false = outlined button

export default class DHButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: true};
  }

  onComponentDidUpdate(props) {
    if (props.active !== this.props.active) {
      this.setState({active: this.props.active});
    }
  }

  render() {
    return (
      <React.Fragment>
        <TouchableOpacity onPress={this.props.onPress}>
          <View
            style={
              this.props.primary ? styles.viewPrimary : styles.viewSecondary
            }>
            <Text
              style={
                this.props.primary ? styles.textPrimary : styles.textSecondary
              }>
              {this.props.title.toUpperCase()}
            </Text>
          </View>
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  viewPrimary: {
    backgroundColor: theme.COLOR_PRIMARY,
    alignSelf: 'stretch',
    margin: 15,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
  },
  viewSecondary: {
    bacgkroundColor: 'rgba(52, 52, 52, 0)',
    alignSelf: 'stretch',
    margin: 15,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderColor: theme.COLOR_PRIMARY,
    borderWidth: 1,
    borderRadius: 25,
  },
  textPrimary: {fontWeight: '600'},
  textSecondary: {fontWeight: '600', color: theme.COLOR_PRIMARY},
});
