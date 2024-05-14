import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, Text, Image, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Center } from 'native-base';
import axios from 'axios';

import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { faBed } from '@fortawesome/free-solid-svg-icons/faBed';
import { faBath } from '@fortawesome/free-solid-svg-icons/faBath';

import GLOBALS from '../Common/Globals';
import FilterModal from '../Filter/FilterModal';

const PropertySection = ({ properties }) => {
  // Pour la navigation entre les pages
  const navigation = useNavigation();

  // states pour la pagination
  const itemsPerPage = 10;
  const [totalPages, setTotalpages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState([]);

  // states pour le filtre
  const [modalVisible, setModalVisible] = useState(false);
  const [intermediateFilter, setIntermediateFilter] = useState([]);
  const [filter, setFilter] = useState([]);
  const [lastFilter, setLastFilter] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [categories, setCategories] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  // useEffect s'active à chaque changement de 'currentPage', ATTENTION à mettre tout les states AVANT le useEffect !!!!!
  useEffect(() => {
    // Si un filtre est actif, on fait une requête à l'API mais seulement s'il n'as pas déjà été appliqué
    if (filter.length !== 0 && areArraysDifferent(filter, lastFilter)) {
      // Convertir le tableau des Id à filtrer en une chaîne de requête
      const queryString = filter.map(id => `categoryIds[]=${id}`).join('&');

      // Ecran d'attente pour temporiser le temps de la requête
      setRefreshing(true);
      console.log("useEffect trigger");

      axios.get(`${GLOBALS.BASE_URL}/api/react/properties/filtered?${queryString}`)
        .then(response => {
          setFilteredProperties(response.data);
          setLastFilter(filter);
          setRefreshing(false);
          // console.log(JSON.stringify(response.data, null, 4));
          // console.log(Date());
        })
        .catch(error => {
          setRefreshing(false);
          console.error('Erreur lors de la requête:', error);
        });
    };

    sliceProperties();

    console.log("slice trigger dans le useEffect");
  },
  
  // Comme le bouton qui applique le filtre renvoie aussi à la première page, on ne rajoute pas filter dans le tableau des changements de states qui doivent déclencher useEffect
  [currentPage, filter, refreshing]);

  console.log(JSON.stringify(filteredProperties[0], null, 4));
  console.log("nombres de propriétés filtrées : " + filteredProperties.length);

  console.log('filteredProperties : ' + Date());

  // ------------------------ PAGINATION ------------------------------------
  // Sélectionne dans le state 'properties' les propriétés à afficher (en fonction de la page active)
  // Et insère la sélection dans le state 'items'
  function sliceProperties() {
    const propertiesToPaginate = filteredProperties.length !== 0 ? filteredProperties : properties;

    let data = propertiesToPaginate.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    setItems(data);
    setTotalpages(Math.floor(propertiesToPaginate.length / itemsPerPage));
    // console.log(JSON.stringify(data, null, 4));
    console.log(`Page affichée : ${currentPage}`);
    console.log(Date());
  }

  // Change la page active
  const handlePageClick = (p) => setCurrentPage(p);

  // Si la Flatlist n'a pas de données à afficher
  const handleEmpty = () => {
    return <Text> No Properties! </Text>;
  };

  // Boutons de la pagination
  const renderPaginationButtons = () => {
    const maxButtonsToShow = 5;
    let startPage = Math.max(0, currentPage - Math.floor(maxButtonsToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

    if (endPage - startPage + 1 < maxButtonsToShow) {
      startPage = Math.max(0, endPage - maxButtonsToShow + 1);
    }

    const buttons = [];

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <TouchableOpacity
          key={i}
          onPress={() => handlePageClick(i)}
          style={[
            styles.paginationButton,
            i === currentPage ? styles.activeButton : null,
          ]}>
          <Text style={{ color: 'white' }}>{i}</Text>
        </TouchableOpacity>,
      );
    }

    return buttons;
  };
  // ------------------------- PAGINATION FIN ------------------------------------------

  // -------------------------------- FILTRE PAR CATEGORIES ----------------------------
  const areArraysDifferent = (arr1, arr2) => {
    return JSON.stringify(arr1) !== JSON.stringify(arr2);
  };

  console.log(`filtre principal : ${filter}`);
  console.log(`dernier filtre : ${lastFilter}`);

  // ouverture de la modal et requête pour recup les catégories
  const handleFilterButtonClick = () => {
    setModalVisible(!modalVisible);
    axios.get(`${GLOBALS.BASE_URL}/api/react/categories`)
      .then(response => {
        // Gérez la réponse de l'API
        setCategories(response.data);
      })
      .catch(error => {
        // Gérez les erreurs
        console.error('Erreur lors de la requête des categories:', error);
        setModalVisible(!modalVisible);
      });
  };

  // -------------------------------- FILTRE FIN -------------------------------------
  
  // Modèle pour la FlatLst
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <View style={styles.col}>
        <View style={styles.propertyItem} key={item.propId}>
          <View style={styles.propertyItemThumb}>
            <TouchableHighlight
              style={styles.link}
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => navigation.navigate('PropertyDetails', { propertyId: item.propId })}>
                <Image source={{ uri: `${GLOBALS.BASE_URL}${GLOBALS.URL_IMAGES_PROPERTIES}${item.picName}` }} alt="" style={styles.coverImg} />
            </TouchableHighlight>
            <View style={styles.propertyButton}><Text style={styles.propertyItemBadge}>Sale {item.propId}</Text></View>
          </View>
          <View style={styles.propertyItemContent}>
            <Text style={styles.propertyItemPrice}>${item.propPrice} <Text style={styles.day}>/per day</Text></Text>
            <Text style={styles.propertyItemTitle}>
              <TouchableHighlight
                style={styles.link}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => navigation.navigate('PropertyDetails', { propertyId: item.propId })}>
                  <Text style={styles.link}>{item.propTitle}</Text>
              </TouchableHighlight>
            </Text>
            <Text style={styles.propertyItemLocation}><Text style={styles.icon}><FontAwesomeIcon icon={faHouse} color={'white'} /> </Text>{item.catMainCategoryName} - {item.catSubCategoryName}</Text>
            <Text style={styles.propertyItemLocation}><Text style={styles.icon}><FontAwesomeIcon icon={faMapMarkerAlt} color={'white'} /> </Text>{item.propLocation}, {item.propCity}, {item.propCountry}</Text>
            <View style={styles.propertyItemBottom}>
              <View style={styles.amenitiesList}>
                <View style={styles.amenitiesListItem}>
                  <Text style={styles.icon}>
                    <FontAwesomeIcon icon={faBed} color={'white'} />
                  </Text>
                  <Text style={styles.bedsAndBaths}>{item.propBeds} Beds</Text>
                  <Text style={styles.icon}>
                    <FontAwesomeIcon icon={faBath} color={'white'} />
                  </Text>
                  <Text style={styles.bedsAndBaths}>{item.propBaths} Baths</Text>
                </View>
              </View>
              <TouchableHighlight
                style={styles.link}
                activeOpacity={0.75}
                underlayColor="#181616"
                onPress={() => navigation.navigate('PropertyDetails', { propertyId: item.propId })}>
                  <Text style={styles.simpleBtn}>Book Now <Text style={styles.iconRight}><FontAwesomeIcon icon={faArrowRight} color={'white'} /></Text></Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <>
      {/* Fenêtre Modal pour le Filtre par catégories */}
      <FilterModal modalVisible={modalVisible} setModalVisible={setModalVisible}
        setCurrentPage={setCurrentPage}
        categories={categories}
        filter={filter} setFilter={setFilter}
        intermediateFilter={intermediateFilter} setIntermediateFilter={setIntermediateFilter}
        filteredProperties={filteredProperties} setFilteredProperties={setFilteredProperties}
      />

      <View style={styles.property}>
        <View style={styles.container}>
          <View style={styles.sectionHeading}>
            {/* Feedback le temps de recevoir la query */}
            {refreshing && <Text style={styles.loadingMessage}>Loading Filtered Properties…</Text>}
            <TouchableHighlight
              style={styles.filterButton}
              activeOpacity={0.5}
              underlayColor="#FFFFFF"
              onPress={() => handleFilterButtonClick()}>
              <Text href="#" style={styles.btn}>Filter Properties <Text style={styles.iconRight}><FontAwesomeIcon icon={faArrowRight} color={'#FFFFFF'} size={20} /></Text></Text>
            </TouchableHighlight>
          </View>

          {/* Affichage des bien immobiliers */}
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListEmptyComponent={handleEmpty}
          // scrollEnabled={false}
          />

          {/* Affichage des boutons de pagination */}
          <View style={styles.paginationContainer}>
            {renderPaginationButtons()}
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  property: {
    width: '100%',
    backgroundColor: '#181616',
    color: 'white',
    borderTopLeftRadius: 17.5,
    borderBottomRightRadius: 17.5
  },
  container: {
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  sectionHeading: {
    marginBottom: '30px',
    textAlign: 'left',
    marginLeft: 0,
    maxWidth: '630px',
    marginRight: 'auto'
  },
  sectionHeadingInner: {
    maxWidth: '620px'
  },
  sectionHeadingSubtitle: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
    borderRadius: 3,
    fontSize: 20,
    textTransform: 'uppercase'
  },
  textGradient: {
    fontWeight: '600'
  },
  sectionHeadingTitle: {
    textAlign: 'center',
    color: 'white'
  },
  propertyBtn: {
    textAlign: 'center'
  },
  btn: {
    borderTopLeftRadius: 17.5,
    textAlign: 'center',
    fontWeight: '600',
    color: 'white',
    fontSize: 20,
    textTransform: 'uppercase',
    backgroundColor: '#F69120',
    justifyContent: 'center',
    padding: 10
  },
  iconRight: {
    textAlign: 'right',
    color: 'white',
    fontSize: 20,
  },
  row: {
    flexWrap: 'wrap',
    marginTop: 'calc(-1 * 1.5)',
    marginRight: 'calc(-.5 * 1.5)',
    marginLeft: 'calc(-.5 * 1.5)'
  },
  col: {
    flexShrink: 0,
    width: '100%',
    maxWidth: '100%',
  },
  propertyItem: {
    backgroundColor: '#211F1F',
    position: 'relative',
    transition: '0.2s linear',
    boxShadow: '0px 4.8px 24.4px -6px rgba(19, 16, 34, 0.1), 0px 4px 13px -2px rgba(19, 16, 34, 0.06)'
  },
  propertyItemThumb: {
    position: 'relative',
    overflow: 'hidden',
    transition: '0.2s linear',
    width: '100%'
  },
  link: {
    overflow: 'hidden',
    color: 'white'
  },
  coverImg: {
    width: 400,
    height: 200,
    //resizeMode: 'contain'
  },
  propertyItemBadge: {
    textAlign: 'center',
    opacity: 0.9,
    position: 'absolute',
    left: 0,
    bottom: 0,
    padding: 7.5,
    backgroundColor: '#F69120',
    borderTopLeftRadius: 17.5,
    borderBottomRightRadius: 17.5,
    fontWeight: '600',
    color: 'white',
    zIndex: 1,
    textTransform: 'uppercase',
    fontSize: 20,
    letterSpacing: 2
  },
  propertyItemContent: {
    padding: 'clamp(1rem, -0.065rem + 2.219vw, 1.875rem)',
    color: 'white',
    //flexGrow: 1
  },
  propertyItemPrice: {
    textAlign: 'center',
    color: 'white',
    paddingTop: 10,
    fontSize: 20,
    fontWeight: '400'
  },
  day: {
    fontSize: 16,
    opacity: 0.8,
    fontWeight: '300'
  },
  propertyItemTitle: {
    textAlign: 'center',
    color: 'white',
    padding: 5,
    fontSize: 20,
    //fontWeight: '400'
  },
  propertyItemLocation: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    //padding: 10,
    //fontWeight: '300',
    opacity: 0.8,
    gap: 0.5
  },
  propertyItemBottom: {
    //flexWrap: 'wrap',
    //justifyContent: 'space-between',
    alignItems: 'center',
    gap: 0.5
  },
  amenitiesList: {
    alignItems: 'center',
    color: 'white',
    //gap: 20,
    //flexWrap: 'wrap'
  },
  amenitiesListItem: {
    flexDirection: 'row',
    color: 'white',
    fontSize: 20,
    padding: 10,
    opacity: 0.8,
    fontWeight: '300',
    //flexWrap: 'wrap',
    gap: 10
  },
  icon: {
    fontSize: 20
  },
  bedsAndBaths: {
    textAlign: 'center',
    color: 'white'
  },
  simpleBtn: {
    textAlign: 'center',
    padding: 7.5,
    marginBottom: 15,
    backgroundColor: '#F69120',
    borderTopLeftRadius: 17.5,
    borderBottomRightRadius: 17.5,
    fontWeight: '600',
    fontSize: 20,
    color: 'white',
    textTransform: 'uppercase',
    opacity: 0.9
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#211F1F',
    borderBottomRightRadius: 17.5,
  },
  paginationButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 4,
    backgroundColor: '#BDBDBD',
  },
  activeButton: {
    backgroundColor: '#F69120',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
  },
  loadingMessage: {
    backgroundColor: '#F69120',
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 20,
  },
});

export default PropertySection;
