import axios from 'axios';

import { PROPERTIES_FETCH_SUCCESS } from './Types';
import PropertiesService from '../Service/PropertyService';

export default function getPropertiesFetchSuccess() {
    const data = PropertiesService.getAllProperties();
    console.log(data);

    dispatch({
      type: PROPERTIES_FETCH_SUCCESS,
      payload: response.data
    });
};


// Pour l'instant on n'utilises pas ce fichier, on met tout dans le PropertyService
//  Car on n'arrives pas à temporiser l'action le temps que les données soient récupérées