import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const storageKey = "BalazsFlashcards"

export async function getDecks() {
  try {
    const decks = await AsyncStorage.getItem(storageKey)
    const parsed = JSON.parse(decks)
    return parsed
  } catch (e) {
    Alert.alert("getDecks", e)
  }
}

export async function getDeck(name) {
  try {
    getDecks()
    .then((decks) => {
      return decks[name]
    })
  } catch (e) {
    Alert.alert("getDeck", e)
  }
}

export async function addDeck(name) {
  try {
    getDecks()
    .then((decks) => {
      return{
        ...decks,
        [name]: {
          title: name,
          questions: []
        }
      }
    })
    .then(async (newDecks) => {
      await saveDecks(newDecks)
    })
  } catch (e) {
    Alert.alert("addDeck", e)
  }
}

export async function removeDeck(name) {
  try {
    getDecks()
    .then((decks) => {
      decks[name] = undefined
      return decks
    })
    .then(async (newDecks) => {
      await saveDecks(newDecks)
    })
  } catch (e) {
    Alert.alert("removeDeck", e)
  }
}

export async function addCard (name, question, answer) {
  try {
    getDecks()
    .then((decks) => {
      return {
        ...decks,
        [name]:{
          ...decks[name],
          questions: decks[name].questions.concat({
            question,
            answer
          })
        }
      }
    })
    .then(async (newDecks) => {
      await saveDecks(newDecks)
    })
  } catch (e) {
    Alert.alert("addCard", e)
  }
}

async function saveDecks(decks) {
  const jsonDecks = JSON.stringify(decks)
  await AsyncStorage.setItem(storageKey, jsonDecks)
}