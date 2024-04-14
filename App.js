import React from 'react';

import Home from './src/Page/Home/Home.jsx';
import Property from './src/Page/Property/Property.jsx';
import PropertyDetails from './src/Page/PropertyDetails/PropertyDetailsPage.jsx';

import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
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