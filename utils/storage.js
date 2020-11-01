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
    const decks = await getDecks()
    return decks[name]
  } catch (e) {
    Alert.alert("getDeck", e)
  }
}

export async function addDeck(name) {
  try {
    const decks = await getDecks()
    const newDecks = {
      ...decks,
      [name]: {
        title: name,
        questions: []
      }
    }
    await saveDecks(newDecks)
  } catch (e) {
    Alert.alert("addDeck", e)
  }
}

export async function removeDeck(name) {
  try {
    const decks = await getDecks()
    decks[name] = undefined
    await saveDecks(decks)
  } catch (e) {
    Alert.alert("removeDeck", e)
  }
}

//ToDo: This messes with order of decks!
export async function addCard (name, question, answer) {
  try {
    const decks = await getDecks()
    decks[name].questions = decks[name].questions.concat({
      question,
      answer
    })
    await saveDecks(decks)
  } catch (e) {
    Alert.alert("addCard", e)
  }
}

async function saveDecks(decks) {
  const jsonDecks = JSON.stringify(decks)
  await AsyncStorage.setItem(storageKey, jsonDecks)
}