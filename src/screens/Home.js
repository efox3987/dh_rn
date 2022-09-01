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

  // For the new time card form.
  // newTaskModal = () => {
  //   return (
  //     <View style={styles.centeredView}>
  //       <Modal
  //         style={styles.modalView}
  //         animationType="slide"
  //         transparent={true}
  //         visible={this.state.showTaskModal}
  //         onRequestClose={() => {
  //           this.setState({showTaskModal: !this.state.showTaskModal});
  //         }}>
  //         <View style={styles.centeredView}>
  //           {/*Cause modals are whack, this is the one whos style dictates how the modal will actually appear*/}
  //           <View style={styles.modalView}>
  //             <TouchableOpacity
  //               style={styles.button}
  //               onPress={() => this.setModalVisible(false)}>
  //               <Text>Close</Text>
  //             </TouchableOpacity>
  //           </View>
  //         </View>
  //       </Modal>
  //     </View>
  //   );
  // };

  addTask = () => {
    console.log('called addTask');
    this.setState({showTaskModal: true});
    console.log(this.state.showTaskModal);
    //this.setState.activities.push();
  };

  onCloseModal = visible => {
    this.setState({showTaskModal: false});
  };

  setModalVisible = visible => {
    this.setState({showTaskModal: visible});
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.main}>
          <ScrollView
            ref={ref => {
              this.scrollView = ref;
            }}
            onContentSizeChange={() =>
              this.scrollView.scrollToEnd({animated: true})
            }>
            {this.state.timeCards}
          </ScrollView>
          <NewTaskModal
            visible={this.state.showTaskModal}
            onClose={this.onCloseModal}
          />
        </View>
        <View style={styles.preview}>
          <View style={styles.plusView}>
            <TouchableOpacity>
              <Icon
                style={styles.plus}
                name={'pluscircle'}
                size={45}
                onPress={this.addTask}
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
