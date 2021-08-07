import _ from 'lodash'
import React, { Component, useState } from 'react'
import { ProgressBarAndroidBase, ScrollView } from 'react-native'
import {
  View,
  Text,
  TextField,
  Button,
  StackAggregator,
  Badge,
  Colors,
  Checkbox,
  Image,
  BorderRadiuses,
  Typography,
  SafeAreaSpacerView,
  Toast
} from 'react-native-ui-lib'
import { Calendar } from 'react-native-calendars'
import { renderBelowToast, renderCustomContent } from './renderBelowToast'
import orders from './dummyimport/orders'

const IMAGE_EXAMPLE = require('../assets/images/empty-state.jpg')
const IMAGE_URL = orders.map(item => item.mediaUrl)
const tagsIcon = require('../assets/icons/tags.png')

const DATA = [
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
]

renderItem = (_, index) => {
  const defaultCheckbox = DATA.map(_ => (_ = false))
  const [checkbox, setCheckbox] = useState(defaultCheckbox)
  const changeCheckbox = (_, index) => {
    const updateBox = checkbox.map((item, i) => (i === index ? _ : item))
    setCheckbox(updateBox)
  }

  return (
    <View flex key={index} center padding-12>
      {/* IMAGE ROW */}
      <View
        row
        style={{ justifyContent: 'flex-start', height: 60, width: '100%' }}>
        <View paddingL-12>
          <Image
            source={{ uri: IMAGE_URL[index] }}
            borderRadius={BorderRadiuses.br20}
            style={{ width: 54, height: 54 }}
          />
        </View>
        <View
          flex
          paddingL-10
          marginB-5
          style={{ justifyContent: 'space-between' }}>
          <Text text70>#001</Text>
          <Text blue10>product name</Text>
        </View>
        <View
          flex
          paddingR-12
          style={{ justifyContent: 'space-around', alignItems: 'flex-end' }}>
          <Text text70>$1,00</Text>
          <Text blue10>status stock</Text>
        </View>
      </View>

      {/* Operations section */}
      <View
        row
        style={{
          height: 50,
          width: '100%',
          justifyContent: 'space-between'
        }}>
        <View
          row
          padding-12
          style={{ width: '30%', justifyContent: 'space-evenly' }}>
          <Checkbox
            value={checkbox[index]}
            label="special"
            color={Colors.primary}
            size={22}
            onValueChange={check => changeCheckbox(check, index)}
          />
        </View>
        <View paddingL-25 paddingB-12 paddingT-12 style={{ width: '15%' }}>
          <Badge label="99" size={'large'} backgroundColor={Colors.primary} />
        </View>
        <View paddingH-5 style={{ width: '15%' }}>
          <TextField hideunderline />
        </View>
        <View row paddingV-10 style={{ width: '40%' }}>
          <Button label="+" size="small" margin-2 outline/>
          <Button label="-" size="small" margin-2 outline/>
        </View>
      </View>

      {/* status submit */}
      <View
        row
        paddingL-12
        style={{ width: '100%', height: 30, borderTopColor: Colors.grey60 }}>
        <Text
          text90
          grey30
          style={{
            width: '60%'
          }}>{`Coconut drink {stock} progress submit`}</Text>
        <View row style={{ justifyContent: 'flex-end', width: '40%' }}>
          <Badge icon={tagsIcon} size={'large'} />
        </View>
      </View>
    </View>
  )
}

onItemPress = index => {
  console.warn('item pressed: ', index)
}

onPress = index => {
  console.warn("item's button pressed: ", index)
}

export default (ReportData = () => {
  const [showCustomToast, setCustomToast] = useState(false)
  onPressSubmit = () => {
    setCustomToast(!showCustomToast)
  }

  return (
    <ScrollView
      bg-dark80
      keyboardShouldPersistTaps={'handled'}
      showsVerticalScrollIndicator={false}>
      <Text center dark40 text90 marginT-20>
        Report Daily
      </Text>
      <StackAggregator
        containerStyle={{ marginTop: 12 }}
        itemBorderRadius={5}
        buttonProps={{
          color: Colors.primary,
          labelStyle: { ...Typography.text80, fontWeight: '500' }
        }}
        onItemPress={onItemPress}>
        {_.map(DATA, (item, index) => {
          return renderItem(item, index)
        })}
      </StackAggregator>

      {/* Report Button */}
      <View
        row
        style={{
          height: 40,
          justifyContent: 'flex-end',
          marginTop: 10
        }}>
        <View paddingR-12>
          <Text dark40 text90>
            Thu, 10 Dec, 11:29 Status Report!
          </Text>
        </View>
        <View>
          <Button
            backgroundColor={Colors.primary}
            label="Save Report"
            borderRadius={3}
            size={Button.sizes.small}
            text90
            labelStyle={{ fontWeight: '500' }}
            style={{ marginBottom: 20 }}
            onPress={onPressSubmit}
          />
        </View>
        {/* below toast */}
        <Toast
          visible={showCustomToast}
          position={`bottom`}
          onDismiss={() => setCustomShowToast(false)}>
          {renderCustomContent({ press: () => onPressSubmit() })}
        </Toast>
      </View>
      {/* Calender */}
      <View marginT-12 paddingB-20>
        <Calendar
          style={{ borderRadius: 5,}}
        />
      </View>
    </ScrollView>
  )
})
