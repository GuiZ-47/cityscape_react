import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import GLOBALS from "./../../Component/Common/Globals";

const PicturePropertyDetails = ({ propertyDetails }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {propertyDetails.map((objet, index) => (
          <View key={index} style={styles.propertyDetailsThumb}>
            <Image
              source={{ uri: `${GLOBALS.BASE_URL}${GLOBALS.URL_IMAGES_PROPERTIES}${objet.picName}` }}
              style={styles.image}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageContainer: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  propertyDetailsThumb: {
    margin: 2,
    aspectRatio: 1, // Maintain aspect ratio
    width: '48%'
  },
  image: {
    width: '100%',
    height: '100%',
    // resizeMode: 'cover',
  },
});

export default PicturePropertyDetails;
