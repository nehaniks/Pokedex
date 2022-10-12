import requests from "./requests";

export async function getPokemons(url) {
    const request = await fetch(
      url || requests.fetchAll.url
      ).then(res => res.json())
      .catch(error => console.log(error));
  
    console.log(request);
    return {
      results: request.results,
      next: request.next
    }
 }