import React from 'react'
import {
  View,
  Text,
  Colors,
  Card,
  TextField,
  Button
} from 'react-native-ui-lib'
import { ScrollView } from 'react-native'

const localImageSource = require('../assets/images/empty-state.jpg')

export default (StockProduk = () => {
  return (
    <ScrollView>
      <View padding-5>
        <Card style={{ marginBottom: 20, borderRadius: 10 }}>
          <Card.Section
            imageSource={localImageSource}
            imageStyle={{ height: 100 }}
            
          />
          <View padding-20>
            <Text
              text40
              color={Colors.primary}
              center
              marginB-25
              highlightString="ing Sto">
              Adding Stock
            </Text>
          </View>
          <View paddingH-25>
            <TextField
              underlineColor={Colors.grey50}
              placeholder={`Item name`}
            />
          </View>
          <View row paddingH-25>
            <View style={{ width: '60%' }}>
              <TextField underlineColor={Colors.grey50} placeholder={`Set`} />
            </View>
            <View row style={{ width: '40%' }}>
              <Button
                outline
                outlineColor={Colors.primary}
                marginH-10
                label="+"
                size={Button.sizes.xSmall}
                style={{ height: 25 }}
              />
              <Button
                outline
                outlineColor={Colors.primary}
                label="-"
                size={Button.sizes.xSmall}
                style={{ height: 25 }}
              />
            </View>
          </View>
          <View row paddingH-25>
            <View style={{ width: '60%' }}>
              <TextField underlineColor={Colors.grey50} placeholder={`Qty`} />
            </View>
            <View row style={{ width: '40%' }}>
              <Button
                outline
                outlineColor={Colors.primary}
                marginH-10
                label="+"
                size={Button.sizes.xSmall}
                style={{ height: 25 }}
              />
              <Button
                outline
                outlineColor={Colors.primary}
                label="-"
                size={Button.sizes.xSmall}
                style={{ height: 25 }}
              />
            </View>
          </View>
          <View row paddingH-25>
            <View style={{ width: '10%' }}>
              <Text text50 color={Colors.grey50}>
                Rp{' '}
              </Text>
            </View>
            <View style={{ width: '70%' }}>
              <TextField underlineColor={Colors.grey50} placeholder={`Price`} />
            </View>
            <View row style={{ width: '20%', justifyContent: 'center' }}>
              <Text text50 color={Colors.grey50}>
                /Set
              </Text>
            </View>
          </View>
          <View row paddingH-25>
            <View style={{ width: '10%' }}>
              <Text text50 color={Colors.grey50}>
                Rp{' '}
              </Text>
            </View>
            <View style={{ width: '80%' }}>
              <TextField
                underlineColor={Colors.grey50}
                placeholder={`Price Sell`}
              />
            </View>
            <View style={{ width: '10%' }}>
              <Text text50 color={Colors.grey50}>
                /1
              </Text>
            </View>
          </View>
          <View padding-20 row style={{ justifyContent: 'flex-end' }}>
            <Button
              marginR-10
              label="Clear"
              size="small"
              backgroundColor={Colors.primary}
            />
            <Button
              label="Add"
              size="small"
              backgroundColor={Colors.primary}
            />
          </View>
        </Card>
        <Card style={{ marginBottom: 20, borderRadius: 10 }}>
          <View padding-10>
            <Text>Status adding stock ...</Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  )
})
