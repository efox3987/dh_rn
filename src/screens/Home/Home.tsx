import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';

import {SheetManager} from 'react-native-actions-sheet';

import {styles} from './styles';
import CardContext from '../../context/CardContext';
import {TimeCard} from '../../components/TimeCard/TimeCard';
import ActivityPreview from '../../components/ActivityPreview';

import Icon from 'react-native-vector-icons/AntDesign';

interface Props {}
interface State {
  showTaskModal: boolean;
  showPreview: boolean;
  selectedCardIndex?: number;
}

class Home extends React.Component<Props, State> {
  static contextType = CardContext;
  declare context: React.ContextType<typeof CardContext>;
  constructor(props: Props) {
    super(props);
    this.state = {
      showTaskModal: false,
      showPreview: false,
      selectedCardIndex: undefined,
    };
  }

  timeCardOnPress = (index: number) => {
    console.log(index);
    console.log(this.context.timeCards[index].title);
    this.setState({selectedCardIndex: index});

    this.setState({showPreview: true});
  };

  renderPreview = () => {
    return <ActivityPreview selectedCardIndex={this.state.selectedCardIndex} />;
  };

  render() {
    const listRef = React.createRef<FlatList>();
    return (
      <View style={styles.wrapper}>
        <View style={styles.main}>
          <FlatList
            ref={listRef}
            onContentSizeChange={() =>
              listRef.current?.scrollToEnd({animated: true})
            }
            contentContainerStyle={styles.flatList}
            data={this.context.timeCards}
            renderItem={({item, index}) => (
              <TimeCard
                title={item.title}
                notes={item.notes}
                hour={item.createdTime.getHours()}
                minutes={item.createdTime.getMinutes()}
                activity={item.activity}
                onPress={() =>
                  index !== this.state.selectedCardIndex
                    ? this.timeCardOnPress(index)
                    : this.setState({
                        showPreview: false,
                        selectedCardIndex: undefined,
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
              onPress={() => SheetManager.show('create-card')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;
