import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function DeckOverview({name, cardCount, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>Deck: {name}</Text>
      <Text>{cardCount} cards</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
