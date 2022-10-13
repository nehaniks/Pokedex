import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FONT_SCALE, SCALED_SIZE, SECONDARY, WINDOW_WIDTH, WINDOW_HEIGHT, FONT_BOLD } from '../styles';
import { getPokemonData } from '../utils';

const Thumbnail = ({ pokemon }) => {
    const navigation = useNavigation();
    const [pokemonData, setPokemonData] = useState();

    useEffect(() => {
        getPokemonData(pokemon.url ? pokemon.url : pokemon.pokemon.url).then(res => {
            setPokemonData(res);
        })
    }, [])
    
    return (
       <>
        { pokemonData?.sprites?.front_default ? 
            <TouchableOpacity 
                id='thumbnail-button' 
                style={styles.thumbnailButton}
                onPress={() => navigation.navigate('Pokemon', pokemonData)}
            >
                <Image 
                    id='thumbnail' 
                    source={{uri: pokemonData?.sprites?.front_default}} 
                    style={styles.thumbnail}
                ></Image>
                <Text id='thumbnail-text' style={[styles.thumbnailText, FONT_BOLD]}>{pokemonData.name}</Text>
            </TouchableOpacity>
        : null    
        }
        </>
    )
}

const styles = StyleSheet.create({
    thumbnailButton: {
        width: WINDOW_WIDTH / 2.5,
        height: WINDOW_HEIGHT / 6,
        margin: SCALED_SIZE(10),
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    thumbnail: {
        width: 100,
        height: 100,
        borderRadius: SCALED_SIZE(50),
        shadowColor: SECONDARY,
        shadowOpacity: 0.5,
        shadowOffset: {width: SCALED_SIZE(0), height: SCALED_SIZE(40)},
        shadowRadius: SCALED_SIZE(10),
    },
    thumbnailText: {
        marginTop: SCALED_SIZE(10),
        fontSize: 15 / FONT_SCALE,
        textTransform: 'capitalize',
        textAlign: 'center',
    }
})

export default Thumbnail;