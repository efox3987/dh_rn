import {Linter} from 'eslint';
import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import theme from '../../style/theme';
// import Blink from '../../util/Blink';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      time: 0,
    };
  }

  // Changes state of the timer. Calls timer start or stop methods depending on new state.
  onPress = () => {
    this.state.running = !this.state.running;
    console.log(this.state.running);
    this.state.running ? this.start() : this.stop();
  };

  stop = () => {
    clearInterval(this.timerId);
  };

  start = () => {
    const start = Date.now();
    const elapsed = this.state.time;

    this.timerId = setInterval(() => {
      const millis = Date.now() - start;
      const secs = Math.floor(millis / 1000);
      this.setState({time: elapsed + secs});
    }, 1000);
  };

  // Ugly and ungainly method of changing the time display depending on time elapsed.
  displayTime = () => {
    var minutes = Math.floor(this.state.time / 60) % 60;
    var hours = Math.floor(this.state.time / 3600);
    if (this.state.time < 60) {
      // Seconds only.
      return <Text style={styles.main}>{this.state.time}s</Text>;
    } else {
      return (
        // Minutes and hours.
        <Text style={styles.main}>
          {hours}:
          {minutes < 10 ? <Text>0{minutes}</Text> : <Text>{minutes}</Text>}
        </Text>
      );
    }
  };

  render() {
    return (
      <TouchableOpacity onPress={this.onPress} style={styles.container}>
        {this.displayTime()}
      </TouchableOpacity>
    );
  }
}

export default Timer;

const styles = StyleSheet.create({
  view: {backgroundColor: theme.COLOR_ERROR},
  container: {
    alignSelf: 'center',
  },
  main: {
    fontWeight: 'bold',
    fontSize: theme.FONT_SIZE_HUGE,
    color: theme.TEXT_WHITE,
  },
});
