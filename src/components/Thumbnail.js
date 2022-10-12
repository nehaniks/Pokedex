import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import { FONT_SCALE, SCALED_SIZE, PRIMARY, SECONDARY, WINDOW_WIDTH, WINDOW_HEIGHT, FONT_REGULAR } from '../styles';

const Thumbnail = ({ pokemon }) => {
    return (
        <View id='thumbnail-container' style={styles.thumbnailContainer}>
            <Text id='thumbnail-text' style={[styles.thumbnailText, FONT_REGULAR]}>{pokemon.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    thumbnailContainer: {
        margin: SCALED_SIZE(10),
        padding: SCALED_SIZE(10),
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'space-around',
        backgroundColor: PRIMARY
    },
    thumbnailText: {
        fontSize: 15 / FONT_SCALE,
        textTransform: 'uppercase',
        color: SECONDARY,
    }
})

export default Thumbnail;