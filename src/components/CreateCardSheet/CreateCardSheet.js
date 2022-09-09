import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import DropDownPicker from 'react-native-dropdown-picker';
import {TextInput} from 'react-native-paper';
import CardContext from '../../context/CardContext';
import ActivityContext from '../../context/ActivityContext';

import Icon from 'react-native-vector-icons/Entypo';

import theme from '../../style/theme';
import DHButton from '../Reusable/DHButton';
import StyledInput from '../Reusable/StyledInput';
import CreateActivity from './CreateActivity.view';

function CreateCardSheet(props) {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [newVisible, setNewVisible] = useState(false);

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

  const showCreateActivity = () => {
    setNewVisible(true);
  };

  const renderCreateActivity = () => {
    return <CreateActivity onPressCancel={onPressCancel} />;
  };

  const onPressCancel = () => {
    setNewVisible(false);
  };

  const renderNameCard = () => {
    return (
      <View style={styles.timeCardInfo}>
        <StyledInput title={'Card Name'} onChangeText={onChangeTitle} />
        <StyledInput
          title={'Notes'}
          onChangeText={onChangeNotes}
          multiline={true}
        />
      </View>
    );
  };
  const onSaveActivity = () => {};

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
            ArrowDownIconComponent={style => (
              <Icon
                name={'chevron-down'}
                color={theme.COLOR_SURFACE_HIGH}
                size={25}
              />
            )}
            ArrowUpIconComponent={style => (
              <Icon
                name={'chevron-up'}
                color={theme.COLOR_SURFACE_HIGH}
                size={25}
              />
            )}
            placeholderStyle={styles.dropdownPlaceholder}
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainerStyle}
            textStyle={styles.dropdownText}
          />
          <TouchableOpacity
            style={styles.addActivity}
            onPress={showCreateActivity}>
            <Text style={styles.addActivityText}>Add an activity +</Text>
          </TouchableOpacity>
          {newVisible ? renderCreateActivity() : null}
        </View>
        {newVisible ? null : renderNameCard()}
        <View style={styles.buttonContainer}>
          <DHButton title={'Save'} onPress={onSaveCard} primary={true} />
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
  addActivity: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  addActivityText: {
    fontSize: theme.FONT_SIZE_BODY,
    color: theme.COLOR_TEXT_INACTIVE,
    alignSelf: 'flex-end',
  },
});

export default CreateCardSheet;
