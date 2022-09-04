import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home/Home';
import Analysis from './screens/Analysis';
import theme from './style/theme';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          title: 'dh',
          tabBarStyle: {
            backgroundColor: theme.COLOR_SURFACE_HIGH,
          },
          headerStyle: {
            height: 100,
            backgroundColor: theme.COLOR_SURFACE_HIGH,
          },
          headerTitleStyle: {
            color: theme.COLOR_PRIMARY,
            fontSize: theme.FONT_SIZE_HUGE,
          },
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Analysis" component={Analysis} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
