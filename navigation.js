import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
            
        <Tab.Screen name="home-alert" component={HomeScreen} options={{tabBarLabel:'Pokemons',}}/>
        <Tab.Screen name="Favorites" component={FavoritesScreen}  options={{tabBarLabel:'Favoritos',  }}/>
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