import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
//iconos
import { Icon } from 'react-native-elements';


//Importa Screen
import HomeScreen from './src/screens/HomeScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';

const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
 
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f9fc44"
            inactiveColor="#ffffff"    
            barStyle={{ backgroundColor: 'tomato' }}
            
        >

            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Pokemons', tabBarIcon:({color})=>(
                <Icon
                name='home'
                type='material-community'
                color={color}
                size ={22}
                onPress={() => console.log('hello')} />
            
            ),
            }} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} options={{ tabBarLabel: 'Favoritos',   tabBarIcon:({color})=>(
                <Icon
                name='star'
                type='material-community'
                color={color}
                size ={22}
                onPress={() => console.log('hello')} />
            
            ), }} />
        </Tab.Navigator>
    );
}
export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
} 