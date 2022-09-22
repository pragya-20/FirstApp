import * as React from 'react';

import {Text, View, ScrollView, Header, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from './screens/HomePage';
import HomePage2 from './screens/HomePage2';

const Stack = createStackNavigator();

const YourApp = () => {
  // console.log(typeof data[0].name);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#A3E4D7',
            },
            headerTintColor: '#34495Ef',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="HomePage2"
          component={HomePage2}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#8E44AD',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default YourApp;
