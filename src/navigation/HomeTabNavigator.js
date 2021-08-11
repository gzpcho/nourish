import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import UpcomingScreen from '../screens/UpcomingScreen';

const Tab = createMaterialBottomTabNavigator();

const HomeTabNavigator = (props) => {
  console.log('Props in HTB', props);

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="Upcoming"
        component={UpcomingScreen}
        options={{ title: 'Upcoming' }}
      />
      <Tab.Screen
        name="Settings"
        component={UpcomingScreen}
        options={{ title: 'Settings' }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
