import * as React from 'react';

import {
  Text,
  View,
  ScrollView,
  Header,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Batman from '../assets/Batman.png';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Card from '../components/Card';

const Tab = createBottomTabNavigator();

const HomePage = props => {
  const navigation = props.navigation;
  const {navigation2} = props;
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
      name: 'Supman',
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
    {
      name: 'rman',
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
    {
      name: 'rman',
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
    {
      name: 'rman',
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
  function goToNextScreen() {
    //console.log("Screen3");
    navigation.navigate('HomePage2');
  }

  return (
    <>
      <ScrollView
        style={{
          marginTop: '2.5%',
          marginLeft: '2%',
          marginRight: '2%',
          marginBottom: '1%',
          borderRadius: 8,
          backgroundColor: '#D7F2EF',
        }}>
        {data.map((item, Ikey) => {
          return <Card key={Ikey} x={item} />;
        })}

        <Button onPress={goToNextScreen} title="Take me to Screen2" />
      </ScrollView>
    </>
  );
};

export default HomePage;
