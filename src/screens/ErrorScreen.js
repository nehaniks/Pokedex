import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    BackHandler,
    Platform,
    TouchableOpacity,
} from 'react-native';
import { FONT_BOLD, FONT_REGULAR, FONT_SCALE, PRIMARY, SCALED_SIZE, SECONDARY, WHITE, WINDOW_HEIGHT, WINDOW_WIDTH } from '../styles';
import RNExitApp from 'react-native-exit-app';

// Error Screen to display API error
const ErrorScreen = () => {
    const navigation = useNavigation();
    const { params } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <TouchableOpacity 
            id='error-container' 
            style={styles.errorContainer}
            onPress={() => Platform.OS === 'ios' ? RNExitApp.exitApp() : BackHandler.exitApp()}
        >
            <View id='error-wrapper' style={styles.errorWrapper}>
                <Text id="error-title" style={[styles.errorTitle, FONT_BOLD]}>Error</Text>
                <Text id="error-title" style={[styles.errorMessage, FONT_REGULAR]}>{params.error}</Text>
                <Text id="error-title" style={[styles.errorMessage, FONT_REGULAR, {fontSize: 15}]}>Close App!!</Text>

                <TouchableOpacity 
                    id="ok-button" 
                    style={styles.okButton}
                    onPress={() => BackHandler.exitApp()}
                >
                    <Text>Ok</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    errorContainer: {
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PRIMARY
    },
    errorWrapper: {
        position: 'relative',
        width: '80%',
        height: '25%',
        padding: SCALED_SIZE(20),
        backgroundColor: WHITE,
    },
    errorTitle: {
        fontSize: 22 / FONT_SCALE,
    },
    errorMessage: {
        fontSize: 20 / FONT_SCALE,
        marginTop: SCALED_SIZE(25),
        textAlign: 'center'
    },
    okButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        paddingHorizontal: SCALED_SIZE(10),
        paddingVertical: SCALED_SIZE(5),
        borderWidth: 0.4,
        borderColor: SECONDARY
    }
})

export default ErrorScreen;