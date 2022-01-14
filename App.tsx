import React from 'react';
import {View} from 'react-native';

import {Provider} from 'react-redux';
import Navigation from './navigation';
import {store} from './src/app/store';
import PokemonList from './src/components/PokemonList';

const App = () => {
  return (
    // <Provider store={store}>
    //   <View>
    //     <PokemonList />
    //   </View>
    // </Provider>
    <Navigation/>
  );
};

export default App;
