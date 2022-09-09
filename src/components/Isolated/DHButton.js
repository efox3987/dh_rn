import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import theme from '../../style/theme';

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
              this.props.secondary ? styles.viewSecondary : styles.viewPrimary
            }>
            <Text style={styles.text}>{this.props.title.toUpperCase()}</Text>
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
    backgroundColor: theme.COLOR_SECONDARY,
    alignSelf: 'stretch',
    margin: 15,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
  },
  text: {fontWeight: '600'},
});
