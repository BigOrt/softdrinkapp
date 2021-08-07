import _ from 'lodash';
import React, {Component} from 'react';
import {StyleSheet, ScrollView } from 'react-native';
import {Colors, View, Card, Button, Text, Badge, Image} from 'react-native-ui-lib';
// @ts-ignore
import posts from './/posts';

const featureIcon = require('../assets/icons/star.png');
const shareIcon = require('../assets/icons/share.png');
const cardImage = require('../assets/images/card-example.jpg');
const cardImage2 = require('../assets/images/empty-state.jpg');
const tags = require('../assets/icons/star.png');


export default class CardsScreen extends Component {
  state = {
    selected1: true,
    selected2: true
  };

  renderTextSection = () => {
    return (
      <Card.Section
        content={[
          {text: 'You’re Invited!', text70: true, grey10: true},
          {
            text: '222 Join Old The Town Barbershop Official Store. Download the Wix app to...',
            text80: true,
            grey10: true
          },
          {text: 'wix.to/A465c', text90: true, grey50: true}
        ]}
        style={{padding: 20, flex: 1}}
      />
    );
  };

  renderText = () => {
    return (
      <View padding-20 flex>
        <Text text70 grey10>
          You’re Invited!
        </Text>
        <Text text80 grey10>
          222 Join Old The Town Barbershop Official Store. Download the Wix app
          to...
        </Text>
        <Text text90 grey50>
          wix.to/A465c
        </Text>
      </View>
    );
  };


  renderImageOnBottom = () => {
    return (
      <Card style={{marginBottom: 10}} onPress={() => {}}>
        <Card.Section
          bg-white
          content={[
            {text: 'You’re Invited!', text70: true, grey10: true},
            {text: 'join now', text90: true, grey50: true}
          ]}
          style={{padding: 20}}
        />
        <Card.Section imageSource={cardImage2} imageStyle={{height: 120}}/>
      </Card>
    );
  };

  renderCoupon = (cardProps) => {
    return (
      <Card {...cardProps} flex height={160} onPress={() => {}} useNative activeOpacity={1} activeScale={0.96}>
        <Card.Section
          bg-red30
          padding-20
          flex-3
          content={[
            {text: 'Special sale!', text70: true, white: true},
            {text: '10%', text60: true, white: true}
          ]}
          contentStyle={{alignItems: 'center'}}
        />
        <Card.Section
          bg-white
          padding-20
          flex
          content={[{text: 'All site', text70: true, grey10: true}]}
          contentStyle={{alignItems: 'center', margin: 0, padding: 0}}
        />
      </Card>
    );
  };

  renderCoupons = () => {
    return (
      <View row spread marginB-10>
        {this.renderCoupon({'marginR-10': true})}
        {this.renderCoupon({'marginL-10': true})}
      </View>
    );
  };

  renderComplexImage = (cardProps, image) => {
    return (
      <Card {...cardProps} flex marginV-10 onPress={() => {}} useNative activeOpacity={1} activeScale={0.96}>
        {image}
        <Card.Section
          bg-white
          padding-20
          content={[{text: 'All site', text70: true, grey10: true}]}
          contentStyle={{alignItems: 'center'}}
        />
      </Card>
    );
  };

  renderComplexImages = () => {
    return (
      <View row spread height={160}>
        {
          // Icon
          this.renderComplexImage({'marginR-5': true},
            <Card.Section
              flex
              backgroundColor={Colors.blue20}
              imageSource={featureIcon}
              imageStyle={{
                width: 25,
                height: 25,
                flex: 0,
                alignSelf: 'center'
              }}
              style={{
                justifyContent: 'center'
              }}
            />)
        }
        {
          // Image with overlay content
          this.renderComplexImage({'marginL-5': true},
            <Card.Section
              flex
              imageSource={cardImage2}
              imageStyle={{height: '100%'}}
              content={[
                {text: 'Special sale!', text70: true, blue10: true},
                {text: '10%', text60: true, blue10: true}
              ]}
              contentStyle={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            />)
        }
      </View>
    );
  };

  renderNumbers = () => {
    return (
      <ScrollView style={{height: 100, marginBottom: 20}} horizontal showsHorizontalScrollIndicator={false}>
        {_.times(4, i => {
          return (
            <Card key={i} width={100} style={{marginRight: 20}} backgroundColor={Colors.white}>
              <View padding-15>
                <Text text30 grey30>
                  {i}
                </Text>
              </View>
            </Card>
          );
        })}
      </ScrollView>
    );
  };

  renderBackgroundCard = (cardProps, body) => {
    return (
      <Card flex center height={80} {...cardProps}>
        {body}
      </Card>
    );
  };

  renderComplexExample = () => {
    return _.map(posts, (post, i) => {
      const statusColor = post.status === 'Published' ? Colors.green30 : Colors.orange30;

      return (
        <Card
          key={i}
          style={{marginBottom: 15}}
          onPress={() => console.log('press on a card')}
        >
          <Card.Section
            imageSource={post.coverImage}
            imageStyle={{height: 160}}
          />

          <View padding-20 bg-white>
            <Text text40 color={Colors.grey10}>
              {post.title}
            </Text>
            <View row>
              <Text text90 color={statusColor}>
                {post.status}
              </Text>
              <Text text90> | {post.timestamp}</Text>
            </View>

            <Text text70 color={Colors.grey10}>
              {post.description}
            </Text>

            <View>
              <Text text90 color={Colors.grey50}>
                {post.likes} Likes
              </Text>
              <View row right>
                <Button
                  style={{marginRight: 10}}
                  text90
                  link
                  iconSource={featureIcon}
                  label="Feature"
                />
                <Button text90 link iconSource={shareIcon} label="Share"/>
              </View>
            </View>
          </View>
        </Card>
      );
    });
  };

  renderCustomContent = () => {
    return (
      <>
      
        {this.renderNumbers()}
        {this.renderImageOnBottom()}
        {/* {this.renderComplexExample()} */}
        <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
      </>
    );
  };

  render() {
    return (
      <View bg-grey70>
        <ScrollView>
          <View flex padding-20>
            <Text h3 marginV-s5>
                <Badge marginR-10 label={'Card Sections'} icon={tags} backgroundColor={Colors.red30} />
            </Text>
            {this.renderCoupons()}
            {this.renderComplexImages()}
            <Text text90 marginB-s4>
                <Badge marginR-10 label={'Others'} icon={tags} backgroundColor={Colors.red30} />
            </Text>
            {this.renderCustomContent()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

StyleSheet.create({
  container: {}
});
