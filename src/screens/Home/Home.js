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
import {TimeCard} from '../../components/TimeCard/TimeCard';
import Icon from 'react-native-vector-icons/AntDesign';
import NewTaskModal from '../../components/NewCardModal';
import {styles} from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //reverse sort this motherjamma?
      timeCards: [
        {
          title: 'Test',
          notes:
            "Long collection of notes about an acitivity card that doesn't exist, but has ot be here so we can test the text formatting.",
          createdTime: new Date(),
        },
      ],
      showTaskModal: false,
    };
  }

  showModal() {
    this.setState({showTaskModal: true});
    console.log(this.state.showTaskModal);
    //this.setState.activities.push();
  }

  addTask(title, notes, hours, minutes) {
    console.log('new task title ' + title);
    console.log('notes: ' + notes);
    let createdTime = new Date();

    console.log(createdTime);
    this.setState({
      timeCards: [
        ...this.state.timeCards,
        {
          title: title,
          notes: notes,
          createdTime: createdTime,
        },
      ],
    });
  }

  onCloseModal = () => {
    this.setState({showTaskModal: false});
  };

  setModalVisible = visible => {
    this.setState({showTaskModal: visible});
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <NewTaskModal
          style={styles.modal}
          visible={this.state.showTaskModal}
          onClose={val => this.setModalVisible(val)}
          onSave={(title, notes) => this.addTask(title, notes)}
        />
        <View style={styles.main}>
          <FlatList
            style={styles.listView}
            data={this.state.timeCards}
            renderItem={({item}) => (
              <TimeCard
                title={item.title}
                notes={item.notes}
                hour={item.createdTime.getHours()}
                minutes={item.createdTime.getMinutes()}
              />
            )}
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

export default Home;
