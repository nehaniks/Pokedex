/**
 * Sample React Native App named Pokedex to search and add pokemon to favourites
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
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
import Pokemons from './src/components/Pokemons';

import { getPokemons } from './src/utils';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState({});
  const [nextUrl, setNextUrl] = useState('');

  useEffect(() => {
    getPokemons().then(res => {
      setPokemonList(res.results);
      setNextUrl(res.next);
      setIsLoading(false);
    })
  }, [])

  return (
    <SafeAreaView>
      <StatusBar/>

      {/* Header */}
      <Header />

      {/* Search Bar */}
      
      {/* Filter */}
      <Filter />

      {/* Pokemons */}
      { isLoading ?
        <Text>Loading Pokemons .....</Text>
      :
        <Pokemons 
          pokemonList={pokemonList} 
          nextUrl={nextUrl} 
          onChangePokemonList={(value) => setPokemonList([...pokemonList, ...value])}
          onChangeNextUrl={(value) => setNextUrl(value)}
        />
      }
    </SafeAreaView>
  );
};

export default App;