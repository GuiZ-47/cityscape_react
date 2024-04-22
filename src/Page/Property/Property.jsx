import React, { useState, useEffect } from 'react';
import {Text,ScrollView,StyleSheet, View,} from 'react-native';
import  GLOBALS from "../../Component/Common/Globals.js";


import BreadcrumbProp from "../../Component/Property/BreadcrumbPropComponent";
import PropertySection from "../../Component/Home/PropertySection.js";
import SubscribeToNewsletter from "../../Component/Newsletter/SubscribeToNewsletterComponent";
import MobileMenu from "../../Component/Header/HeaderComponent"
import PropertyComponent from '../../Component/Property/PropertyComponent.jsx';
import axios from 'axios';
// import Footer from '../Partials/Footer.jsx';


export default function Property({ route, navigation })  {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  // const fetchProducts = () => {
  //   axios
  //     .get('http://192.168.1.60:8741/api/react')
  //     .then((res) => {
  //       console.log(res);
  //       setProducts(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   }

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
      <Text style={styles.breadcrumbTitle}>Chargement ...</Text>
    );
  }
  else

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
  }
});

