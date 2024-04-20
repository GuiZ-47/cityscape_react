import axios from "axios";
import GLOBALS from "./../Component/Common/Globals";

import { PROPERTIES_FETCH_SUCCESS } from '../Action/Types';
import { useDispatch } from 'react-redux';



// // Exemples d'utilisation de axios qui viennent du modèle de projet écrit en présentiel
// const getProperties = () => {
//   return axios.get(`${GLOBALS.BASE_URL}/properties`);
// };

// const getPropertiesFiltered = (lat, lng) => {
//   return axios.get(
//     `${GLOBALS.BASE_URL}/search/properties?lat=${lat}&lng=${lng}`
//   );
// };

// const getPropertiesUSRealEstate = (state, city) => {
//   return axios.get(
//     `${GLOBALS.BASE_URL}/propertiesUSRealEstate?state_code=${state}&city=${city}`
//   );
// };

// const getPropertyUSRealEstate = (pid) => {
//   return axios.get(`${GLOBALS.BASE_URL}/propertyUSRealEstate?pid=${pid}`);
// };

// const getAllProperties = () => {
//  return axios.get(`${GLOBALS.BASE_URL}/api/react/all-properties`);
// };

// const getAllProperties = async () => {
//   const response = await axios.get(`${GLOBALS.BASE_URL}/api/react/all-properties`);
//   return response;
// };

// async function getAllProperties() {
//     try {
//       const response = await axios.get(`${GLOBALS.BASE_URL}/api/react/all-properties`);
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//const getAllProperties = () => {
//    fetch('https://192.168.1.98:8000/api/react/all-properties')
//          .then(response => response.json())
//          .then(json => console.log(json))
//}

// Version de la requête avec redux et dispatch
// const getAllProperties = () => {
//     const dispatch = useDispatch();
//     axios.get(`${GLOBALS.BASE_URL}/api/react/properties`)
//     .then(function (response) {
//         //    console.log(JSON.stringify(response.data, null, 4));

//         // dispatch pour trigger l'action voulue ans le reduccer
//             dispatch({
//                 type: PROPERTIES_FETCH_SUCCESS,
//                 payload: response.data
//             });
//             console.log("Données reçues le : " + Date());
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })
// }

const PropertiesService = {
    // getProperties,
    // getPropertiesFiltered,
    // getPropertiesUSRealEstate,
    // getPropertyUSRealEstate,
    // getAllProperties,

};

export default PropertiesService;