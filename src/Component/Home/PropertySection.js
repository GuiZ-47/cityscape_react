import React from 'react';
import {View, TouchableHighlight, Text, Image, FlatList, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../Page/Home/Home.jsx';

const PropertySection = ({ PropertySection }) => {
  const navigation = useNavigation();
  let properties = [];
  
  for (let i = 0; i < 6; i++) {
    properties.push(
      <View style={styles.col}>
        <View style={styles.propertyItem}>
          <View style={styles.propertyItemThumb}>
            <TouchableHighlight
              style={styles.link}
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => navigation.navigate('PropertyDetails')}>
                <Image source={require('../../../assets/images/thumbs/property-1.png')} alt="" className="cover-img" />
            </TouchableHighlight>
            <Text style={styles.propertyItemBadge}>Sale</Text>
          </View>
          <View style={styles.propertyItemContent}>
            <Text style={styles.propertyItemPrice}>$500.00 <Text className="day">/per day</Text> </Text>
            <Text style={styles.propertyItemTitle}> <Text href="property-details.html" style={styles.link}>Paramount Investments Prestige Property Management </Text> </Text>
            <Text style={styles.propertyItemLocation}> <Text className="icon"> <Text className="fas fa-map-marker-alt"></Text></Text> 66 Broklyant, New York America</Text>
            <View style={styles.propertyItemBottom}>
              <FlatList style={styles.amenitiesList}
                data={[
                  {key: '3 Beds'},
                  {key: '3 Baths'}
                ]}
                renderItem={({item}) => <View style={styles.amenitiesListItem}>
                  <Text className="icon"><Text className="fas fa-bed"></Text></Text>
                        <Text style={styles.text}>{item.key}</Text>
                      </View>}
              />
              <Text href="#" style={styles.simpleBtn}>Book Now <Text className="icon-right"> <Text className="fas fa-arrow-right"></Text> </Text> </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  
  return (
    <View style={styles.property}>
      <View style={styles.container}>
        <View style={styles.sectionHeading}>
          <View style={styles.sectionHeadingInner}>
            <Text style={styles.sectionHeadingSubtitle}> <Text style={styles.textGradient}>Latest property</Text> </Text>
            <Text style={styles.sectionHeadingTitle}>Prestige Propert Management property for you</Text>
          </View>
          <Text href="#" style={styles.btn}>View More <Text className="icon-right"> <Text className="fas fa-arrow-right"></Text> </Text> </Text>
        </View>
        <View style={styles.row}>
          {properties}
        </View>
        <View style={styles.propertyBtn}>
          <Button title="Sell All Listing" color='#FD7E14' href="#" style={styles.btn}>  <Text className="icon-right"> <Text className="fas fa-arrow-right"></Text> </Text> </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    maxHeight: '252px'
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
    fontSize: 0.875,
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
    fontWeight: '400',
    marginBottom: 'clamp(0.75rem, 0.446rem + 0.634vw, 1rem)'
  },
  propertyItemTitle: {
    textAlign: 'center',
    marginBottom: 'clamp(0.75rem, 0.141rem + 1.268vw, 1.25rem)',
    color: 'white',
    fontWeight: '400'
  },
  propertyItemLocation: {
    textAlign: 'center',
    color: 'white',
    fontSize: 0.75,
    fontWeight: '300',
    opacity: 0.8,
    gap: 0.5
  },
  propertyItemBottom: {
    paddingTop: '16px',
    marginTop: '22px',
    borderTop: '1px solid white',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 0.5
  },
  amenitiesList: {
    color: 'white',
    gap: 20,
    flexWrap: 'wrap'
  },
  amenitiesListItem: {
    color: 'white',
    fontSize: 0.75,
    opacity: 0.8,
    fontWeight: '300',
    flexWrap: 'wrap',
    gap: 10
  },
  text: {
    color: 'white'
  },
  simpleBtn: {
    fontSize: 0.75,
    color: 'white',
    textTransform: 'uppercase',
    opacity: 0.9
  },
  link: {
    overflow: 'hidden',
    transition: '0.2s linear'
  },  
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
    marginBottom: 10,
    letterSpacing: 0.11,
    fontSize: 20,
    textTransform: 'uppercase'
  },
  textGradient: {
    backgroundClip: 'text',
    transition: 'background 0.3s ease-in-out',
    fontWeight: '600'
  },
  sectionHeadingTitle: {
    color: 'white'
  },
  row: {
    flexWrap: 'wrap',
    marginTop: 'calc(-1 * 1.5)',
    marginRight: 'calc(-.5 * 1.5)',
    marginLeft: 'calc(-.5 * 1.5)'
  },
  propertyBtn: {
    marginTop: 'clamp(1.5rem, -1.239rem + 5.705vw, 3.75rem)',
    textAlign: 'center'
  },
  btn: {
    position: 'relative',
    borderRadius: 5,
    border: '1px solid transparent',
    fontWeight: '500',
    color: 'white',
    zIndex: 1,
    fontSize: 20,
    lineHeight: 1,
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    borderColor: 'orange',
    padding: '14px 20px'
  }
});

export default PropertySection;
