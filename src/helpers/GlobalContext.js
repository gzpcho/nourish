import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import data from '../utils/data';

const GlobalContext = React.createContext({});

export const GlobalContextProvider = (props) => {
  const [plants, setPlants] = useState([]);

  const loadData = async () => {
    const existingPlants = await getAllPlants();
    setPlants(existingPlants);

    for (let i = 0; i < data.length; i++) {
      const plantFromArray = data[i];
      const plant = await getPlant(data[i].id);

      if (!plant) {
        console.log(plantFromArray.name, 'Not in storage...adding...');
        await addPlant(plantFromArray);
        console.log('Done adding', plantFromArray.name);
      } else {
        console.log(plantFromArray.name, 'already in storage');
      }
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const getAllPlants = async () => {
    const jsonValue = await AsyncStorage.getItem('@plants-key');
    return jsonValue ? JSON.parse(jsonValue) : [];
  };

  const getPlant = async (id) => {
    try {
      let jsonValue = await getAllPlants();
      if (jsonValue.length === 0) return null;
      jsonValue = await jsonValue.find((plant) => plant.id === id);
      if (jsonValue === undefined) return null;
      return jsonValue;
    } catch (err) {
      console.log(err);
    }
  };

  const addPlant = async (newPlant) => {
    try {
      let jsonValue = await getAllPlants();
      await jsonValue.push(newPlant);
      await AsyncStorage.setItem('@plants-key', JSON.stringify(jsonValue));
      setPlants(jsonValue);
    } catch (err) {
      console.log(err);
    }
  };

  const deletePlant = async (id) => {
    try {
      let jsonValue = await getAllPlants();
      jsonValue = await jsonValue.filter((plant) => plant.id !== id);
      await AsyncStorage.setItem('@plants-key', JSON.stringify(jsonValue));
      setPlants(jsonValue);
    } catch (err) {
      console.log(err);
    }
  };

  const updatePlant = async (id, newPlant) => {
    try {
      let jsonValue = await getAllPlants();
      jsonValue = await jsonValue.map((plant) =>
        plant.id === id ? newPlant : plant
      );
      await AsyncStorage.setItem('@plants-key', JSON.stringify(jsonValue));
      setPlants(jsonValue);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        plants: plants,
        getPlant: getPlant,
        addPlant: addPlant,
        deletePlant: deletePlant,
        updatePlant: updatePlant,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

// create the consumer as higher order component
export const withGlobalContext = (ChildComponent) => (props) =>
  (
    <GlobalContext.Consumer>
      {(context) => <ChildComponent {...props} global={context} />}
    </GlobalContext.Consumer>
  );
