import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import New from '../../../features/customer/New'

const fakeSubmit = (form) => {
  console.log("FAKE SUBMIT!", form.values)
}

// top level display component only - declares a view that will be part of navigation
const NewCustomerScreen = () => (
  <SafeAreaView>
    <ScrollView>
      <New disabled={false} onSubmit={fakeSubmit} />
    </ScrollView>
  </SafeAreaView>
)

export default NewCustomerScreen
