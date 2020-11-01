import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function DeckOverview({name, cardCount, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={deckStyles.deckName}>{name}</Text>
      <Text style={deckStyles.cardCount}>{cardCount} cards</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 30
  }
});

export const deckStyles = StyleSheet.create({
  deckName:{
    fontSize: 40,
    color: 'black'
  },
  cardCount: {
    fontSize: 20
  }
});