import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//Importa Screen
import HomeScreen from './src/screens/HomeScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions= {{
            tabBarActiveTintColor: 'purple',
        }}
      >
            
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarLabel:'Pokemons',}}/>
        <Tab.Screen name="Favorites" component={FavoritesScreen}  options={{tabBarLabel:'Favoritos', }}/>
      </Tab.Navigator>
    );
  }
export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
} 