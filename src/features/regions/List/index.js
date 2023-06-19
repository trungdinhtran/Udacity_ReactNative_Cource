import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Row from './row';
import regionsRows from './styles'

const List = () => {
    const { navigate } = useNavigation()
    const styles = StyleSheet.create(regionsRows())

    const regionsData = [
        {
            id: 1,
            value: "South West"
        },
        {
            id: 2,
            value: "North West"
        },
        {
            id: 3,
            value: "South East"
        },
        {
            id: 4,
            value: "North East"
        },
        {
            id: 5,
            value: "Mid West"
        },

    ]
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => navigate('New')}>
                <Text>Create Customer</Text>
            </TouchableOpacity>
            <Text>List of Regions</Text>
            <Text>Select a Regions:</Text>
                <View style={{}}>
                    <FlatList
                        data={regionsData}
                        renderItem={(data) => <Row {...data} />}
                        keyExtractor={(item) => item.id}
                    />
                </View>
        </View>
    )
}

export default List
