import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

//import { useNavigation } from '@react-navigation/native';

import { SvgXml } from 'react-native-svg';
import SVG from "./../SVG/SvgComponent";

const PreviewPropertyDetails = ({propertyDetails}) => {

  return (
    <View style={styles.propertyDetailsItem}>
      <Text style={styles.title}>Preview of the "{propertyDetails[0].propTitle}" property : </Text>
      <View style={styles.content}>
        <View style={styles.row}>
          <DetailItem
            xml={SVG.room}
            text="Room"
            title={" " + propertyDetails[0].propRooms + " Rooms"}

          />
          <DetailItem
            xml={SVG.bed}
            text="Bed"
            title={" " + propertyDetails[0].propBeds + " Beds"}
          />
        </View>

        <View style={styles.row}>
        <DetailItem
                   xml={SVG.bath}
                    text="Bath"
                    title={" " + propertyDetails[0].propBaths + " Baths"}
                  />
          <DetailItem
            xml={SVG.space}
            text="Space"
            title={" " + propertyDetails[0].propSpaces + " Spaces"}
          />
          </View>
          <View style={styles.row}>
          <DetailItem
            xml={SVG.size}
            text="Size"
            title={" " + propertyDetails[0].propArea + " m²"}
          />
          <DetailItem
            xml={SVG.propertyType}
            text="Property Type"
            title={" " + propertyDetails[0].propType}
          />
        </View>
      </View>
    </View>
  );
};

const DetailItem = ({ xml, text, title }) => {
  return (
    <View style={styles.detailItem}>
      <SvgXml xml={xml} width= '50' height='50' />
      <View style={styles.detailText}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  propertyDetailsItem: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  detailText: {
    flex: 1,
  },
  text: {
    fontSize: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PreviewPropertyDetails;
