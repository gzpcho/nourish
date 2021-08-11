import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { GlobalContextProvider } from './src/helpers/GlobalContext';
import RootStackNavigator from './src/navigation/RootStackNavigator';

const App = (props) => {
  console.log('Props in App', props);

  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </GlobalContextProvider>
  );
};

export default App;
