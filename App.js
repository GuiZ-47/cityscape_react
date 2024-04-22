import React from 'react';
import FeaturedProducts from './src/FeaturedProducts';
import Home from './src/Page/Home/Home.jsx';
import Property from './src/Page/Property/Property.jsx';
import PropertyDetails from './src/Page/PropertyDetails/PropertyDetailsPage.jsx';

import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  /*axios
  .get('http://192.168.1.60:8741/api/react')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });*/
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Property" component={Property} />
        <Stack.Screen name="PropertyDetails" component={PropertyDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

