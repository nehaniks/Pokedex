import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
} from 'react-native';

import { SCALED_SIZE, WHITE } from '../styles';
import { getPokemons } from '../utils';
import Thumbnail from './Thumbnail';

const Pokemons = ({ pokemonList, nextUrl, onChangePokemonList, onChangeNextUrl }) => {
    return (
        <View id='pokemons-container' style={styles.pokemonContainer}>
            <FlatList
                id='pokemons-list'
                data={pokemonList}
                renderItem={(item) => <Thumbnail pokemon={item.item} />}
                numColumns={2}
                keyExtractor={(item) => item.name}
                onEndReachedThreshold={0.4}
                onEndReached={() => {
                    console.log(nextUrl);
                    getPokemons(nextUrl).then(res => {
                        onChangePokemonList(res.results);
                        onChangeNextUrl(res.next);
                    })
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    pokemonContainer: {
        padding: SCALED_SIZE(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: WHITE
    },
})

export default Pokemons;