import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import DropDownPicker from 'react-native-dropdown-picker';
import {TextInput} from 'react-native-paper';
import CardContext from '../context/CardContext';
import ActivityContext from '../context/ActivityContext';

import theme from '../style/theme';
import DHButton from './Isolated/DHButton';

function CreateCardSheet(props) {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const cardContext = useContext(CardContext);
  const {activities} = useContext(ActivityContext);

  const onChangeTitle = text => {
    setTitle(text);
  };

  const onChangeNotes = text => {
    setNotes(text);
  };

  const onSaveCard = () => {
    cardContext.addCard(title, notes);
    SheetManager.hide('create-card');
  };

  return (
    <ActionSheet
      id={props.sheetId}
      containerStyle={styles.actionSheet}
      indicatorStyle={styles.indicator}
      gestureEnabled={true}>
      <View style={styles.main}>
        <View style={styles.activityInfo}>
          <DropDownPicker
            schema={{label: 'activityTitle', value: 'activityTitle'}}
            open={open}
            items={activities}
            value={value}
            setValue={setValue}
            setOpen={setOpen}
            placeholder={'Select an activity'}
            placeholderStyle={styles.dropdownPlaceholder}
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainerStyle}
            textStyle={styles.dropdownText}
          />
        </View>
        <View style={styles.timeCardInfo}>
          <TextInput
            mode={'flat'}
            label={'Card Name'}
            dense={true}
            style={styles.input}
            underlineColor={theme.COLOR_SURFACE_HIGH}
            selectionColor={theme.COLOR_PRIMARY}
            activeUnderlineColor={theme.COLOR_SECONDARY}
            theme={{
              colors: {
                text: theme.COLOR_TEXT_WHITE,
                placeholder: theme.COLOR_TEXT_INACTIVE,
              },
            }}
            placeholderTextColor={theme.COLOR_SURFACE_HIGH}
            onChangeText={text => onChangeTitle(text)}
          />
          <TextInput
            mode={'flat'}
            label={'Notes'}
            dense={true}
            style={styles.input}
            underlineColor={theme.COLOR_SURFACE_HIGH}
            selectionColor={theme.COLOR_PRIMARY}
            activeUnderlineColor={theme.COLOR_SECONDARY}
            multiline={true}
            theme={{
              colors: {
                text: theme.COLOR_TEXT_WHITE,
                placeholder: theme.COLOR_TEXT_INACTIVE,
              },
            }}
            placeholderTextColor={theme.COLOR_SURFACE_HIGH}
            onChangeText={text => onChangeNotes(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <DHButton title={'Save'} onPress={onSaveCard} />
        </View>
      </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  main: {
    height: 500,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  actionSheet: {
    backgroundColor: theme.COLOR_BACKGROUND,
  },
  indicator: {
    backgroundColor: theme.COLOR_SURFACE_HIGH,
    width: '25%',
  },
  input: {
    backgroundColor: theme.COLOR_SURFACE_LOW,
    fontSize: theme.FONT_SIZE_TITLE,
    marginHorizontal: 5,
    marginBottom: 5,
  },
  activityInfo: {
    backgroundColor: theme.COLOR_SURFACE_LOW,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: 10,
    padding: 10,
    margin: 15,
  },
  timeCardInfo: {
    backgroundColor: theme.COLOR_SURFACE_LOW,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: 10,
    padding: 10,
    margin: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dropdown: {
    backgroundColor: theme.COLOR_SURFACE_LOW,
    borderColor: theme.COLOR_SURFACE_HIGH,
  },
  dropdownContainerStyle: {
    backgroundColor: theme.COLOR_SURFACE_MID,
    borderColor: theme.COLOR_SURFACE_HIGH,
  },
  dropdownText: {
    color: theme.COLOR_TEXT_WHITE,
    fontSize: theme.FONT_SIZE_TITLE,
  },
  dropdownPlaceholder: {
    color: theme.COLOR_TEXT_INACTIVE,
    fontSize: theme.FONT_SIZE_TITLE,
  },
});

export default CreateCardSheet;
