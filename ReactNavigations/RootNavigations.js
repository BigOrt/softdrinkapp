import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MyTabsNavigator from './TabNavigator'

function RootNavigations({ route }) {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyTabsNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default RootNavigations
