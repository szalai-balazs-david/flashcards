import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card'

export default function Quiz({route}) {
  const [questions, setQuestions] = useState(route.params.deck.questions)
  const [correct, setCorrect] = useState(0)

  const onCorrect = (q) => {
    setCorrect(correct + 1)
    setQuestions(questions.filter(x => x.question !== q))
  }

  const onIncorrect = (q) => {
    setQuestions(questions.filter(x => x.question !== q))
  }

  if(questions.length > 0){
    return (
      <View style={styles.container}>
        <Card 
          question={questions[0].question}
          answer={questions[0].answer}
          onCorrect={onCorrect}
          onIncorrect={onIncorrect}
        />
      </View>
    )
  }

  const questionCount = route.params.deck.questions.length
  const successPercent = Math.round(100*correct/questionCount)
  return(
    <View style={styles.container}>
      <Text>Finished!</Text>
      <Text>Result: {correct} out of {questionCount} correct. ({successPercent}%)</Text>
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
});
