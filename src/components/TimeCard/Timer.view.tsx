import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import theme from '../../style/theme';
import BlinkingColon from './BlinkingColon';

interface State {
  running: boolean;
  time: number;
  currentLength: number;
}

interface Props {
  onPress: (elapsedTime: number) => void;
}

class Timer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      running: false,
      time: /*320280*/ 58,
      currentLength: 0,
    };
  }
  private timerID: number = 0;

  onComponentDidUpdate = (props: Props, state: State) => {
    if (state.running !== this.state.running) {
      console.log('hit');
      state.running ? this.start() : this.stop();
    }
  };

  // Changes state of the timer. Calls timer start or stop methods depending on new state.
  onPress = () => {
    this.setState({running: !this.state.running}, () => {
      this.state.running ? this.start() : this.stop();
    });
    console.log('running: ' + this.state.running);

    // Component did update instead of this?
    // Used to make sure timer stops blinking when you click it
  };

  stop = () => {
    clearInterval(this.timerID);
    console.log('time elapsed in stop() : ' + this.state.time);
    this.props.onPress(this.state.currentLength);
  };

  start = () => {
    console.log('started');
    const start = Date.now();
    const elapsed = this.state.time;

    this.timerID = setInterval(() => {
      const millis = Date.now() - start;
      const secs = Math.floor(millis / 1000);
      this.setState({time: elapsed + secs, currentLength: secs});
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
      // Minutes and hours.
      return (
        <Text style={styles.main}>
          {hours}
          <BlinkingColon running={this.state.running} />
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
    color: theme.COLOR_TEXT_WHITE,
  },
});
