import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import List from '../../../features/regions/List'

// top level display component only - declares a view that will be part of navigation
const RegionsList = () => (
  <SafeAreaView>
    <List />
  </SafeAreaView>
)

export default RegionsList
