 import React, { useState, useEffect, useLayoutEffect } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   View,
   TouchableOpacity,
   FlatList,
   ActivityIndicator
 } from 'react-native';
 
 import Header from '../components/Header';
 import Thumbnail from '../components/Thumbnail';
 
 import { getPokemons, handleFavourites } from '../utils';
 import { 
   PRIMARY, 
   WINDOW_HEIGHT, 
   WINDOW_WIDTH, 
   SCALED_SIZE, 
   SECONDARY, 
   FONT_SCALE, 
   WHITE, 
   FONT_REGULAR
  } from '../styles';
import requests from '../utils/requests';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Search from '../components/Search';
 
 const HomeScreen = () => {
  const navigation = useNavigation();
   const [isLoading, setIsLoading] = useState(true);
   const [pokemonList, setPokemonList] = useState([]);
   const [selectedTitle, setSelectedTitle] = useState('All');
   const [nextUrl, setNextUrl] = useState('');
   const [favourites, setFavourites] = useState([]);
   const isFocused = useIsFocused();

   useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false
      })
   }, [])
 
   useEffect(() => {
     getPokemons().then(res => {
       setPokemonList(res.results);
       setNextUrl(res.next);
       setIsLoading(false);
     })
   }, [])

   useEffect(() => {
    handleFavourites('', 'get').then(res => {
      setFavourites(res);
    })
   }, [isFocused])
 
   function handleValuesChange(pokemonListValue, nextUrlValue, type) {
     setNextUrl(nextUrlValue);
     type === 'overwrite' ? setPokemonList([...pokemonListValue]) : setPokemonList([...pokemonList, ...pokemonListValue])
   }
 
   return (
     <SafeAreaView>
       <StatusBar/>
 
       {/* Header */}
       <Header />
 
       {/* Search Bar */}
       <Search />

       {/* Filter */}
       <View id='filter-container' style={styles.filterContainer}>
           <ScrollView id='filter-view' horizontal showsHorizontalScrollIndicator={false}>
               {Object.entries(requests).map(([key, {title, url}]) => (
                   <TouchableOpacity 
                       id='filter-button' 
                       style={[styles.filterButton, {backgroundColor: selectedTitle === title ? WHITE : PRIMARY}]} 
                       key={key} 
                       onPress={() => {
                           handleValuesChange([], '', 'overwrite')
                           setSelectedTitle(title)
                           getPokemons(url).then(res => {
                               handleValuesChange(res.results, res.next, 'overwrite')
                           })
                       }}>
                       <Text id='filter-title' style={[styles.filterTitle, FONT_REGULAR]}>{title}</Text>
                   </TouchableOpacity>
               ))}
           </ScrollView>
       </View>
 
       {/* Pokemons */}
       { isLoading ?
         <ActivityIndicator id='loader' style={styles.loader} size="large" />
       :
         <View id='pokemons-container' style={styles.pokemonContainer}>
           <FlatList
               id='pokemons-list'
               data={pokemonList}
               maxToRenderPerBatch={10}
               renderItem={(item) => <Thumbnail pokemon={item.item} favourites={favourites} />}
               numColumns={2}
               showsVerticalScrollIndicator={false}
               keyExtractor={(item, index) => index.toString() + item.name + index.toString()}
               onEndReachedThreshold={0}
               onEndReached={() => {
                   if (nextUrl) {
                       getPokemons(nextUrl).then(res => {
                           handleValuesChange(res.results, res.next, 'append');
                       })
                   }
               }}
           />
         </View>
       }
     </SafeAreaView>
   );
 };
 
const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    backgroundColor: PRIMARY
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: PRIMARY,
  },
  filterButton: {
    marginHorizontal: SCALED_SIZE(5),
    padding: SCALED_SIZE(5),
    borderTopLeftRadius: SCALED_SIZE(10),
    borderTopRightRadius: SCALED_SIZE(10),
  },
  filterTitle: {
    marginHorizontal: SCALED_SIZE(5),
    fontSize: 20 / FONT_SCALE,
  },
  logoImage: {
    width: SCALED_SIZE(35),
    height: SCALED_SIZE(35)
  },
  pokemonContainer: {
    marginTop: SCALED_SIZE(10),
    padding: SCALED_SIZE(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: WHITE
  },
})
 
 export default HomeScreen;