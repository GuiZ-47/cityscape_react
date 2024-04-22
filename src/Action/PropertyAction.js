/*import axios from 'axios';

import { PROPERTIES_FETCH_SUCCESS } from './Types';
import PropertiesService from '../Service/PropertyService';

export const getPropertiesFetchSuccess = () => {
  try {
    const response = PropertiesService.getProperties();
    
    dispatch({
      type: PROPERTIES_FETCH_SUCCESS,
      payload: response.data
    });
  }
  
  catch(e){
    dispatch( {
      type: USERS_ERROR,
      payload: console.log(e)
    });
  }
};*/