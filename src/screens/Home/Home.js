import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';

import {SheetManager} from 'react-native-actions-sheet';

import {styles} from './styles';
import CardContext from '../../context/CardContext';
import {TimeCard} from '../../components/TimeCard/TimeCard';
import NewCardModal from '../../components/NewCardModal';
import ActivityPreview from '../../components/ActivityPreview';
import FloatingButton from '../../components/FloatingButton';

import Icon from 'react-native-vector-icons/AntDesign';

class Home extends React.Component {
  static contextType = CardContext;
  constructor(props) {
    super(props);
    this.state = {
      showTaskModal: false,
      // selectedCard: {
      //   title: null,
      //   notes: null,
      //   createdTime: null,
      // },
      selectedCardIndex: null,
      showPreview: false,
    };
  }

  componentDidUpdate(props, state) {
    if (state.selectedCardIndex === this.state.selectedCardIndex) {
    }
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

  timeCardOnPress = index => {
    console.log(index);
    console.log(this.context.timeCards[index].title);
    this.setState({selectedCardIndex: index});

    this.setState({showPreview: true});
  };

  renderPreview = () => {
    return <ActivityPreview selectedCardIndex={this.state.selectedCardIndex} />;
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
            renderItem={({item, index}) => (
              <TimeCard
                title={item.title}
                notes={item.notes}
                hour={item.createdTime.getHours()}
                minutes={item.createdTime.getMinutes()}
                onPress={() =>
                  index !== this.state.selectedCardIndex
                    ? this.timeCardOnPress(index)
                    : this.setState({
                        showPreview: false,
                        selectedCardIndex: null,
                      })
                }
              />
            )}
          />
        </View>
        {this.state.showPreview ? this.renderPreview() : null}
        {/* <FloatingButton
          onPress={
            this.showModal()
            // SheetManager.show('example-sheet', {
            //   payload: {value: 'hello world'},
            // })
          }
        /> */}
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
                SheetManager.show('create-card')
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;
