import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
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
    this.timerId = setInterval(() => {
      this.setState({time: (this.state.time += 1)});
    }, 500);
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
  container: {
    alignSelf: 'center',
  },
  main: {
    fontWeight: 'bold',
    fontSize: 34,
    color: 'white',
  },
});
