import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Timer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     running: false,
  //   };
  // }

  start() {}

  render() {
    console.log(this.props.running);
    return (
      <TouchableOpacity>
        <Text>0:00 {this.props.running}</Text>
      </TouchableOpacity>
    );
  }
}

export default Timer;
