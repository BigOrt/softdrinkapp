import React from 'react'
import { Image } from 'react-native'
import { Text, View } from 'react-native-ui-lib'
import Dashboard from '../components/home'
import ReportData from '../components/report'
import ProdukSoftDrink from '../components/produk'
import StockProduk from '../components/stocks'
import StockProductIn from '../components/stocksIn'
import StockProductOut from '../components/stocksOut'
import StockProductNow from '../components/stocksNow'



function Home() {
  return (
    <View paddingT-10 style={{ flex: 1 }}>
      <View>
        <Dashboard />
      </View>
    </View>
  )
}

function Report() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <ReportData />
      </View>
    </View>
  )
}

function Produk({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ProdukSoftDrink produk={route} navigation={navigation} />
    </View>
  )
}

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  )
}

function Stock() {
  return (
    <View>
      <StockProduk />
    </View>
  )
}

function StockIn() {
  return (
    <View>
      <StockProductIn />
    </View>
  )
}

function StockOut() {
  return (
    <View>
      <StockProductOut />
    </View>
  )
}

function StockNow() {
  return (
    <View>
      <StockProductNow />
    </View>
  )
}

function Ady() {
  return (
    <View>
      <Text>!Stockin</Text>
    </View>
  )
}

function Eko() {
  return (
    <View>
      <Text>!Stockin</Text>
    </View>
  )
}

export {
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
}
