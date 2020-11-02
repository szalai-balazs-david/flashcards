import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar'
import Home from './components/Home'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import AddCard from './components/AddCard'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />  
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Deck" component={Deck} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Add Card" component={AddCard} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}