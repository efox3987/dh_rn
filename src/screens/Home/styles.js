import {StyleSheet} from 'react-native';
import theme from '../../style/theme';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.COLOR_BACKGROUND,
  },
  main: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  preview: {
    flex: 2,
  },
  plusView: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginRight: 20,
    marginBottom: 20,
  },
  plus: {
    //This shadow needs work idk how to get it just on the outside of the icon...
    color: theme.COLOR_PRIMARY_VAR,
    shadowColor: '#',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
