import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


import { SvgXml } from 'react-native-svg';
import SVG from "./../SVG/SvgComponent"

const PreviewPropertyDetails = () => {
  return (
    <View style={styles.propertyDetailsItem}>
      <Text style={styles.title}>Preview</Text>
      <View style={styles.content}>
        <View style={styles.row}>
          <DetailItem
            xml={SVG.room}
            text="Room"
            title="4 Room"
          />
          <DetailItem
            xml={SVG.bed}
            text="Bed"
            title="3 Beds"
          />

        </View>

        <View style={styles.row}>
        <DetailItem
                   xml={SVG.bath}
                    text="Bath"
                    title="2 Baths"
                  />
          <DetailItem
            xml={SVG.space}
            text="Space"
            title="3 Space"
          />
          </View>
          <View style={styles.row}>
          <DetailItem
            xml={SVG.size}
            text="Size"
            title="1020 sqft"
          />
          <DetailItem
            xml={SVG.propertyType}
            text="Property Type"
            title="Apartment"
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
