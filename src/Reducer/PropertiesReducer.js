import {
  PROPERTIES_FETCH_SUCCESS,
  PROPERTY_FETCH_SUCCESS,
  PROPERTIES_FILTERED,
  PROPERTIES_USREALESTATE,
  PROPERTY_USREALESTATE,
  SEARCH_LAT_LNG,
  UPDATE_SEARCH_TERM
} from "../Action/Types";
import { getPropertiesFetchSuccess } from '../Action/PropertyAction';

const INITIAL_STATE = {
  list: [],
  listFiltered: [],
  propertiesUSRealEstate: [],
  propertyUSRealEstate: {},
  propertyId: '',
  loading: true,
  loadingProperty: true,
  searchTerm: '',
  searchLatLng: {},
  filtered: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROPERTIES_FETCH_SUCCESS:    
      return {
        ...state,
        list: action.payload,
        listFiltered: action.payload,
        loading: false
      };
    case PROPERTY_FETCH_SUCCESS:
      return {
        ...state,
        propertyId: action.payload,
        loadingProperty: false
      };
    case PROPERTIES_FILTERED:
      return {
        ...state,
        listFiltered: action.payload,
        filtered: true,
        loading: false
      };
    case PROPERTIES_USREALESTATE:
      return {
        ...state,
        propertyUSRealEstate: action.payload,
        listFiltered: [],
        list: []
      };
    case PROPERTY_USREALESTATE:
      return {
        ...state,
        propertyUSRealEstate: action.payload
      };
    case SEARCH_LAT_LNG:
      return {
        ...state,
        searchLatLng: action.payload
      };
    default:
      return state;
  }
};