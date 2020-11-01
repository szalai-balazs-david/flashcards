
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Decks from './Decks'
import Deck from './Deck'
import Quiz from './Quiz'
import AddCard from './AddCard'

const Stack = createStackNavigator();

function Home() {
  return (    
  <Stack.Navigator initialRouteName="Decks">
    <Stack.Screen name="Decks" component={Decks} />
    <Stack.Screen name="Deck" component={Deck} />
    <Stack.Screen name="Quiz" component={Quiz} />
    <Stack.Screen name="AddCard" component={AddCard} />
  </Stack.Navigator>
  );
}

export default Home;