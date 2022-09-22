import React from 'react';

import {Text, ScrollView, View, Image} from 'react-native';

function ItemCard(props) {
  // console.log(props.x.name);
  let name = props.name;

  // console.log(props.key1, props.x.name);

  return (
    <View>
      <View
        style={{
          borderWidth: 2,
          margin: 10,
          padding: 10,
          borderColor: '#465B59',
          flexDirection: 'row',
          borderRadius: 16,
        }}>
        <View style={{padding: 10}}>
          <Text>{props.x.name} </Text>
          <Text>Date Released: {props.x.date}</Text>
        </View>

        <Image
          style={{
            flex: 1,
            resizeMode: 'contain',
            width: '100%',
            height: '100%',
          }}
          source={{uri: props.x.imageLink}}></Image>
      </View>
    </View>
  );
}

export default ItemCard;
