import React from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Row from './row'
import styles from './styles'

const ListCustomer = () => {
    const { navigate } = useNavigation()
    const { params } = useRoute()
    const customer = [
        {
            id: 1,
            firstName: "Tran",
            lastName: "Dinh",
            active: true,
            region: "Viet Nam"
        },
        {
            id: 2,
            firstName: "Tran",
            lastName: "Dinh",
            active: true,
            region: "Viet Nam"
        }
    ]
    
    return (
        <View>
            <Text>Viewing Customers in the {params.data?.value} </Text>

            {(customer && customer.length > 0) ? (
                <FlatList
                    data={customer || []}
                    renderItem={(props) => <Row {...props} />}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <>
                    <Text style={{alignItems: 'center', alignSelf: 'center', paddingTop: 10}}>{'No Customer to show'}</Text>
                </>
            )}
        </View>
    )
}

export default ListCustomer;
