// This is supposed to be a blinking animation wrapper component.
// It doesn't work, though, not sure why. Might be able to apply these concepts
// to animating within the Timer.view.js file.
import React from 'react';
import {Animated, View, Text} from 'react-native';

export default class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.fadeAnimation = new Animated.Value(1);
    this.state = {
      running: props.running,
    };
  }

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.fadeAnimation, {
          toValue: 0,
          duration: this.props.duration,
          useNativeDriver: true,
        }),
        Animated.timing(this.fadeAnimation, {
          toValue: 1,
          duration: this.props.duration,
          useNativeDriver: true,
        }),
      ]),
    );
    console.log('penis');
  }

  render() {
    return (
      <View style={{...this.props.style}}>
        <Animated.View style={{opacity: this.fadeAnimation}}>
          <Text>:</Text>
        </Animated.View>
      </View>
    );
  }
}
