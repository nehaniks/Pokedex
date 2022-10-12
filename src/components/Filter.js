import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import { FONT_SCALE, FONT_REGULAR, SCALED_SIZE, PRIMARY, SECONDARY, WHITE } from '../styles';

import requests from '../utils/requests';

const Filter = () => {
    const [selectedTitle, setSelectedTitle] = useState('All');
    return (
        <View id='filter-container' style={styles.filterContainer}>
            <ScrollView id='filter-view' horizontal showsHorizontalScrollIndicator={false}>
                {Object.entries(requests).map(([key, {title, url}]) => (
                    <TouchableOpacity id='filter-button' style={[styles.filterButton, {backgroundColor: selectedTitle === title ? WHITE : PRIMARY}]} key={key} onPress={() => setSelectedTitle(title)}>
                        <Text id='filter-title' style={[styles.filterTitle, FONT_REGULAR]}>{title}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: PRIMARY,
    },
    filterButton: {
        marginHorizontal: SCALED_SIZE(5),
        padding: SCALED_SIZE(5),
        borderTopLeftRadius: SCALED_SIZE(10),
        borderTopRightRadius: SCALED_SIZE(10),
    },
    filterTitle: {
        marginHorizontal: SCALED_SIZE(5),
        fontSize: 20 / FONT_SCALE,
        color: SECONDARY,
    },
    logoImage: {
        width: SCALED_SIZE(35),
        height: SCALED_SIZE(35)
    }
})

export default Filter;