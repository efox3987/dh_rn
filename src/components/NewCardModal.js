import React, {useState} from 'react';
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import CardContext from '../context/CardContext';
import theme from '../style/theme';

export default class NewCardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: this.props.visible,
      title: '',
      notes: '',
    };
  }
  static contextType = CardContext;

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  closeModal() {
    this.props.onClose(false);
  }

  // This is necessary for it to update the visible value when the plus button is pressed.
  componentDidUpdate(props) {
    if (props.visible !== this.props.visible) {
      console.log('update modal');
      this.setModalVisible(this.props.visible);
    }
  }

  componentDidMount() {
    this.props.onClose(false);
  }

  onChangeTitle(text) {
    this.setState({title: text});
  }

  onChangeNotes(text) {
    this.setState({notes: text});
  }

  saveActivity() {
    this.context.addCard(this.state.title, this.state.notes);
    this.closeModal();
  }

  render() {
    return (
      <Modal
        style={styles.modalView}
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.closeModal();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              autoFocus={true}
              style={styles.title}
              placeholder={'Activity Name'}
              onChangeText={text => {
                this.onChangeTitle(text);
              }}
            />
            <TextInput
              multiline
              numberOfLines={3}
              style={styles.notes}
              placeholder={'Notes'}
              onChangeText={text => {
                this.onChangeNotes(text);
              }}
            />
            <View style={styles.horizontalContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.closeModal()}>
                <Text>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.saveActivity()}>
                <Text>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    flexDirection: 'column',
    margin: 20,
    backgroundColor: theme.COLOR_SURFACE_HIGH,
    padding: 35,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: theme.TEXT_BLACK,
    shadowRadius: 4,
    borderRadius: 10,
    maxHeight: 500,
    elevation: 5,
    alignSelf: 'stretch',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: 'black',
    padding: 10,
    margin: 5,
  },
  title: {
    borderWidth: 1,
    borderColor: theme.TEXT_WHITE,
    color: theme.TEXT_WHITE,
    alignSelf: 'stretch',
    height: 40,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  notes: {
    borderWidth: 1,
    borderColor: theme.TEXT_WHITE,
    color: theme.TEXT_WHITE,
    alignSelf: 'stretch',
    minHeight: 40,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
