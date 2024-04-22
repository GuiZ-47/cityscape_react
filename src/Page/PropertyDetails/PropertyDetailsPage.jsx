import React, { useEffect, useState } from 'react';
import {Text,ScrollView,StyleSheet,} from 'react-native';

import PropertiesService from '../../Service/PropertyService';
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

export default function PropertyDetails({ route, navigation }) {
  const { propertyId } = route.params;
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    PropertiesService.getProperty()
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
    return <Text>Chargement de la propriété en cours…</Text>;
  }
  
  const property = properties.find((property) => property.propId === propertyId); // == select * from properties where id = id

  return (
  <>
    <MobileMenu />
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Breadcrumb property={property} />
      <PicturePropertyDetails property={property} />
      <PreviewPropertyDetails property={property} />
      <FeaturesPropertyDetails />
      <AddressPropertyDetails />
      <VideoPropertyDetails />
      <CategoryPropertyDetails />
      <RecentPostPropertyDetails />
      <OtherPropertiesPropertyDetails />
      <SubscribeToNewsletter />
    </ScrollView>
  </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 40,
  }
});