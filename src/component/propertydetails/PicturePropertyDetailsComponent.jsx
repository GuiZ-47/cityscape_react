import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const PicturePropertyDetails = ({ property }) => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.col}>
          <View style={styles.propertyDetailsThumb}>
            <Image
              source={{ uri: 'https://picsum.photos/200/200' }} // Placeholder image from Lorem Picsum
              style={styles.image}
            />
          </View>
        </View>
        <View style={styles.col}>
          <View style={styles.propertyDetailsThumb}>
            <Image
              source={{ uri: 'https://picsum.photos/200/200' }} // Placeholder image from Lorem Picsum
              style={styles.image}
            />
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <View style={styles.propertyDetailsThumb}>
            <Image
              source={{ uri: 'https://picsum.photos/200/200' }} // Placeholder image from Lorem Picsum
              style={styles.image}
            />
          </View>
        </View>
        <View style={styles.col}>
          <View style={styles.propertyDetailsThumb}>
            <Image
              source={{ uri: 'https://picsum.photos/200/200' }} // Placeholder image from Lorem Picsum
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    flexDirection: 'row',
    width: '100%'
  },
  col: {
    flex: 1
  },
  propertyDetailsThumb: {
    margin: 2,
    aspectRatio: 1 // Maintain aspect ratio
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
});

export default PicturePropertyDetails;
