import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import {useForm} from 'react-hook-form'
import {addCard} from '../utils/storage'

export default function AddCard({navigation, route}) {  

  const onSubmit = data => {
    const {title} = route.params
    addCard(title, data.question, data.answer)
    .then(() => {
      navigation.navigate('Deck', {title})
    })
  }

  const {register, handleSubmit, setValue} = useForm()

  useEffect(() => {
    register("question")
    register("answer")
  }, [register])

  return (
    <View style={styles.container}>
      <Text>Question</Text>
      <TextInput 
        onChangeText={text => {
          setValue("question", text)
        }}
        style={styles.inputField}
      />
      <Text>Answer</Text>
      <TextInput 
        onChangeText={text => {
          setValue("answer", text)
        }}
        style={styles.inputField}
      />
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.submitButton}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField:{
    width: '80%',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
    borderColor: 'black',
  },
  submitButton: {
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 200,
    height: 70,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
    borderColor: 'black',
    backgroundColor: 'black',
    color: 'white'
  }
});
