import requests from "./requests";
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getPokemons(url) {
    const request = await fetch(
      url || requests.fetchAll.url
      ).then(res => res.json())
      .catch(error => console.log(error));
  
    // console.log(request);
    return {
      results: request.results ? request.results : request.pokemon,
      next: request.next ? request.next : ''
    }
}

export async function getPokemonData(url) {
  const request = await fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error));

  return request;
}

export async function handleFavourites(name, type) {
  if (type === 'set') {
    try {
      let favourites = JSON.parse(await AsyncStorage.getItem('favourites'));
      let data = [];
      if (favourites === null) {
        data.push(name);
      } else {
        data = [...favourites, name];
      }
      await AsyncStorage.setItem( 'favourites', JSON.stringify(data) )
      return data;
    } catch (error) {
      console.log(error);
    }
  } else if (type === 'remove') {
    try {
      let favourites = JSON.parse(await AsyncStorage.getItem('favourites'));
      let data = favourites.filter((item) => {
        return item !== name
      });
      await AsyncStorage.setItem( 'favourites', JSON.stringify(data) )
      return data;
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      let favourites = JSON.parse(await AsyncStorage.getItem('favourites'));
      return favourites !== null ? favourites : '';
    } catch (error) {
      console.log(error);
    }
  }
}