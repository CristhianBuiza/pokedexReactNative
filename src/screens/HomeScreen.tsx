import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { store } from '../app/store';
import PokemonList from '../components/PokemonList';
import { Provider } from 'react-redux';

export default function HomeScreen() {
    return (
        <Provider store={store}>
            <View>
                <PokemonList />
            </View>
        </Provider>
    )
}
