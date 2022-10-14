import requests from "./requests";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to get Pokemons list based on type or get all Pokemons
export async function getPokemons(url) {
    let errorResponse = {};
    const request = await fetch(
      url || requests.fetchAll.url
      ).then(res => res.json())
      .catch(error => {
        errorResponse = formatError(error) 
      });
  
    return {
      results: request?.results ? request?.results : request?.pokemon,
      next: request?.next ? request?.next : '',
      error: errorResponse?.error ? errorResponse?.error : ''
    }
}

// Function to get details of selected Pokemon
export async function getPokemonData(url) {
  const request = await fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error));

  return request;
}

// Function to format error response
function formatError(error) {
  let errorResponse = {}; 
  let tempRes = error.toString().replace('[', '').replace(']', '').replaceAll(': ', '-').split(' ');
  tempRes.map(item => {
    let key = item.split('-')[0];
    let value = item.split('-')[1];
    errorResponse[key] = value;
  })

  return errorResponse;
}

// Function to add, remove and get Favourite Pokemon list from AsyncStorage
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