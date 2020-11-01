import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as database from '../utils/storage'
import Deck from './Deck'

export default class DeckList extends Component {
  state = {
  }

  componentDidMount(){
    database.getDecks()
    .then((decks) => {
      this.setState(() => decks)
    })
  }

  render(){
    return (
      <View style={styles.container}>
        {Object.keys(this.state)
        .map(x => <Deck key={x} name={x}/>)}
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
