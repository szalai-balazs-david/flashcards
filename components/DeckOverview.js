import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DeckOverview({name, cardCount}) {
  return (
    <View style={styles.container}>
      <Text>Deck: {name}</Text>
      <Text>{cardCount} cards</Text>
    </View>
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
