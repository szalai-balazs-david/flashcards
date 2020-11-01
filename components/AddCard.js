import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import {useForm, Controller } from 'react-hook-form'
import {addCard} from '../utils/storage'

export default function AddCard({navigation, route}) {  

  const onSubmit = data => {
    const {title} = route.params
    addCard(title, data.question, data.answer)
    .then(() => {
      navigation.navigate('Deck', {title})
    })
  }

  const { control, handleSubmit, errors } = useForm()

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.inputField}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Question"
          />
        )}
        name="question"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.question && <Text>This is required.</Text>}
      
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.inputField}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Answer"
          />
        )}
        name="answer"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.answer && <Text>This is required.</Text>}

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
