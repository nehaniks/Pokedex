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

import Header from './src/components/Header';
import Filter from './src/components/Filter';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar/>

      {/* Header */}
      <Header />

      {/* Search Bar */}
      
      {/* Filter */}
      <Filter />

      {/* Results */}
    
    </SafeAreaView>
  );
};

export default App;
