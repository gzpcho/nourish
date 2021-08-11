import React, { useEffect, useState } from 'react';
import { Button, View, Image } from 'react-native';
import Text from '../components/Text';

import { withGlobalContext } from '../helpers/GlobalContext';

const PlantScreen = ({ route, navigation, global }) => {
  const [plant, setPlant] = useState({});

  const fetchPlant = async () => {
    setPlant(await global.getPlant(route.params.id));
  };

  useEffect(() => {
    fetchPlant();
  }, [route.params?.id]);

  return (
    <View style={{ margin: 8 }}>
      <Text type="heading">{plant.name}</Text>
      <Text type="subheading">{plant.species}</Text>
      <Image
        style={{
          width: 150,
          height: 150,
        }}
        source={{ uri: plant.photoUri }}
      />

      <Button
        title="Remove Plant"
        onPress={() => {
          global.deletePlant(plant.id);
          navigation.goBack();
        }}
      />

      <Text>Should be watered every {plant.waterFrequency} days</Text>
    </View>
  );
};

export default withGlobalContext(PlantScreen);
