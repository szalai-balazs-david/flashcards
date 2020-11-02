import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card'

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

  const question = (q) => (
    <Card 
      question={q.question}
      answer={q.answer}
      onCorrect={onCorrect}
      onIncorrect={onIncorrect}
    />
  )

  const statistics = () => (
    <View style={styles.container}>
      <Text style={styles.stats}>Finished!</Text>
      <Text style={styles.stats}>Result: {correct} out of {questions.length} correct. ({Math.round(100*correct/questions.length)}%)</Text>
    </View>
  )

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
  stats: {
    fontSize: 24,
    color: 'black'
  }
});
