import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import { FONT_SCALE, FONT_BOLD, SCALED_SIZE, PRIMARY } from '../styles';
import { LOGO_IMAGE } from '../assets';

// Header component with App name and Logo
const Header = () => {
    return (
        <View id='header-container' style={styles.headerContainer}>
            <Text id='header-text' style={[styles.headerText, FONT_BOLD]}>Pokedex</Text>
            <Image id='logo-image' source={{uri: LOGO_IMAGE}} style={styles.logoImage}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        padding: SCALED_SIZE(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: PRIMARY
    },
    headerText: {
        fontSize: 25 / FONT_SCALE,
        textTransform: 'uppercase',
    },
    logoImage: {
        width: SCALED_SIZE(35),
        height: SCALED_SIZE(35)
    }
})

export default Header;