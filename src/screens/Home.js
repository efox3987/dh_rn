import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {TimeCard} from '../components/TimeCard/TimeCard';
import Icon from 'react-native-vector-icons/AntDesign';
import NewTaskModal from '../components/NewCardModal';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //reverse sort this motherjamma?
      timeCards: [],
      showTaskModal: false,
    };
  }

  showModal() {
    this.setState({showTaskModal: true});
    console.log(this.state.showTaskModal);
    //this.setState.activities.push();
  }

  addTask(title, notes) {
    console.log('new task title ' + title);
    console.log('notes: ' + notes);
    this.setState({
      timeCards: [...this.state.timeCards, {title: title, notes: notes}],
    });
  }

  onCloseModal = () => {
    this.setState({showTaskModal: false});
  };

  setModalVisible = visible => {
    this.setState({showTaskModal: visible});
  };

  // <ScrollView
  //           ref={ref => {
  //             this.scrollView = ref;
  //           }}
  //           onContentSizeChange={() =>
  //             this.scrollView.scrollToEnd({animated: true})
  //           }>
  //           {this.state.timeCards}
  //         </ScrollView>
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.main}>
          <FlatList
            data={this.state.timeCards}
            renderItem={({item}) => (
              <TimeCard title={item.title} notes={item.notes} />
            )}
          />
          <NewTaskModal
            visible={this.state.showTaskModal}
            onClose={val => this.setModalVisible(val)}
            onSave={(title, notes) => this.addTask(title, notes)}
          />
        </View>
        <View style={styles.preview}>
          <View style={styles.plusView}>
            <TouchableOpacity>
              <Icon
                style={styles.plus}
                name={'pluscircle'}
                size={45}
                onPress={() => this.showModal()}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2D2D2A',
  },
  main: {
    flex: 4,
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end',
  },
  preview: {
    flex: 3,
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
    color: '#AD70FB',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    padding: 35,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 5,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: 'black',
    borderRadius: 5,
  },
});

export default Home;
