import React, {Component} from 'react';
import { StyleSheet, FlatList, SafeAreaView, View, Text, Alert } from 'react-native';
import {getDecks} from '../utils/storage'
import DeckOverview from './DeckOverview'

//ToDo: add loading
export default class DeckList extends Component {
  state = {
  }

  componentDidMount(){
    getDecks()
    .then((decks) => {
      this.setState(() => decks)
    })
  }

  componentDidUpdate(){
    getDecks()
    .then((decks) => {
      this.setState(() => decks)
    })
  }

  render(){
    const {navigation } = this.props

    const renderItem = ({item}) => (
      <DeckOverview 
        name={item} 
        cardCount={this.state[item].questions.length}
        onPress={() => navigation.navigate('Deck', {title: item})}
      />
    );
    
    return (
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={Object.keys(this.state)}
          renderItem={renderItem}
          keyExtractor={x => x}
          style={styles.list}
        />
      </SafeAreaView>
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
  list: {
    width: '90%'
  }
});
