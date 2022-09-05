import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
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
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'md-home' : 'md-home-outline';
              return <Icon name={iconName} size={size} color={color} />;
            } else if (route.name === 'Analysis') {
              iconName = focused ? 'graph' : 'graph-outline';
              return <Icon1 name={iconName} size={size} color={color} />;
            }

            // You can return any component that you like here!
          },
          tabBarActiveTintColor: theme.COLOR_PRIMARY,
          tabBarStyle: {
            backgroundColor: theme.COLOR_SURFACE_HIGH,
            shadowColor: 'transparent',
          },
          headerStyle: {
            height: 100,
            backgroundColor: theme.COLOR_SURFACE_HIGH,
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            color: theme.COLOR_PRIMARY,
            fontSize: theme.FONT_SIZE_HUGE,
          },
          headerTitle: 'dh',
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Analysis" component={Analysis} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
