import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { ArrowLeftIcon, StarIcon, HeartIcon, ChevronUpDownIcon, ScaleIcon, HandThumbUpIcon } from 'react-native-heroicons/outline';
import { HandThumbUpIcon as HandThumbUpIconSolid } from 'react-native-heroicons/solid';
import { FONT_SCALE, FONT_BOLD, SCALED_SIZE, PRIMARY, SECONDARY, WHITE, PRIMARY_DARK,  SECONDARY_LIGHT, FONT_REGULAR } from '../styles';

import { handleFavourites } from '../utils';

const PokemonScreen = () => {
    const navigation = useNavigation();
    const { params } = useRoute();
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        handleFavourites('', 'get').then(res => {
            console.log(res);
            setFavourites(res);
        })
    }, [])
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <View id='pokemon-data-container'>
            {/* Image */}
            <View id='pokemon-image-wrapper' style={styles.imageWrapper}>
                <Image id='pokemon-image' source={{ uri: params.sprites.front_default }} style={styles.pokemonImage}></Image>
                <TouchableOpacity id='back-button' style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <ArrowLeftIcon size={20} strokeWidth={3} color={SECONDARY} />
                </TouchableOpacity>

                {/* General Data */}
                <View style={styles.flexEnd}>
                    <View id='general-data-wrapper' style={styles.flexWrapper}>
                        <View id='xp-wrapper' style={styles.flexWrapper}>
                            <StarIcon size={20} color={SECONDARY_LIGHT} />
                            <Text id='xp-text' style={styles.fontRegularSmall}>{params.base_experience}</Text>
                        </View>
                        <View id='hp-wrapper' style={styles.flexWrapper}>
                            <HeartIcon size={20} color={SECONDARY_LIGHT} />
                            <Text id='hp-text' style={styles.fontRegularSmall}>{params.stats[0].base_stat}</Text>
                        </View>
                        <View id='weight-wrapper' style={styles.flexWrapper}>
                            <ScaleIcon size={20} color={SECONDARY_LIGHT} />
                            <Text id='weight-text' style={styles.fontRegularSmall}>{params.weight}</Text>
                        </View>
                        <View id='height-wrapper' style={styles.flexWrapper}>
                            <ChevronUpDownIcon size={20} color={SECONDARY_LIGHT} />
                            <Text id='height-text' style={styles.fontRegularSmall}>{params.height}</Text>
                        </View>
                    </View>
                </View>

                {/* Favourites */}
                <TouchableOpacity 
                    id='favourite-button' 
                    style={styles.favouriteButton} 
                    onPress={() => {
                        favourites.includes(params.name) ?
                            handleFavourites(params.name, 'remove').then(res => {
                                setFavourites(res)
                            })
                        :
                            handleFavourites(params.name, 'set').then(res => {
                                setFavourites(res)
                            })
                    }}
                >
                    {favourites.includes(params.name) ? 
                        <HandThumbUpIconSolid size={40} color={SECONDARY_LIGHT} />
                    :
                        <HandThumbUpIcon size={40} color={SECONDARY_LIGHT} />
                    }
                </TouchableOpacity>
            </View>
            
            {/* Data */}
            <ScrollView id='main-content' style={styles.dataWrapper} showsVerticalScrollIndicator={false}>
                <Text id='pokemon-name' style={[styles.nameText, FONT_BOLD]}>{params.name}</Text>

                {/* Types */}
                <Text id='types-title' style={[FONT_BOLD, styles.titleText]}>Types</Text>
                <View id='types-wrapper' style={[styles.flexWrapper, {marginHorizontal: 0, flexWrap: 'wrap', justifyContent: 'space-evenly'}]}>
                    {params.types.map((type) => (
                        <Text id='type' key={type.type.name} style={styles.fontRegularBox}>{type.type.name}</Text>
                    ))}
                </View>

                {/* Border Separator */}
                <View id='border-separator' style={styles.borderSeparator}>
                    <Text> </Text>
                </View>

                {/* Stats */}
                <Text id='stats-title' style={[FONT_BOLD, styles.titleText]}>Stats</Text>
                <View id='stats-wrapper' style={[styles.flexWrapper, {marginHorizontal: 0, flexWrap: 'wrap', justifyContent: 'space-evenly'}]}>
                    {params.stats.map((stat) => (
                        <View id='stats-view' key={stat.stat.name} style={styles.statsView}>
                            <Text id='stat-title' style={[styles.statTitle, FONT_REGULAR]}>{stat.stat.name}</Text>
                            <View id='stat-value-indicator' style={[styles.statValueIndicator, {width: stat.base_stat * 1.3}]}>
                                <Text id='stat-value' style={styles.statValue}>{stat.base_stat}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Border Separator */}
                <View id='border-separator' style={styles.borderSeparator}>
                    <Text> </Text>
                </View>

                {/* Abilities */}
                <Text id='abilities-title' style={[FONT_BOLD, styles.titleText]}>Abilities</Text>
                <View id='abilities-wrapper' style={[styles.flexWrapper, {marginHorizontal: 0, flexWrap: 'wrap', justifyContent: 'space-evenly'}]}>
                    {params.abilities.map((ability) => (
                        <Text id='ability' key={ability.ability.name} style={styles.fontRegularBox}>{ability.ability.name}</Text>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrapper: {
        position: 'relative',
        width: '100%',
        paddingTop: SCALED_SIZE(20),
        paddingBottom: SCALED_SIZE(5),
        backgroundColor: PRIMARY,
        alignItems: 'center',
    },
    pokemonImage: {
        width: SCALED_SIZE(200),
        height: SCALED_SIZE(200),
        backgroundColor: PRIMARY,
    },
    backIcon: {
        position: 'absolute',
        top: SCALED_SIZE(40),
        left: SCALED_SIZE(10),
        padding: SCALED_SIZE(10),
        alignItems: 'center',
        backgroundColor: WHITE,
        borderColor: PRIMARY_DARK,
        borderWidth: 1,
        borderRadius: SCALED_SIZE(20)
    },
    dataWrapper: {
        padding: SCALED_SIZE(10)
    },
    flexEnd: {
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    nameText: {
        fontSize: 30 / FONT_SCALE,
        textTransform: 'capitalize',
        color: SECONDARY,
        textAlign: 'center'
    },
    flexWrapper: {
        flexDirection: 'row',
        marginHorizontal: SCALED_SIZE(5),
        alignItems: 'center',
    },
    fontRegularSmall: {
        marginHorizontal: SCALED_SIZE(2),
        fontSize: 16 / FONT_SCALE,
        color: SECONDARY_LIGHT,
    },
    fontRegularBox: {
        margin: SCALED_SIZE(5),
        paddingVertical: SCALED_SIZE(5),
        paddingHorizontal: SCALED_SIZE(10),
        fontSize: 15 / FONT_SCALE,
        color: WHITE,
        textTransform: 'uppercase',
        backgroundColor: SECONDARY_LIGHT,
    },
    titleText: {
        marginTop: SCALED_SIZE(10),
        fontSize: 20 / FONT_SCALE,
        color: PRIMARY_DARK
    },
    statsView: {
        flexDirection: 'row',
        marginVertical: SCALED_SIZE(5),
        paddingHorizontal: SCALED_SIZE(5),
        width: '100%',
    },
    statTitle: {
        width: '35%',
        marginRight: SCALED_SIZE(5),
        fontSize: 15 / FONT_SCALE,
        textTransform: 'capitalize'
    },
    statValueIndicator: {
        backgroundColor: PRIMARY,
        borderWidth: 1,
        borderColor: PRIMARY_DARK
    },
    statValue: {
        textAlign: 'center',
        color: SECONDARY
    },
    borderSeparator: {
        marginVertical: SCALED_SIZE(10),
        borderBottomWidth: 0.3,
        borderBottomColor: SECONDARY_LIGHT
    },
    favouriteButton: {
        position: 'absolute',
        bottom: 0,
        left: SCALED_SIZE(10),
        alignItems: 'center'
    }
})

export default PokemonScreen;