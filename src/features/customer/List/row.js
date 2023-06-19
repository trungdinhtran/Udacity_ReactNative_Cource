import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Row = ({ item }) => {
    const { navigate } = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigate('Edit', { customerID: item.id })}>
            <View key={item.id} style={{ borderWidth: 1, padding: 10, margin: 10 }}>
                <Text>ID: {item.id}</Text>
                <Text>Common Name: {item.firstName}</Text>
                <Text>Scientific Name: {item.lastName}</Text>
                <Text>Common Name: {item.active}</Text>
                <Text>Scientific Name: {item.region}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Row
