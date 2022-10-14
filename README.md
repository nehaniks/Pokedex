
# Pokedex

A simple React Native mobile app to display pokemons fetched from API. The app includes the following features:

* `Search` Pokemon by their name
* `Filter` Pokemon list by their type such as, Fire, Water, Poison.
* Views details of Pokemon like, HP, XP, Height, Weight.
* Pokemon can be marked as `Favourites` by press the thumbs up icon.
* The pokemons that are marked as `Favourite` are highlighted with a border in the Home screen.

### API and Libraries

The app is build using the following API and libraries:

* `PokedexAPI`
* `Heroicons`

### Assumptions and Limitations

While developing the app some assumptions were made and this app also has some limitations. The same are listed below:

* App uses `AsyncStorage` for storing the `Favourites` list which inturn has limitations.
* The app is designed to show `Error Screen` when error occurs during an API call. After reaching the `Error Screen` one has to restart app which is also done programmatically in app.

