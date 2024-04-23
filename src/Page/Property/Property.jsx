import React, { useState, useEffect } from 'react';
import { Text, ScrollView, StyleSheet, View, Image } from 'react-native';
import axios from 'axios';

import GLOBALS from "../../Component/Common/Globals.js";
import BreadcrumbProp from "../../Component/Property/BreadcrumbPropComponent";
import PropertyComponent from '../../Component/Property/PropertyComponent.jsx';
import PropertySection from "../../Component/Home/PropertySection.js";
import SubscribeToNewsletter from "../../Component/Newsletter/SubscribeToNewsletterComponent";

export default function Property({ route, navigation })  {  
  // Utilisation des hooks et des props de useState
  const [properties, setProperties] = useState([]);
  
  useEffect(() => {
    axios.get(`${GLOBALS.BASE_URL}/api/react/properties`)
    .then(function (response) {
      // En cas de réussite
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
        <Text style={styles.loadingTitle}>Loading…</Text>
        <Image
          source={require("./../../../assets/loading.webp")}
          style={styles.image}
        />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <BreadcrumbProp />
      <PropertyComponent />
      <PropertySection properties={properties} setProperties={setProperties}/>
      <SubscribeToNewsletter />    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    //paddingTop: 40
  },
  loadingContainer: {
    flexDirection: 'column',
    height : '100%'
  },
  image: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  loadingTitle: {
    color : 'red',
     fontSize: 40,
     zIndex: 10
  }
});