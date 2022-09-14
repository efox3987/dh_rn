import React, {Component} from 'react';
import {Text} from 'react-native';

interface Props {
  running: boolean;
}

interface State {
  showText: boolean;
}

export default class BlinkingColon extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showText: true,
    };

    // Change the state every second
    setInterval(
      () => {
        this.setState(previousState => {
          return {showText: !previousState.showText};
        });
      },
      // Define any blinking time.
      1000,
    );
  }

  render() {
    if (this.props.running === false) {
      return <Text>:</Text>;
    } else {
      return this.state.showText ? (
        <Text>:</Text>
      ) : (
        <Text style={{opacity: 0.0}}>:</Text>
      );
    }
  }
}
