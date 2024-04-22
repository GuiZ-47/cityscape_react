import axios from 'axios';

import GLOBALS from '../Component/Common/Globals';

// Pour une utilisation de Redux, voir le projet « cityscape-react-native-redux »
// Appel vers l'API pour récupérer toutes les propriétés listées, sans exception
const getProperties = () => {  
  return axios.get(`${GLOBALS.BASE_URL}/api/react/properties`);
};

// Appel vers l'API pour récupérer une propriété exclusivement
const getProperty = () => {  
  return axios.get(`${GLOBALS.BASE_URL}/api/react/property`);
};

const PropertiesService = {
  getProperties,
  getProperty
};

export default PropertiesService;