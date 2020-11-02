import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Card({question, answer, onCorrect, onIncorrect}) {
  const [showQuestion, setShowQuestion] = useState(true);

  return (
    <View style={styles.container}>
      <Text>{showQuestion ? question : answer}</Text>

      <TouchableOpacity
        onPress={() => setShowQuestion(!showQuestion)}
      >
        <Text>
          {showQuestion ? "Show Answer" : "Show Question"}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => onCorrect(question)}
      >
        <Text>
          Correct
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => onIncorrect(question)}
      >
        <Text>
          Wrong
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
