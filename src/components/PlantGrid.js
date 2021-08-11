import React from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  View,
  Image,
  Button,
  ScrollView,
} from 'react-native';

import theme from '../utils/theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  main: {
    width: theme.dimensions.image.width,
    height: theme.dimensions.image.height,
  },
});

const PlantGrid = ({ plants, waterPlant, goToPlantScreen }) => {
  const renderItem = ({ item }) => (
    <View style={{ margin: 8 }}>
      <ScrollView horizontal={true}>
        <Text type="subheading">{item.name}</Text>
      </ScrollView>
      <Pressable onPress={() => goToPlantScreen(item.id)}>
        <Image style={styles.main} source={{ uri: item.photoUri }} />
      </Pressable>
      <View style={{ marginVertical: 4 }}>
        <Button title="Water" onPress={() => waterPlant(item.id)} />
      </View>
    </View>
  );

  const keyExtractor = (plant) => plant.id?.toString();

  return (
    <>
      <FlatList
        data={plants}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
        columnWrapperStyle={styles.container}
      />
    </>
  );
};

export default PlantGrid;
