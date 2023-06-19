import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import ListCustomer from '../../../features/customer/List'

// top level display component only - declares a view that will be part of navigation
const ListCustomerScreen = () => (
  <SafeAreaView>
    <ListCustomer />
  </SafeAreaView>
)

export default ListCustomerScreen
