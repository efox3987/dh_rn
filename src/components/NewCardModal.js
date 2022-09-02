import React, {useState} from 'react';
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class NewTaskModal extends React.Component {
  constructor(props) {
    console.log('constructor');
    console.log(props);
    super(props);
    this.state = {
      modalVisible: this.props.visible,
      title: '',
      notes: '',
    };
  }

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
    console.log(this.state.title);
    console.log(this.state.notes);
    this.props.onSave(this.state.title, this.state.notes);
    this.closeModal();
  }

  render() {
    return (
      <View style={styles.centeredView}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    flexDirection: 'column',
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
    borderColor: 'black',
    alignSelf: 'stretch',
    height: 40,
    padding: 10,
    marginBottom: 10,
  },
  notes: {
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'stretch',
    padding: 10,
    marginBottom: 10,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
