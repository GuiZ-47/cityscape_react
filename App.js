import React, { useEffect, Component } from 'react';
import { Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faCity } from '@fortawesome/free-solid-svg-icons/faCity';
import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding';
// import registerNNPushToken from 'native-notify';
import * as Notifications from "expo-notifications";
//import MobileMenu from './src/Component/Header/HeaderComponent';
import Home from './src/Page/Home/Home';
import Property from './src/Page/Property/Property';
import PropertyDetails from './src/Page/PropertyDetails/PropertyDetailsPage';
// import Constants from 'expo-constants';






// Pour une utilisation de Redux, voir le projet « cityscape-react-native-redux »
const Stack = createNativeStackNavigator();
/* <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Properties" component={Property} />
        <Stack.Screen name="PropertyDetails" component={PropertyDetails} />
      </Stack.Navigator>
    </NavigationContainer> */

// Création d'un composant de type Image contenant le logo
function LogoTitle() {
  return (
    <Image
      style={{ width: 250, height: 50, marginRight: 20 }}
      source={require('./assets/images/logo/logo.png')}
    />
  );
}

const Tab = createBottomTabNavigator();



export default function App() {  
  // registerNNPushToken(20964, 'zl37klKBs2XcNC9yiiz58X'); 
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator backBehavior='history'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? faHouse
                : faHouse;
            } else if (route.name === 'Properties') {
              iconName = focused ? faCity : faCity;
            } else if (route.name === 'PropertyDetails') {
              iconName = focused ? faBuilding : faBuilding;
            }

            // You can return any component that you like here!
            return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#F69120',
          tabBarInactiveTintColor: '#BDBDBD',
          headerStyle: {
            backgroundColor: '#BDBDBD',
          },
          headerTintColor: '#FFFFFF',
          headerTitle: (props) => <LogoTitle {...props} />,
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        })}>
          
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Properties" component={Property} />
        <Tab.Screen name="PropertyDetails" component={PropertyDetails} initialParams={{ propertyId: 'random' }} options={{ title: 'Property Details' }} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}

