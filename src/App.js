import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Analysis from './screens/Analysis';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        title: '',
        
        tabBarStyle: { 
          backgroundColor: '#6C6C6A',
          color: 'white,'
        },
        headerStyle: {
          height: 70,
          backgroundColor: '#2D2D2A',
          
        },
        headerTitleStyle: {
          
        },
    }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Analysis" component={Analysis} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
