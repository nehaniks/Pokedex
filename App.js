/**
 * Sample React Native App named Pokedex to search and add pokemon to favourites
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { POKEDEX_APP_BASE_URL } from "@env";
import Header from './src/components/Header';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar/>

      {/* Header */}
      <Header />

      {/* Search Bar */}
      
      {/* Filter */}
      
      {/* Results */}
    
    </SafeAreaView>
  );
};

export default App;
