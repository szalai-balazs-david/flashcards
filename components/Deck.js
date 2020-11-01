import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Deck({navigation, name, cardCount}) {
  return (
    <View style={styles.container}>
      <Text>Deck: {name}</Text>
      <Text>{cardCount} cards</Text>
      <TouchableOpacity 
        onPress={() => navigation.navigate('AddCard')}
      >
        <Text>
          Add Card
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text>
          Start Quiz
        </Text>
      </TouchableOpacity>
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
