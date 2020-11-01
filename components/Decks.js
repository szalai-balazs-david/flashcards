import React, {Component} from 'react';
import { StyleSheet, Button, View } from 'react-native';
import {getDecks} from '../utils/storage'
import DeckOverview from './DeckOverview'

export default class DeckList extends Component {
  state = {
  }

  componentDidMount(){
    getDecks()
    .then((decks) => {
      this.setState(() => decks)
    })
  }

  render(){
    const {navigation } = this.props
    return (
      <View style={styles.container}>
        {Object.keys(this.state)
        .map(x => 
        <DeckOverview 
          key={x} 
          style={styles.deck}
          name={x} 
          cardCount={this.state[x].questions.length}
          onPress={() => navigation.navigate('Deck', {data: this.state[x]})}
        />)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deck: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 30
  }
});
