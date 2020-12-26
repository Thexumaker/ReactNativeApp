
// custom-button.js

import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';


export const PinkButton = (props) => {
    const { title = {}, style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.PinkButton, style]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export const LoginWithButton = (props) => {
    const { title = {}, style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.LoginWithButton, style]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export const ForgotPasswordButton = (props) => {
    const { title = {}, style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.ForgotPasswordButton, style]}>
            <Text style={[styles.ForgotPasswordtext, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    PinkButton: {
        height: 30,
        width: 100,
        borderRadius: 36,
        justifyContent: 'space-evenly',
        alignItems: 'center',

        backgroundColor: '#F1927E',
        shadowColor: '#F1927E',
        shadowOpacity: 0.4,
        shadowOffset: { height: 8, width: 0 },
        shadowRadius: 36,
    },

    LoginWithButton: {
        height: 30,
        width: 240,
        borderRadius: 36,
        justifyContent: 'space-evenly',
        alignItems: 'center',

        backgroundColor: '#2D2E42',
        shadowColor: '#2D2E42',
        shadowOpacity: 0.4,
        shadowOffset: { height: 8, width: 0 },
        shadowRadius: 36,
    },

    ForgotPasswordButton: {
        height: 30,
        width: 200,
        borderRadius: 36,
        justifyContent: 'space-evenly',
    },

    text: {
        fontSize: 16,
        color: '#FFFFFF',
    },

    ForgotPasswordtext: {
        fontSize: 12,
        fontStyle: 'italic',
        color: 'black',
    },
});
