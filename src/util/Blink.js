// This is supposed to be a blinking animation wrapper component.
// It doesn't work, though, not sure why. Might be able to apply these concepts
// to animating within the Timer.view.js file.
import React from 'react';
import {Animated, View} from 'react-native';

export default class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.fadeAnimation = new Animated.Value(1);
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
  }

  render() {
    return (
      <View style={{...this.props.style}}>
        <Animated.View style={{opacity: this.fadeAnimation}}>
          {this.props.children}
        </Animated.View>
      </View>
    );
  }
}
