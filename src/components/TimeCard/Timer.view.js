import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      time: new Date(),
    };
  }

  // Changes state of the timer. Calls timer start or stop methods depending on new state.
  onPress = () => {
    this.state.running = !this.state.running;
    console.log(this.state.running);
    this.state.running ? this.start() : this.stop();
  };

  stop = () => {
    console.log('stopped timer');
  };

  start = () => {
    console.log('started timer');
  };

  render() {
    console.log(this.state.running);
    return (
      <TouchableOpacity onPress={this.onPress}>
        <Text>{this.state.time.toLocaleTimeString()}</Text>
      </TouchableOpacity>
    );
  }
}

export default Timer;
