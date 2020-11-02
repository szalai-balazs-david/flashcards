import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Card({question, answer, onCorrect, onIncorrect}) {
  const [showQuestion, setShowQuestion] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.main}>{showQuestion ? question : answer}</Text>

      <TouchableOpacity
        onPress={() => setShowQuestion(!showQuestion)}
        style={{ 
          ...styles.button,
          ...styles.flipButton
        }}
      >
        <Text style={styles.buttonText}>
          {showQuestion ? "Show Answer" : "Show Question"}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => onCorrect()}
        style={{ 
          ...styles.button,
          ...styles.correctButton
        }}
      >
        <Text style={styles.buttonText}>
          Correct
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => onIncorrect()}
        style={{ 
          ...styles.button,
          ...styles.wrongButton
        }}
      >
        <Text style={styles.buttonText}>
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
  main: {
    flex: 6,
    textAlignVertical: 'center',
    fontSize: 20,
    color: 'black'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10
  },
  correctButton:{
    backgroundColor: 'green',
  },
  wrongButton: {
    backgroundColor: 'red'
  },
  flipButton: {
    backgroundColor: 'white'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  }
});
