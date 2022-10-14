import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Keyboard,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { FONT_SCALE, SCALED_SIZE, PRIMARY, FONT_REGULAR, SECONDARY_LIGHT, WHITE, SECONDARY } from '../styles';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

import { getPokemonData } from '../utils';
import requests from '../utils/requests';

const Search = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');

    return (
        <View id='search-container' style={styles.searchContainer}>
            <View id='search-wrapper' style={styles.searchWrapper}>
                <TextInput 
                    id='search-text' 
                    placeholder='Seach Pokemon' 
                    style={[styles.searchText, FONT_REGULAR]}
                    onChangeText={(text) => setSearchText(text.toLowerCase())}
                    value={searchText}
                />

                <TouchableOpacity 
                    id='search-button' 
                    style={styles.searchButton}
                    disabled={searchText.length === 0}
                    onPress={() => {
                        Keyboard.dismiss();
                        getPokemonData(requests.fetchAll.url + searchText)
                            .then(res => {
                                navigation.navigate('Pokemon', res)
                            })
                    }}
                >
                    <MagnifyingGlassIcon size={25} strokeWidth={2} color={WHITE} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: PRIMARY,
        paddingTop: 0,
        padding: SCALED_SIZE(10),
    },
    searchWrapper: {
        flexDirection: 'row',
        paddingLeft: SCALED_SIZE(20),
        // justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: WHITE,
        borderRadius: SCALED_SIZE(50),
        overflow: 'hidden'
    },
    searchText: {
        flex: 8,
        paddingV: SCALED_SIZE(5),
        fontSize: 20 / FONT_SCALE,
        backgroundColor: WHITE,
    },
    searchButton: {
        flex: 1,
        paddingHorizontal: SCALED_SIZE(15),
        paddingVertical: SCALED_SIZE(5),
        alignItems: 'center',
        backgroundColor: SECONDARY
    }
})

export default Search;