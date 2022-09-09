import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {TextInput} from 'react-native-paper';
import CardContext from '../context/CardContext';
import theme from '../style/theme';
import DHButton from './Isolated/DHButton';

function CreateCardSheet(props) {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const context = useContext(CardContext);

  const onChangeTitle = text => {
    setTitle(text);
  };

  const onChangeNotes = text => {
    setNotes(notes);
  };

  const onSaveCard = () => {
    console.log('In save');
    console.log(title);
    console.log(notes);
    context.addCard(title, notes);
  };

  return (
    <ActionSheet
      id={props.sheetId}
      containerStyle={styles.actionSheet}
      indicatorStyle={styles.indicator}
      gestureEnabled={true}>
      <View style={styles.main}>
        <View style={styles.activityInfo}>
          <TextInput
            mode={'flat'}
            label={'Activity'}
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
            onChangeText={text => onChangeTitle()}
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
            onChangeText={text => onChangeNotes()}
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
});

export default CreateCardSheet;
