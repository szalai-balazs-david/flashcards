import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar'
import Home from './components/Home'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import AddCard from './components/AddCard'
import {setLocalNotification} from './utils/notifications'

const Stack = createStackNavigator();

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  
  render(){
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
    )
  }
}