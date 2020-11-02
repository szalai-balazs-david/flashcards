import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const STORAGE_KEY = "BalazsFlashcards"

export async function getDecks() {
  try {
    const decks = await AsyncStorage.getItem(STORAGE_KEY)
    if(decks === null){
      await saveDecks({})
    }
    const parsed = decks === null ? {} : JSON.parse(decks)
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
    if(!Object.keys(decks).includes(name)){
      const newDecks = {
        ...decks,
        [name]: {
          title: name,
          questions: []
        }
      }
      await saveDecks(newDecks)
    }
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

export async function overwriteCard (name, question, newAnswer) {
  try {
    const decks = await getDecks()
    const deck = decks[name]
    const newElement = {question, answer: newAnswer}
    deck.questions = deck.questions.map(x => x.question === question ? newElement : x)
    decks[name] = deck
    await saveDecks(decks)
  } catch (e) {
    Alert.alert("overwriteCard", e)
  }
}

async function saveDecks(decks) {
  const jsonDecks = JSON.stringify(decks)
  await AsyncStorage.setItem(STORAGE_KEY, jsonDecks)
}