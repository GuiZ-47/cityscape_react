import React, { useEffect, useState } from 'react';
import { View, Image, Text, ScrollView, StyleSheet, } from 'react-native';
import axios from "axios";
import GLOBALS from "./../../Component/Common/Globals";



import PicturePropertyDetails from "./../../Component/PropertyDetails/PicturePropertyDetailsComponent"
import Breadcrumb from "./../../Component/PropertyDetails/BreadcrumbComponent"
import PreviewPropertyDetails from "./../../Component/PropertyDetails/PreviewPropertyDetails"
import FeaturesPropertyDetails from "./../../Component/PropertyDetails/FeaturesPropertyDetailsComponent"
import AddressPropertyDetails from "./../../Component/PropertyDetails/AddressPropertyDetailsComponent"
import VideoPropertyDetails from "./../../Component/PropertyDetails/VideoPropertyDetailsComponent"
import CategoryPropertyDetails from "./../../Component/PropertyDetails/CategoryPropertyDetailsComponent"
import RecentPostPropertyDetails from "./../../Component/PropertyDetails/RecentPostPropertyDetailsComponent"
import OtherPropertiesPropertyDetails from "./../../Component/PropertyDetails/OtherPropertiesPropertyDetailsComponent"
import SubscribeToNewsletter from "./../../Component/Newsletter/SubscribeToNewsletterComponent"
import MobileMenu from "./../../Component/Header/HeaderComponent"

import PropertiesService from "./../../Service/PropertyService"

// Composant utilisé uniquement pour des test
// import PropertyView from "./../../Component/PropertyDetails/PropertyView"

export default function PropertyDetails({ route }) {

  // Il y a 2 façons d'accéder à cette page : par le menu ou en cliquant sur un bien immobilier !
  // Si on n'a pas récupérer d'Id de propriété par la route (parce qu'on a accéder directement à cette page par le header, sans cliquer sur une propriété)
  // Alors on choisi à la place une propriété aléatoire dans la base de donnée

  // Max Id dans la base de données
  const NbProperties = 99; 
  // Un petit ternaire pour le flex ;) 
  const Id = (route.params) ? { Id } = route.params : Math.floor(Math.random() * NbProperties);


  const [propertyDetails, setPropertyDetails] = useState([]);

  useEffect(() => {
    console.log(`Cette page affiche la propriété d'ID : ${Id}`);
    fetchPropertyDetails();
  }, []);

  function fetchPropertyDetails() {
    axios.get(`${GLOBALS.BASE_URL}/api/react/property/${Id}`)
      .then(function (response) {
        setPropertyDetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  console.log(JSON.stringify(propertyDetails, null, 4));
  console.log(Date());

  if (propertyDetails.length === 0) {
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
        < Breadcrumb propertyDetails={propertyDetails} />
        < PicturePropertyDetails propertyDetails={propertyDetails} />
        < PreviewPropertyDetails propertyDetails={propertyDetails} />
        < FeaturesPropertyDetails propertyDetails={propertyDetails} />
        < AddressPropertyDetails propertyDetails={propertyDetails} />
        < VideoPropertyDetails propertyDetails={propertyDetails} />
        < OtherPropertiesPropertyDetails />
        < CategoryPropertyDetails />
        < RecentPostPropertyDetails />
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