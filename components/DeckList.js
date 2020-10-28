import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as database from '../utils/storage'

export default class DeckList extends Component {
  state = {
    loading: true
  }

  componentDidMount(){
    database.addDeck("tes")
    .then(() => {
      return database.getDecks()
    })
    .then((decks) => {
      this.setState(() => decks)
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.state)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
