import React, { useState, useEffect } from 'react';
import { Button, View } from 'react-native';

import { withGlobalContext } from '../helpers/GlobalContext';
import PlantGrid from '../components/PlantGrid';
import PlantList from '../components/PlantList';

const HomeScreen = ({ route, navigation, global, ...props }) => {
  console.log('Rest of props in HomeScreen', props);
  const [view, setView] = useState('grid');

  const waterPlant = async (id) => {
    let plantToWater = await global.getPlant(id);
    plantToWater = { ...plantToWater, lastWaterDate: Date.now() };
    if (plantToWater) {
      alert(`Watering ${plantToWater.name}`);
      global.updatePlant(id, plantToWater);
    }
  };

  const goToPlantScreen = (id) => navigation.navigate('Plant', { id: id });

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF9F6', margin: 8 }}>
      <HomeScreenHeader navigation={navigation} view={view} setView={setView} />

      {view === 'grid' && (
        <PlantGrid
          plants={global.plants}
          waterPlant={waterPlant}
          goToPlantScreen={goToPlantScreen}
        />
      )}

      {view === 'list' && (
        <PlantList
          plants={global.plants}
          waterPlant={waterPlant}
          goToPlantScreen={goToPlantScreen}
        />
      )}
    </View>
  );
};

const HomeScreenHeader = ({ navigation, view, setView }) => {
  return (
    <View style={{ flexDirection: 'row', marginBottom: 8 }}>
      <Button
        title="Add a Plant"
        onPress={() => navigation.navigate('PlantForm')}
      />
      <View style={{ flex: 1 }} />
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Button
          title={`${view.toUpperCase()}`}
          onPress={() => setView(view === 'grid' ? 'list' : 'grid')}
        />
      </View>
    </View>
  );
};

export default withGlobalContext(HomeScreen);
