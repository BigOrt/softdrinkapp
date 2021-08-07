import React, { useState } from 'react'
import { StyleSheet, Alert, FlatList } from 'react-native'
import * as Animatable from 'react-native-animatable'
import {
  AnimatableManager,
  Colors,
  BorderRadiuses,
  ListItem,
  Text
} from 'react-native-ui-lib' //eslint-disable-line
import produks from '../components/dummyimport/produks'

export default (ProdukSoftDrink = ({ navigation }) => {
  const [onEdit, setOnEdit] = useState(false)
  const [updating, setUpdating] = useState(false)

  keyExtractor = item => item.name

  const renderRow = (row, id) => {
    const animationProps = AnimatableManager.presets.fadeInRight
    // const imageAnimationProps = AnimatableManager.getRandomDelay()
    const bgListColor =
      row.name === 'Add' || row.name === 'View' || row.name === 'Profit'
        ? Colors.primary
        : Colors.white
    const activeColor =
      row.name === 'Add' || row.name === 'View' || row.name === 'Profit'
        ? ''
        : Colors.dark80
    const heightList =
      row.name === 'Add' || row.name === 'View' || row.name === 'Profit'
        ? 25
        : 50
    const textColorList =
      row.name === 'Add' || row.name === 'View' || row.name === 'Profit'
        ? Colors.white
        : Colors.dark10
    const listposition = row.name === 'Add' || row.name === 'View' || row.name === 'Profit'
    ? 'center'
    : 'flex-start'

    return (
      <Animatable.View {...animationProps}>
        <ListItem row
          containerStyle={{ backgroundColor: bgListColor, justifyContent: listposition }}
          activeBackgroundColor={activeColor}
          // activeOpacity={0}
          height={heightList}
          onPress={() => onPressNavigations(row, navigation)}>
          <ListItem.Part
            containerStyle={[
              styles.border,
              { paddingRight: 17, borderColor: Colors.cyan10}
            ]}>
            <ListItem.Part
              containerStyle={{
                paddingLeft: 10,
                marginBottom: 3,
                color: textColorList,
              }}>
              <Text color={textColorList} text80 style={{ marginTop: 2 }}>
                {row.name}
              </Text>
            </ListItem.Part>
          </ListItem.Part>
        </ListItem>
      </Animatable.View>
    )
  }

  return (
    <FlatList
      data={produks}
      renderItem={({ item, index }) => renderRow(item, index)}
      keyExtractor={keyExtractor}
    />
  )
})


const onPressNavigations = (_, navigation) => {
  switch (_.name) {
    case 'Stock':
      navigation.navigate('Stock')
      break
    case 'Stock In':
      navigation.navigate('StockIn')
      break
    case 'Stock Out':
      navigation.navigate('StockOut')
      break
    case 'Stock Now':
      navigation.navigate('StockNow')
      break
    case 'Ady':
      navigation.navigate('Ady')
      break
    case 'Eko':
      navigation.navigate('Stock')
      break
  }
}

const styles = props =>
  StyleSheet.create({
    image: {
      width: props.name === 'Add' ? 24 : 48,
      height: props.name === 'Add' ? 24 : 48,
      borderRadius: BorderRadiuses.br20,
      marginHorizontal: 14
    },
    border: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: Colors.dark70
    }
  })


  