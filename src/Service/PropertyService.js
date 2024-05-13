import axios from "axios";
import GLOBALS from "./../Component/Common/Globals";

import { Text } from 'react-native';

// Pour une utilisation de Redux, voir le projet « cityscape-react-native-redux »
// Appel vers l'API pour récupérer toutes les propriétés listées, sans exception
const getProperties = () => {  
  return axios.get(`${GLOBALS.BASE_URL}/api/react/properties`);
};

// Appel vers l'API pour récupérer une propriété exclusivement
const getProperty = () => {  
  return axios.get(`${GLOBALS.BASE_URL}/api/react/property`);
};

// Appel vers l'API Photon afin de récupérer l'adresse d'une propriété à partir de sa latitude et de sa longitude
/*function setAddress(lat, lon) {
  return axios.get(`https://photon.komoot.io/reverse?lat=${lat}&lon=${lon}`)
  .then(function (response) {
    // En cas de réussite
    //console.log(lat, lon);
    //console.log(response.data);
    
    {return response.data.features[0].properties.city;}
    
    /*if (response.data.features.length === 0) {
      console.log(response.data.features);
      console.log('Que dalle ?');
      //const message = ;
      
      return "Que dalle !";
    } else {
      console.log(response.data.features[0].properties.city);
      
      return response.data.features[0].properties.city;
    }
  })
  .catch(error => {
    console.error('Erreur lors de la requête : ', error);
  });*/
    
  /*if (response.data.features.length === 0) {
    console.log(response.data.features);
    console.log('Que dalle ?');
    //const message = ;
    
    return "Que dalle !";
    console.log('Que dalle ?');    
  } else {
    //console.log(response.data.features);
     
    return response.data.features[0].properties.city;
  }
  
  console.log(response.data);
  return response;
 
  //console.log(address);
  //return address;
}*/

const PropertiesService = {
  getProperties,
  getProperty
  //setAddress
};

export default PropertiesService;