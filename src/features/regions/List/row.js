import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import regionsRows from './styles'

const Row = ({ item }) => {
    const { navigate } = useNavigation()
    const styles = StyleSheet.create(regionsRows())

    return (
        <TouchableOpacity style={styles.button} onPress={() => navigate('ListByRegions', { data: item })}>
            <Text key={'id'}>{item.value}</Text>
        </TouchableOpacity>
    )
}

export default Row
