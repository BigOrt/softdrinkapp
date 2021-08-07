import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  Home,
  Report,
  Produk,
  Settings,
  Stock,
  StockIn,
  StockOut,
  StockNow,
  Ady,
  Eko
} from './ComponentNavigations'

const Tab = createBottomTabNavigator()
const ProdukStack = createStackNavigator()
const ReportStack = createStackNavigator()
const StockStack = createStackNavigator()

export default function MyTabsNavigator() {
  const size = 30
  return (
    <Tab.Navigator
      initialRouteName="TabBottom"
      tabBarOptions={{
        activeTintColor: '#5e34eb',
        style: {
          paddingBottom: 10,
          paddingTop: 5,
          minHeight: 55
        },
        keyboardHidesTabBar: true
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name && route.name === 'Home') {
            iconName = focused ? 'monitor-dashboard' : 'monitor-edit'
            return (
              <MaterialCommunityIcons
                name={iconName}
                color={color}
                size={size}
              />
            )
          } else if (route.name && route.name === 'Report') {
            return (
              <MaterialCommunityIcons name="file" color={color} size={size} />
            )
          } else if (route.name && route.name === 'Produk') {
            return (
              <MaterialCommunityIcons
                name="database"
                color={color}
                size={size}
              />
            )
          } else {
            return (
              <MaterialCommunityIcons
                name="ab-testing"
                color={color}
                size={size}
              />
            )
          }
        },
        tabBarLabel: route.name
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Report">
        {() =>
          <ReportStack.Navigator>
            <ReportStack.Screen
              name="Report"
              component={Report}
              options={{
                headerTitleStyle: {
                  textAlign: 'center'
                }
              }}
            />
          </ReportStack.Navigator>}
      </Tab.Screen>
      <Tab.Screen name="Produk">
        {() =>
          <ProdukStack.Navigator>
            <ProdukStack.Screen
              name="Produk"
              component={Produk}
              options={{
                headerTitleStyle: {
                  textAlign: 'center'
                }
              }}
            />
            <StockStack.Screen name="Stock" component={Stock} />
            <StockStack.Screen name="StockIn" component={StockIn} />
            <StockStack.Screen name="StockOut" component={StockOut} />
            <StockStack.Screen name="StockNow" component={StockNow} />
            <StockStack.Screen name="Ady" component={Ady} />
            <StockStack.Screen name="Eko" component={Eko} />
          </ProdukStack.Navigator>}
      </Tab.Screen>
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ title: 'Settings' }}
      />
    </Tab.Navigator>
  )
}
