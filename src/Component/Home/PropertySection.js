import React, { useState, useEffect } from 'react';
import { View, TouchableHighlight, Text, Image, FlatList, Button, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { faBed } from '@fortawesome/free-solid-svg-icons/faBed';
import { faBath } from '@fortawesome/free-solid-svg-icons/faBath';

import GLOBALS from '../Common/Globals';

const PropertySection = ({ PropertySection, properties }) => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.property}>
      <View style={styles.container}>
        <View style={styles.sectionHeading}>
          <View style={styles.sectionHeadingInner}>
            <Text style={styles.sectionHeadingSubtitle}><Text style={styles.textGradient}>Latest property</Text></Text>
            <Text style={styles.sectionHeadingTitle}>Prestige Property Management property for you</Text>
          </View>
          <TouchableHighlight
            style={styles.link}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate('Properties')}>
              <Text href="#" style={styles.btn}>View More <Text style={styles.iconRight}><FontAwesomeIcon icon={faArrowRight} color={'white'} /></Text></Text>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>
          {properties.map((property) => (
          <View style={styles.col} key={property.propId}>
            <View style={styles.propertyItem}>
              <View style={styles.propertyItemThumb}>
                <TouchableHighlight
                  style={styles.link}
                  activeOpacity={0.6}
                  underlayColor="#DDDDDD"
                  onPress={() => navigation.navigate('PropertyDetails', {propertyId: property.propId})}>
                    <Image source={{ uri: `${GLOBALS.BASE_URL}${GLOBALS.URL_IMAGES_PROPERTIES}${property.picName}` }} alt="" style={styles.coverImg} />
                </TouchableHighlight>
                <Text style={styles.propertyItemBadge}>Sale {property.propId}</Text>
              </View>
              <View style={styles.propertyItemContent}>
                <Text style={styles.propertyItemPrice}>${property.propPrice} <Text style={styles.day}>/per day</Text></Text>
                <Text style={styles.propertyItemTitle}>
                  <TouchableHighlight
                    style={styles.link}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => navigation.navigate('PropertyDetails', {propertyId: property.propId})}>
                      <Text style={styles.link}>{property.propTitle}</Text>
                  </TouchableHighlight>
                </Text>
                <Text style={styles.propertyItemLocation}><Text className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} color={'white'} /> </Text>66 Broklyant, New York America</Text>
                <View style={styles.propertyItemBottom}>
                  <View style={styles.amenitiesList}>
                    <View style={styles.amenitiesListItem}>
                      <Text style={styles.icon}>
                        <FontAwesomeIcon icon={faBed} color={'white'} />
                      </Text>
                      <Text style={styles.bedsAndBaths}>{property.propBeds} Beds</Text>
                      <Text style={styles.icon}>
                        <FontAwesomeIcon icon={faBath} color={'white'} />
                      </Text>
                      <Text style={styles.bedsAndBaths}>{property.propBaths} Baths</Text>
                    </View>
                  </View>
                  <Text href="#" style={styles.simpleBtn}>Book Now<Text className="icon-right"><Text className="fas fa-arrow-right"></Text></Text></Text>
                </View>
              </View>
            </View>
          </View>
          ))}
        </View>
        <View style={styles.propertyBtn}>
          <Button title="Sell All Listing" color='#FD7E14' href="#" style={styles.btn}><Text className="icon-right"><Text className="fas fa-arrow-right"></Text></Text></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property: {
    width: '100%',
    backgroundColor: '#181616',
    color: 'white',
    paddingTop: '60px',
    paddingBottom: '60px'
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
    textAlign: 'center',
    fontWeight: '400',
    color: 'white',
    zIndex: 1,
    fontSize: 20,
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    borderColor: 'orange',
    padding: 10
  },
  iconRight: {
    textAlign: 'right'
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
    paddingRight: 'calc(1.5 * .5)',
    paddingLeft: 'calc(1.5 * .5)',
    marginTop: 1.5
  },
  propertyItem: {
    backgroundColor: '#211F1F',
    borderRadius: 5,
    overflow: 'hidden',
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
    height: 250,
    //resizeMode: 'contain'
  },
  propertyItemBadge: {
    textAlign: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
    padding: '5px 10px',
    borderRadius: 5,
    color: 'white',
    zIndex: 1,
    textTransform: 'uppercase',
    fontSize: 20,
    letterSpacing: 2
  },
  propertyItemContent: {
    padding: 'clamp(1rem, -0.065rem + 2.219vw, 1.875rem)',
    color: 'white',
    flexGrow: 1
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
    padding: 10,
    fontSize: 20,
    //fontWeight: '400'
  },
  propertyItemLocation: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    padding: 10,
    //fontWeight: '300',
    opacity: 0.8,
    gap: 0.5
  },
  propertyItemBottom: {
    //flexWrap: 'wrap',
    justifyContent: 'space-between',
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
    textAlign: 'right',
    fontSize: 20,
    color: 'white',
    textTransform: 'uppercase',
    opacity: 0.9
  }
});

export default PropertySection;
