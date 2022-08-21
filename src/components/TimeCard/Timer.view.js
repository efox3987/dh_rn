import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
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
    }, 1000);
  };

  // Ugly and ungainly method of changing the time display depending on time elapsed.
  displayTime = () => {
    var minutes = Math.floor(this.state.time / 60) % 60;
    var hours = Math.floor(this.state.time / 3600);
    if (this.state.time < 60) {
      // Seconds only
      return <Text>{this.state.time}s</Text>;
    } else {
      return (
        <Text>
          {hours}:
          {minutes < 10 ? <Text>0{minutes}</Text> : <Text>{minutes}</Text>}
        </Text>
      );
    }
  };

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        {this.displayTime()}
      </TouchableOpacity>
    );
  }
}

export default Timer;
