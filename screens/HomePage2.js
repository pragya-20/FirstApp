import * as React from 'react';

import {Text, View, ScrollView, Header, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Batman from '../assets/Batman.png';

import Card from '../components/Card';

const HomePage = ({navigation}) => {
  const data = [
    {
      name: 'Batman',
      date: '20 August 2020',
      imageLink: 'https://www.justbake.in/userfiles/batman-cake.jpg',
    },
    {
      name: 'Superman',
      date: '21 August 2022',
      imageLink:
        'https://i.pinimg.com/236x/67/c3/5f/67c35f3511829afe63a3f01401dc74d9.jpg',
    },

    {
      name: 'rman',
      date: '21 August 2022',
      imageLink:
        'https://i.pinimg.com/236x/67/c3/5f/67c35f3511829afe63a3f01401dc74d9.jpg',
    },
  ];

  // console.log(typeof data[0].name);
  function goToHomeScreen() {
    //console.log("Screen3");
    navigation.navigate('HomePage');
  }

  return (
    <ScrollView
      style={{
        marginTop: '10%',
        marginLeft: '2%',
        marginRight: '2%',
        marginBottom: '1%',
        borderRadius: 8,
        backgroundColor: '#DFFFEF',
      }}>
      {data.map((item, Ikey) => {
        return <Card key={Ikey} x={item}></Card>;
      })}
      <Button onPress={goToHomeScreen} title="Go back to Screen1" />
    </ScrollView>
  );
};

export default HomePage;
