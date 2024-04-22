import React, { useState, useEffect } from 'react';
import {Text,ScrollView,StyleSheet, View, Image,} from 'react-native';
import  GLOBALS from "../../Component/Common/Globals.js";


import BreadcrumbProp from "../../Component/Property/BreadcrumbPropComponent";
import PropertySection from "../../Component/Home/PropertySection.js";
import SubscribeToNewsletter from "../../Component/Newsletter/SubscribeToNewsletterComponent";
import MobileMenu from "../../Component/Header/HeaderComponent"
import PropertyComponent from '../../Component/Property/PropertyComponent.jsx';
import axios from 'axios';
// import Footer from '../Partials/Footer.jsx';


export default function Property({ route, navigation })  {
  
  // Utilisation des hooks et des props de useState
  const [properties, setProperties] = useState([]);
  
  useEffect(() => {
    axios.get(`${GLOBALS.BASE_URL}/api/react/`)
    .then(function (response) {
      // En cas de réussite
      console.log(response.data);
      setProperties(response.data);
    })
    .catch(function (error) {
      // En cas d'erreur
      console.log(error);
    });
  }, []);
  
if (properties.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingTitle}>Loading ...</Text>
        <Image
          source={require("./../../../assets/loading.webp")}
          style={styles.image}
        />
      </View>
    );
  }

  return (

  <>
  < MobileMenu />
  <ScrollView contentContainerStyle={styles.contentContainer}>
    < BreadcrumbProp />
    < PropertyComponent />
    < PropertySection properties={properties} setProperties={setProperties}/>
    < SubscribeToNewsletter />    
  </ScrollView>
  </>

  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 40,
  },
  loadingContainer: {
    flexDirection: 'column',
    height : '100%',
  },
  image: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  loadingTitle: {
    color : 'red',
     fontSize: 40,
     zIndex: 10,
  },
});

