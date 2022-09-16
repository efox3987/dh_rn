import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ActivityType} from '../context/ActivityContext';
import theme from '../style/theme';

interface Props extends ActivityType {}
interface State {}

class ActivitySummary extends React.Component<Props, State> {
  constructor(props: ActivityType) {
    super(props);
    this.state = {
      timeLogged: this.props.timeLogged,
    };
  }

  onComponentDidUpdate = (props: ActivityType) => {
    if (this.props.timeLogged !== props.timeLogged) {
      this.setState({timeLogge: this.props.timeLogged});
    }
  };

  calculateTime = () => {
    const time = this.props.timeLogged;
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor(time / 60) % 60;

    return {hours, minutes};
  };

  render() {
    const {hours, minutes} = this.calculateTime();
    const len = this.props.sessions.length;

    return (
      <View style={styles.main}>
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.line} />
        <Text style={styles.body}>
          {hours}:{minutes} tracked over {this.props.sessions.length}
          {len === 1 ? <Text> session</Text> : <Text> sessions</Text>}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.COLOR_SURFACE_LOW,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  line: {
    borderBottomColor: theme.COLOR_SURFACE_HIGH,
    borderBottomWidth: 2,
    marginBottom: 5,
  },
  title: {
    color: theme.COLOR_TEXT_WHITE,
    fontSize: theme.FONT_SIZE_TITLE,
  },
  body: {
    color: theme.COLOR_TEXT_WHITE,
    fontSize: theme.FONT_SIZE_BODY,
  },
});

export default ActivitySummary;
