import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeTabNavigator from './HomeTabNavigator';
import PlantScreen from '../screens/PlantScreen';
import PlantFormScreen from '../screens/PlantFormScreen';

const Stack = createStackNavigator();

const RootStackNavigator = (props) => {
  console.log('Props in RSN', props);

  return (
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen name="HomeTab" component={HomeTabNavigator} />
      <Stack.Screen
        name="Plant"
        component={PlantScreen}
        options={{ title: 'Plant' }}
      />
      <Stack.Screen
        name="PlantForm"
        component={PlantFormScreen}
        options={{ title: 'Add a Plant' }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
