import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Card from './Card'
import {clearLocalNotification, setLocalNotification} from '../utils/notifications'

export default function Quiz({route}) {
  const [correct, setCorrect] = useState(0)
  const [current, setCurrent] = useState(0)
  const {title, questions} = route.params.deck

  const onCorrect = () => {
    setCorrect(correct + 1)
    setCurrent(current + 1)
  }

  const onIncorrect = () => {
    setCurrent(current + 1)
  }

  const onRestart = () => {
    setCorrect(0)
    setCurrent(0)
  }

  const question = (q) => (
    <View style={styles.container}>
      <Text style={styles.stats}>Question: {current + 1}/{questions.length}</Text>
      <Card 
        question={q.question}
        answer={q.answer}
        onCorrect={onCorrect}
        onIncorrect={onIncorrect}
      />
    </View>
  )

  const statistics = () => {
    clearLocalNotification()
    .then(setLocalNotification)
    
    return(
    <View style={styles.container}>
      <Text style={styles.result}>Finished!</Text>
      <Text style={styles.result}>
        Result: {correct} out of {questions.length} correct. ({Math.round(100*correct/questions.length)}%)
      </Text>
      <TouchableOpacity
        onPress={onRestart}
        style={{ 
          ...styles.button,
          ...styles.restart
        }}
      >
        <Text style={styles.buttonText}>
          Restart
        </Text>
      </TouchableOpacity>
    </View>
  )}

  return(
    <View style={styles.container}>
      <Text style={styles.header}>Deck: {title}</Text>
      {questions.length > current ? question(questions[current]) : statistics()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    textDecorationLine: 'underline',
    color: 'black'
  },
  stats:{
    fontSize: 16,
    color: 'black'
  },
  result: {
    fontSize: 24,
    color: 'black'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 70,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10
  },
  restart:{
    backgroundColor: 'green',
    color: 'white'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  }
});
