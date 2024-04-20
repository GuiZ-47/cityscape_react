import React from 'react';
import { View,Image, Text, ScrollView, StyleSheet, } from 'react-native';
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

// Pour utiliser redux
// import { useSelector } from 'react-redux'


export default function PropertyDetails({ route }) {

  // ---------------------- Redux ------------------------------------------------
  // Ancienne version de la requête avec Redux, attention la requête est en dehors du useEffect et entraine des boucles infinies de requêtes
  // PropertiesService.getAllProperties();
  // console.log(useSelector((state)=>state.properties));
  // console.log("Données affichées : " + Date());
  // -----------------------------------------------------------------------------------------

  // -------------- Requête pour récup toute les propriétés -------------
  // const [propertyDetails, setPropertyDetails] = React.useState([]);

  // React.useEffect(() => {
  //   fetchPropertyDetails();

  // }, []);

  // function fetchPropertyDetails() {
  //   axios.get(`${GLOBALS.BASE_URL}/api/react/properties`)
  //     .then(function (response) {
  //       setPropertyDetails(response.data);

  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // }

  // console.log(JSON.stringify(propertyDetails, null, 4));
  // console.log(Date());



  // if (propertyDetails.length === 0) {
  //   return (
  //     <Text style={styles.breadcrumbTitle}>Chargement ...</Text>
  //   );
  // }
  // else
  // -------------------------- Requête pour récup toute les propriétés FIN------------------------------

  // -------------------------- Requête pour une seule propriété --------------------------------

  // Un petit ternaire pour le flex ;) 
  // Si on n'a pas récupérer d'Id de propriété par la route (parce qu'on a accéder directement à cette page sans cliquer sur une propriété)
  // Alors on choisi à la place une propriété aléatoire dans la base de donnée
  const NbProperties = 99; // Max Id dans la base de données
  const Id = (route.params) ? { Id } = route.params : Math.floor(Math.random() * NbProperties);


  const [propertyDetails, setPropertyDetails] = React.useState([]);

  React.useEffect(() => {
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
  // console.log(propertyDetails);
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
        < FeaturesPropertyDetails />
        < AddressPropertyDetails />
        < VideoPropertyDetails />
        < CategoryPropertyDetails />
        < RecentPostPropertyDetails />
        < OtherPropertiesPropertyDetails />
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