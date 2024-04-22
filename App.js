import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/Page/Home/Home';
import Property from './src/Page/Property/Property';
import PropertyDetails from './src/Page/PropertyDetails/PropertyDetailsPage';

//Pour une utilisation de Redux, voir le projet « cityscape-react-native-redux »
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