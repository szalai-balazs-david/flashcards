import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native'
import {useForm} from 'react-hook-form'

export default function AddCard() {  

  const onSubmit = data => {
    Alert.alert('Data', JSON.stringify(data))
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
      />
      <Text>Answer</Text>
      <TextInput 
        onChangeText={text => {
          setValue("answer", text)
        }}
      />
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
      >
        <Text>
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
});
