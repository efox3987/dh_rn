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
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  closeModal() {
    this.props.onClose();
  }

  componentDidUpdate(props) {
    console.log('in didUpdate');
    console.log(props);
    console.log(this.props);
    if (props.visible !== this.props.visible) {
      console.log('update modal');
      this.setModalVisible(this.props.visible);
    }
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
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View style={styles.centeredView}>
            {/*Cause modals are whack, this is the one whos style dictates how the modal will actually appear*/}
            <View style={styles.modalView}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.closeModal(false)}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
