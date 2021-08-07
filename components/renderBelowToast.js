import React from 'react'
import { View, Text, Button, Colors } from 'react-native-ui-lib'

export const renderBelowToast = showContent => {
  if (showContent) {
    return (
      <View
        flex
        bottom
        right
        paddingB-50
        paddingR-20
        pointerEvents={'box-none'}>
        <Button
          //   iconSource={shareIcon}
          color={Colors.white}
          style={{ height: 50, width: 50 }}
        />
        <Text>renderBelowToast</Text>
      </View>
    )
  }
}

export const renderCustomContent = props => {
  const { press } = props
  return (
    <View
      row
      padding-10
      style={{
        justifyContent: 'space-between',
        height:50,
        backgroundColor: Colors.primary
      }}>
      <View>
        <Text white>Do you want to save this report ?</Text>
      </View>
      <View>
        <Button
          outline
          outlineColor={Colors.white}
          backgroundColor={Colors.primary}
          label="No"
          borderRadius={3}
          size={Button.sizes.small}
          text90
          labelStyle={{ fontWeight: '500' }}
          style={{ marginBottom: 20 }}
          onPress={press}
        />
      </View>
      <View>
        <Button
          outline
          outlineColor={Colors.white}
          backgroundColor={Colors.cyan10}
          label="Yes"
          borderRadius={3}
          size={Button.sizes.small}
          text90
          labelStyle={{ fontWeight: '500' }}
          style={{ marginBottom: 20 }}
          onPress={press}
        />
      </View>
    </View>
  )
}
