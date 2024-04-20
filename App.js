import React from 'react';

import { Provider, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import Home from './src/Page/Home/Home.jsx';
import Property from './src/Page/Property/Property.jsx';
import PropertyDetails from './src/Page/PropertyDetails/PropertyDetailsPage.jsx';

import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PropertiesService from "./src/Service/PropertyService"

import PropertiesReducer from "./src/Reducer/PropertiesReducer";

import getPropertiesFetchSuccess from "./src/Action/PropertyAction.js";

const Stack = createNativeStackNavigator();

// // Pour Redux il afut créer un store et wrap App pour passe le store dans toute l'app
// const store = () =>
//   configureStore({
//     reducer : {
//       properties : PropertiesReducer,
//   }
//   });

//   export default function WrapedApp(){
//     return(
//       <Provider store={store()}>
//         < App />
//       </Provider>
//     );
//   }
// ----------------------------------------------------------------------------------
  
  export default function App() {
    
  //--------------- Ancien code avec Redux-------------
  // PropertiesService.getAllProperties();
  // console.log(useSelector((state)=>state.properties));
  // ---------------------------------------------------------

  return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Properties" component={Property} />
          <Stack.Screen name="PropertyDetails" component={PropertyDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}