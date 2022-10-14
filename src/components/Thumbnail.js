import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    Platform,
    View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FONT_SCALE, SCALED_SIZE, SECONDARY, WINDOW_WIDTH, FONT_BOLD, SECONDARY_LIGHT, PRIMARY, PRIMARY_DARK } from '../styles';
import { getPokemonData } from '../utils';

// Load each Pokemon Data from list
const Thumbnail = ({ pokemon, favourites }) => {
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
        <View id="thumbnail-wrapper" style={styles.thumbnailWrapper}>
            <TouchableOpacity 
                id='thumbnail-button' 
                style={[
                    styles.thumbnailButton,
                    {
                        shadowColor: favourites.includes(pokemonData.name) ? PRIMARY : SECONDARY_LIGHT,
                        borderColor: favourites.includes(pokemonData.name) ? PRIMARY_DARK : SECONDARY
                    }
                ]}
                onPress={() => navigation.navigate('Pokemon', pokemonData)}
            >
                <Image 
                    id='thumbnail' 
                    source={{uri: pokemonData?.sprites?.other?.['official-artwork'].front_default}} 
                    resizeMode='cover'
                    style={[styles.thumbnail, {
                        shadowColor: favourites.includes(pokemonData.name) ? PRIMARY : SECONDARY_LIGHT,
                    }]}
                ></Image>
            </TouchableOpacity>
            
            <Text id='thumbnail-text' style={[styles.thumbnailText, FONT_BOLD]}>{pokemonData.name}</Text>

        </View>
            
        : null    
        }
        </>
    )
}

const styles = StyleSheet.create({
    thumbnailWrapper: {
        width: Platform.OS === 'ios' ? WINDOW_WIDTH / 2.23 : WINDOW_WIDTH / 2.23,
    },
    thumbnailButton: {
        margin: SCALED_SIZE(10),
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        shadowColor: SECONDARY_LIGHT,
        elevation: 1,
        borderRadius: SCALED_SIZE(80),
        borderBottomWidth: SCALED_SIZE(2),
        borderRightWidth: SCALED_SIZE(2),
        borderColor: SECONDARY,
    },
    thumbnail: {
        flexGrow: 1,
        width: Platform.OS === 'ios' ? 140 : 150,
        height: Platform.OS === 'ios' ? 140 : 150,
        borderRadius: SCALED_SIZE(50),
        shadowColor: SECONDARY_LIGHT,
        shadowOpacity: 0.5,
        shadowOffset: {width: SCALED_SIZE(0), height: SCALED_SIZE(20)},
        shadowRadius: SCALED_SIZE(10),
    },
    thumbnailText: {
        fontSize: 15 / FONT_SCALE,
        textTransform: 'capitalize',
        textAlign: 'center',
    }
})

export default Thumbnail;