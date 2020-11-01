import React, {Component} from 'react';
import { StyleSheet, FlatList, SafeAreaView, View, Text, Alert } from 'react-native';
import {getDecks} from '../utils/storage'
import DeckOverview from './DeckOverview'

//ToDo: utilize loading
export default class DeckList extends Component {
  state = {
    loading: true,
    decks: {}
  }

  componentDidMount(){
    getDecks()
    .then((decks) => {
      this.setState({loading: false, decks})
      this.focusSubscription = this.props.navigation.addListener(
        'focus',
        () => {
          getDecks()
          .then((newDecks) => {
            this.setState({decks: newDecks})
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
    const {navigation } = this.props

    const renderItem = ({item}) => (
      <DeckOverview 
        name={item} 
        cardCount={this.state.decks[item].questions.length}
        onPress={() => navigation.navigate('Deck', {title: item})}
      />
    );
    
    return (
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={Object.keys(this.state.decks)}
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
