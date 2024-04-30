import React, { useEffect, useState } from 'react';
import { View, Image, Text, ScrollView, StyleSheet, } from 'react-native';
import axios from "axios";

import GLOBALS from "./../../Component/Common/Globals";
import Breadcrumb from "./../../Component/PropertyDetails/BreadcrumbComponent"
import PicturePropertyDetails from "./../../Component/PropertyDetails/PicturePropertyDetailsComponent"
import PreviewPropertyDetails from "./../../Component/PropertyDetails/PreviewPropertyDetails"
import AddressPropertyDetails from "./../../Component/PropertyDetails/AddressPropertyDetailsComponent"
import FeaturesPropertyDetails from "./../../Component/PropertyDetails/FeaturesPropertyDetailsComponent"
import VideoPropertyDetails from "./../../Component/PropertyDetails/VideoPropertyDetailsComponent"
import OtherPropertiesPropertyDetails from "./../../Component/PropertyDetails/OtherPropertiesPropertyDetailsComponent"
import CategoryPropertyDetails from "./../../Component/PropertyDetails/CategoryPropertyDetailsComponent"
import RecentPostPropertyDetails from "./../../Component/PropertyDetails/RecentPostPropertyDetailsComponent"
import SubscribeToNewsletter from "./../../Component/Newsletter/SubscribeToNewsletterComponent"

// Composant utilisé uniquement pour des test
// import PropertyView from "./../../Component/PropertyDetails/PropertyView"

export default function PropertyDetails({ route, navigation }) {
  // Il y a 2 façons d'accéder à cette page : par le menu ou en cliquant sur un bien immobilier !
  // Si on n'a pas récupérer d'Id de propriété par la route (parce qu'on a accéder directement à cette page par le header, sans cliquer sur une propriété)
  // Alors on choisi à la place une propriété aléatoire dans la base de donnée
  
  // Max Id dans la base de données

  const NbProperties = 25;
  
  const [id, setId] = useState();
  const [refreshing, setRefreshing] = useState(true);
  const [propertyDetails, setPropertyDetails] = useState([]);

  // Choix aléatoire d'une propriété à afficher
  if (route.params.propertyId == 'random'){
    const newId = Math.floor(Math.random() * NbProperties);
    setId(newId);
    // On change 'route.params.propertyId' avec l'Id choisi aléatoirement pour éviter de boucler à l'infini
    route.params.propertyId = newId;

  // Si l'Id à afficher est déjà le bon, pas de changement du state 'Id' pour éviter de boucler à l'infini
  } else if (id != route.params.propertyId) {
    const newId = route.params.propertyId;
    setId(newId);
  }

  useEffect(() => {
    console.log(`Cette page affiche la propriété d'ID : ${id}`);
    fetchPropertyDetails();
  }, [id,]);

  function fetchPropertyDetails() {
    setRefreshing(true);
    axios.get(`${GLOBALS.BASE_URL}/api/react/property/${id}`)
      .then(function (response) {
        setPropertyDetails(response.data);
        setRefreshing(false);
      })
      .catch(function (error) {
        console.log(error);
        setRefreshing(false);
      })
  }

  console.log(JSON.stringify(propertyDetails, null, 4));
  console.log(Date());

  if (refreshing) {
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
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Breadcrumb propertyDetails={propertyDetails} />
      <PicturePropertyDetails propertyDetails={propertyDetails} />
      <PreviewPropertyDetails propertyDetails={propertyDetails} />
      <AddressPropertyDetails propertyDetails={propertyDetails} />
      <VideoPropertyDetails propertyDetails={propertyDetails} />
      <OtherPropertiesPropertyDetails />
      <CategoryPropertyDetails />
      <RecentPostPropertyDetails />
      <SubscribeToNewsletter />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    //paddingTop: 40,
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
  }
});