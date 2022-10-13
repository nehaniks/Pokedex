/**
 * Sample React Native App named Pokedex to search and add pokemon to favourites
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import PokemonScreen from './src/screens/PokemonScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Screens */}
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Pokemon' component={PokemonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;