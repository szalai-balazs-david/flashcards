import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import {deckStyles} from './DeckOverview'
import {getDeck, removeDeck} from '../utils/storage'

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
      this.focusSubscription = this.props.navigation.addListener(
        'focus',
        () => {
          getDeck(this.props.route.params.title)
          .then((newDeck) => {
            this.setState({...newDeck})
          })
        }
      )
    })
  }

  componentWillUnmount() {
    if (this.focusSubscription) {
      this.focusSubscription()
    }
  }

  render(){
    const {navigation} = this.props
    const {title, questions} = this.state

    const onRemove = e => {
      Alert.alert(
        "Confirmation Required",
        "Are you sure you want to delete this deck?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          {
            text: "Delete",
            onPress: () => 
              removeDeck(title)
              .then(() => {
                navigation.navigate('Decks')
              }),
            style: "default"
          }
        ]
      )
    }
    
    return (
      <View style={styles.container}>
        <View style={styles.containerBig}>
          <Text style={deckStyles.deckName}>{title}</Text>
          <Text style={deckStyles.cardCount}>{questions.length} cards</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Add Card', {title, questions: questions.map(x => x.question)})}
            style={{ 
              ...styles.button,
              ...styles.addCard
            }}
          >
            <Text style={styles.buttonText}>
              Add Card
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Quiz', {deck: {title, questions}})}
            disabled={questions.length === 0}
            style={{ 
              ...styles.button,
              ...(questions.length === 0 ? styles.startQuizDisabled : styles.startQuiz)
            }}
          >
            <Text style={styles.buttonText}>
              Start Quiz
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onRemove}
            style={{ 
              ...styles.button,
              ...styles.removeDeck
            }}
          >
            <Text style={styles.buttonText}>
              Delete Deck
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
    flex: 1,
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
  addCard: {
    backgroundColor: 'white',
    color: 'black',
  },
  startQuiz:{
    backgroundColor: 'green',
    color: 'white'
  },
  startQuizDisabled:{
    backgroundColor: 'grey',
    color: 'white'
  },
  removeDeck:{
    backgroundColor: 'red',
    color: 'white'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  }
});
