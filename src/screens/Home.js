import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {TimeCard} from '../components/TimeCard/TimeCard';
import Icon from 'react-native-vector-icons/AntDesign';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
    };
  }

  render() {
    return (
      <View style={styles.main}>
        <FlatList>
          <TimeCard />
        </FlatList>
        <Text>Hello</Text>
        <Icon name={'pluscircle'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default Home;
