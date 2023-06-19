import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard, Button } from 'react-native'
import formStyles from './styles'
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

const Form = ({ disabled = false }) => {
  const styles = StyleSheet.create(formStyles())
  const regionsData = [
    {
        id: 1,
        value: "South West",
        isSelected: false
    },
    {
        id: 2,
        value: "North West",
        isSelected: false
    },
    {
        id: 3,
        value: "South East",
        isSelected: false
    },
    {
        id: 4,
        value: "North East",
        isSelected: false
    },
    {
        id: 5,
        value: "Mid West",
        isSelected: false
    },
  
  ]

  return (
    <View style={styles.container}>
      <View style={styles.form}></View>

      <TextInput
        placeholder='First Name'
        style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
      />

      <View style={{ height: 15, width: '100%' }}></View>

      <TextInput
          placeholder='Last Name'
          style={{ borderWidth: 1, borderColor: 'black', borderRadius: 4, padding: 15 }}
      />
      <Text style={styles.textHeader}>{'Active:'}</Text>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text>{'Active'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text>{'In-Active'}</Text>
      </TouchableOpacity>

        <Text style={styles.textHeader}>{'Region:'}</Text>

      {
        regionsData.map((item, index) => {
          console.log(item)
          return(
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text>{item.value}</Text>
            </TouchableOpacity>
          )
        })
      }
      <TouchableOpacity
        // onPress={onSubmit}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Form
