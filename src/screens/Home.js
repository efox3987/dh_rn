import React from 'react';
import {View, StyleSheet, Text, FlatList, ScrollView, TouchableOpacity, SectionList} from 'react-native';
import {TimeCard} from '../components/TimeCard/TimeCard';
import Icon from 'react-native-vector-icons/AntDesign';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //reverse sort this motherjamma?
      activities: [],
    };
  }

  addTask = () => {
    
    this.setState.activities.push();
  };

  render() {
    return (
      <>
        <View style={styles.main}>
          <ScrollView ref={ref => {this.scrollView = ref}}
          onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}>
            <TimeCard/>
          </ScrollView>
        </View>
          
        <View style={styles.plusView}>
          <TouchableOpacity>
            <Icon style={styles.plus} name={'pluscircle'} size={45} onPress={this.addTask}/>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  plusView: {
    color: '#FFF',
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginRight: 20,
    marginBottom: 20,
  },
  plus: {
    //This shadow needs work idk how to get it just on the outside of the icon...
    color: "#AD70FB",
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: .5,
    shadowRadius: 3,
  }
});

export default Home;
