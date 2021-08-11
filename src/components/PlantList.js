import React from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Image,
  View,
  Button,
} from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  main: {
    width: 100,
    height: 100,
  },
});

const PlantList = ({ plants, waterPlant, goToPlantScreen }) => {
  const renderItem = ({ item }) => (
    <Pressable
      style={{ flexDirection: 'row', marginVertical: 8 }}
      onPress={() => goToPlantScreen(item.id)}
    >
      <Image style={styles.main} source={{ uri: item.photoUri }} />
      <View style={{ flex: 1, paddingHorizontal: 4 }}>
        <Text type="heading">{item.name}</Text>
        <Text type="subheading">{item.species}</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          marginRight: 12,
        }}
      >
        <View style={{ alignSelf: 'flex-end' }}>
          <Button title="Water me!" onPress={() => waterPlant(item.id)} />
        </View>
      </View>
    </Pressable>
  );

  const keyExtractor = (plant) => plant.id.toString();

  return (
    <>
      <FlatList
        data={plants}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </>
  );
};

export default PlantList;
