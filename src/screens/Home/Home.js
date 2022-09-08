import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';

import {SheetManager} from 'react-native-actions-sheet';

import {styles} from './styles';
import CardContext from '../../context/CardContext';
import {TimeCard} from '../../components/TimeCard/TimeCard';
import NewCardModal from '../../components/NewCardModal';
import ActivityPreview from '../../components/ActivityPreview';

import Icon from 'react-native-vector-icons/AntDesign';

class Home extends React.Component {
  static contextType = CardContext;
  constructor(props) {
    super(props);
    this.state = {
      showTaskModal: false,
    };
  }
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
            ref={ref => {
              this.flatList = ref;
            }}
            onContentSizeChange={() =>
              this.flatList.scrollToEnd({animated: true})
            }
            contentContainerStyle={styles.flatList}
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
        <ActivityPreview />
        <View style={styles.plusView}>
          <TouchableOpacity>
            <Icon
              style={styles.plus}
              name={'pluscircle'}
              size={45}
              onPress={() =>
                // SheetManager.show('example-sheet', {
                //   payload: {value: 'hello world'},
                // })
                this.showModal()
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;
