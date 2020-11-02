import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import {useForm, Controller } from 'react-hook-form'
import {addDeck} from '../utils/storage'

export default function AddDeck({navigation}) {  

  const { control, handleSubmit, errors, reset } = useForm()

  const onSubmit = data => {
    addDeck(data.title)
    .then(() => {
      reset()
      navigation.navigate('Decks')
    })
  }

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
            placeholder="Deck Title"
          />
        )}
        name="title"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.title && <Text>This is required.</Text>}

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
    marginBottom: 30
  },
  submitButton: {
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 200,
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
    borderColor: 'black',
    backgroundColor: 'black',
    color: 'white'
  }
});
