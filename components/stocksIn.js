import React from 'react'
import { FlatList, StyleSheet, Alert } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { View, Image, ListItem, Text, AnimatableManager, Colors, BorderRadiuses } from 'react-native-ui-lib'
import orders  from '../components/dummyimport/orders'

keyExtractor = item => item.name

const renderRow = (row, id) => {
  
    const statusColor = row.inventory.status === 'Paid' ? Colors.green30 : Colors.red30;
    const animationProps = AnimatableManager.presets.fadeInRight;
    const imageAnimationProps = AnimatableManager.getRandomDelay();

    return(
        <Animatable.View {...animationProps}>
        <ListItem
          activeBackgroundColor={Colors.dark60}
          activeOpacity={0.3}
          height={77.5}
          onPress={() => Alert.alert(`pressed on order #${id + 1}`)}
        >
          <ListItem.Part left>
            <Animatable.Image
              source={{uri: row.mediaUrl}}
              style={styles.image}
              {...imageAnimationProps}
            />
          </ListItem.Part>
          <ListItem.Part middle column containerStyle={[styles.border, {paddingRight: 17}]}>
            <ListItem.Part containerStyle={{marginBottom: 3}}>
              <Text dark10 text70 style={{flex: 1, marginRight: 10}} numberOfLines={1}>{row.name}</Text>
              <Text dark10 text70 style={{marginTop: 2}}>{row.formattedPrice}</Text>
            </ListItem.Part>
            <ListItem.Part>
              <Text style={{flex: 1, marginRight: 10}} text90 dark40 numberOfLines={1}>{`${row.inventory.quantity} item`}</Text>
              <Text text90 color={statusColor} numberOfLines={1}>{row.inventory.status}</Text>
            </ListItem.Part>
          </ListItem.Part>
        </ListItem>
      </Animatable.View>
    )
}

export default StockProductIn = () => {
    return(
        <FlatList
        data={orders}
        renderItem={({item, index}) => renderRow(item, index)}
        keyExtractor={keyExtractor}
      />
    )
}

const styles = props =>
  StyleSheet.create({
    image: {
      width: 54,
      height: 54,
      borderRadius: BorderRadiuses.br20,
      marginHorizontal: 14
    },
    border: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: Colors.dark70
    }
  })