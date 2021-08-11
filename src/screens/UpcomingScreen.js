import React from 'react';
import { View } from 'react-native';

import { withGlobalContext } from '../helpers/GlobalContext';
import Text from '../components/Text';

const UpcomingScreen = ({ route, navigation, global }) => {
  const plants = global.plants;
  console.log(global);
  return (
    <View style={{ flex: 1, margin: 8 }}>
      <Text type="heading">TODAY</Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />

      {plants
        .filter((plant) => plant.daysUntilWater === 0)
        .map((plant) => (
          <Text key={plant.id}>{plant.name}</Text>
        ))}

      <Text type="heading">TOMORROW</Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
      {plants
        .filter((plant) => plant.daysUntilWater === 1)
        .map((plant) => (
          <Text key={plant.id}>{plant.name}</Text>
        ))}
      <Text type="heading">THIS WEEK</Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
      {plants
        .filter((plant) => plant.daysUntilWater > 1 && plant.daysUntilWater < 7)
        .map((plant) => (
          <Text key={plant.id}>{plant.name}</Text>
        ))}
      <Text type="heading">NEXT WEEK</Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          paddingHorizontal: 5,
        }}
      />
      {plants
        .filter(
          (plant) => plant.daysUntilWater > 7 && plant.daysUntilWater < 14
        )
        .map((plant) => (
          <Text key={plant.name}>{plant.name}</Text>
        ))}
    </View>
  );
};

export default withGlobalContext(UpcomingScreen);
