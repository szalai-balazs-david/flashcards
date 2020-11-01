import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import {deckStyles} from './DeckOverview'
import {getDeck} from '../utils/storage'

//ToDo: add loading
export default class Deck extends React.Component {
  state = {
    title: '',
    questions: []
  }

  componentDidMount(){
    getDeck(this.props.route.params.title)
    .then((deck) => {
      this.setState(() => deck)
    })
  }

  componentDidUpdate(){
    getDeck(this.props.route.params.title)
    .then((deck) => {
      this.setState(() => deck)
    })
  }

  render(){
    const {navigation} = this.props
    const {title, questions} = this.state
    return (
      <View style={styles.container}>
        <View style={styles.containerBig}>
          <Text style={deckStyles.deckName}>{title}</Text>
          <Text style={deckStyles.cardCount}>{questions.length} cards</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Add Card', {title})}
            style={styles.container}
          >
            <Text 
              style={
                {
                  ...styles.button, 
                  ...styles.addCard
                }
              }
            >
              Add Card
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Quiz')}
            disabled={questions.length === 0}
            style={styles.container}
          >
            <Text 
              style={
                {
                  ...styles.button, 
                  ...(questions.length === 0 ? styles.startQuizDisabled : styles.startQuiz)
                }
              }
            >
              Start Quiz
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerBig: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 200,
    height: 70,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
    borderColor: 'black',
    borderRadius: 5
  },
  addCard: {
    backgroundColor: 'white',
    color: 'black',
  },
  startQuiz:{
    backgroundColor: 'black',
    color: 'white'
  },
  startQuizDisabled:{
    backgroundColor: 'grey',
    color: 'white'
  }
});
