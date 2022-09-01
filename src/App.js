import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Analysis from './screens/Analysis';
import theme from './style/theme';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          title: '',
          tabBarStyle: {
            backgroundColor: theme.COLOR_SECONDARY_BACKGROUND,
            color: 'white,',
          },
          headerStyle: {
            height: 70,
            backgroundColor: theme.COLOR_PRIMARY_BACKGROUND,
          },
          headerTitleStyle: {},
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Analysis" component={Analysis} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
