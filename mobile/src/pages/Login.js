import React from 'react';
import { View, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import logo from './assets/logo.png'
import { Platform } from '@unimodules/core';

export default function Login() {
    return (
        <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
           

            <View style style={Styles.form}>
                <Text style={Styles.label}>Seu E-MAIL *</Text>
                <TextInput
                    style={StyleSheet.input}
                    placeholder="Seu e-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />


                <Text style={StyleSheet.label}>TECNOLOGIS *</Text>
                <TextInput
                    style={StyleSheet.input}
                    placeholder="Tecnologias de interesse"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                />

                <TouchableOpacity>
                    <Text style={styles.buttonText}> Encontrar spots</Text>/>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },

    // label: {
    //     fontWeigth: 'bold',
    //     color: '#444',
    //     marginBottom: 8,
    // },

    input: {
        // borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    button: {
        height: 42,
        backgroundColor: '#fa5a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },

    buttonText: {
        color: '#fff',
        // fontWeigth: 'bold',
        fontSize: 16,
    }
})