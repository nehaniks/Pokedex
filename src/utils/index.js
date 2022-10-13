import requests from "./requests";

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