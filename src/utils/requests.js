import { POKEDEX_APP_BASE_URL } from "@env";

export default {
    fetchAll: {
        title: 'All',
        url: `${POKEDEX_APP_BASE_URL}/pokemon/`
    },
    fetchElectric: {
        title: 'Electric',
        url: `${POKEDEX_APP_BASE_URL}/type/electric`
    },
    fetchWater: {
        title: 'Water',
        url: `${POKEDEX_APP_BASE_URL}/type/water`
    },
    fetchFire: {
        title: 'Fire',
        url: `${POKEDEX_APP_BASE_URL}/type/fire`
    },
    fetchGrass: {
        title: 'Grass',
        url: `${POKEDEX_APP_BASE_URL}/type/grass`
    },
    fetchBug: {
        title: 'Bug',
        url: `${POKEDEX_APP_BASE_URL}/type/bug`
    },
    fetchFlying: {
        title: 'Flying',
        url: `${POKEDEX_APP_BASE_URL}/type/flying`
    },
    fetchGround: {
        title: 'Ground',
        url: `${POKEDEX_APP_BASE_URL}/type/ground`
    },
    fetchPoison: {
        title: 'Poison',
        url: `${POKEDEX_APP_BASE_URL}/type/poison`
    },
    fetchPsychic: {
        title: 'Psychic',
        url: `${POKEDEX_APP_BASE_URL}/type/psychic`
    },
    fetchFairy: {
        title: 'Fairy',
        url: `${POKEDEX_APP_BASE_URL}/type/fairy`
    },
}