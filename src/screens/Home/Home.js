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
import NewCardModal from '../../components/NewCardModal';
import {styles} from './styles';
import CardContext from '../../context/CardContext';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTaskModal: false,
    };
  }
  static contextType = CardContext;

  showModal() {
    this.setState({showTaskModal: true});
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
        <NewCardModal
          style={styles.modal}
          visible={this.state.showTaskModal}
          onClose={val => this.setModalVisible(val)}
        />
        <View style={styles.main}>
          <FlatList
            style={styles.listView}
            data={this.context.timeCards}
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
