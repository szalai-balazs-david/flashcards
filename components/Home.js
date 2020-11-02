
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Decks from './Decks'
import AddDeck from './AddDeck'

const Tab = createBottomTabNavigator();

export default function Home() {
  return (      
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 20,
          margin: 0,
          padding: 0,
        },
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Decks" component={Decks} />
      <Tab.Screen name="New Deck" component={AddDeck} />
    </Tab.Navigator>
  )
}