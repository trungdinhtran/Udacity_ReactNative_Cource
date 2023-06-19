import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WelcomeScreen from './screens/Welcome'
import CustomerList from './screens/customer/List'
import NewCustomerScreen from './screens/customer/New'
import RegionsList from './screens/regions/List'
const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen
                    name='Welcome'
                    component={WelcomeScreen}
                />
                <Stack.Screen
                    name='List Regions'
                    component={RegionsList}
                />
                <Stack.Screen
                    name='New'
                    component={NewCustomerScreen}
                />
                <Stack.Screen
                    name='ListByRegions'
                    component={CustomerList}
                />
            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Navigation